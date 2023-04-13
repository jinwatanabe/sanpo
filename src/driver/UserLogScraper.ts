import { Element } from "https://deno.land/x/deno_dom/deno-dom-wasm.ts";
import { DOMParser } from "../deps.ts";

async function fetchHtml(url: string): Promise<string> {
  const response = await fetch(url);
  const html = await response.text();
  return html;
}

async function checkUserLog(userId: string): Promise<UserLogJson> {
  const url = `https://github.com/${userId}`;
  const html = await fetchHtml(url);

  const parser = new DOMParser();
  const document = parser.parseFromString(html, "text/html");

  if (!document) {
    throw new Error("document is null");
  }

  const contributions = document.querySelectorAll(
    "rect.ContributionCalendar-day"
  );
  const currentDate = new Date();
  const currentDateFormatted = currentDate.toISOString().split("T")[0];
  let commitCount = 0;

  contributions.forEach((contribution) => {
    const c = contribution as Element;
    const date = c.getAttribute("data-date");
    const count = parseInt(c.getAttribute("data-level") || "0");

    if (date === currentDateFormatted) {
      commitCount = count;
    }
  });

  const commit = commitCount !== 0;
  const name =
    document.querySelector("span.p-nickname.vcard-username.d-block")
      ?.textContent || "";

  return new UserLogJson(userId, name, commit, commitCount);
}

export class UserLogScraper {
  constructor() {}

  async run(userId: string): Promise<UserLogJson> {
    return await checkUserLog(userId);
  }
}

export class UserLogJson {
  constructor(
    readonly id: string,
    readonly name: string,
    readonly commit: boolean,
    readonly commitCount: number
  ) {}
}
