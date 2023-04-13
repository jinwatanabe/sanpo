import { assertEquals } from "https://deno.land/std@0.65.0/testing/asserts.ts";
import { UserLogGateway } from "../gateway/UserLogGateway.ts";
import { UserLogJson, UserLogScraper } from "../driver/UserLogScraper.ts";
import { UserLog } from "../domain/UserLog.ts";

Deno.test("gateway", async () => {
  const scraper = {} as UserLogScraper;
  scraper.run = async (): Promise<UserLogJson> => {
    return await new UserLogJson("jinwatanabe", "Watanabe Jin", true, 2);
  };

  const userId = "jinwatanabe";
  const target = new UserLogGateway(scraper);
  const actual = await target.getUserLog(userId);
  const expected = new UserLog("jinwatanabe", "Watanabe Jin", true);

  assertEquals(actual, expected);
});
