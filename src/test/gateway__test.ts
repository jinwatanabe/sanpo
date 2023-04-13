import { assertEquals } from "https://deno.land/std@0.65.0/testing/asserts.ts";
import { UserLogGateway } from "../gateway/UserLogGateway.ts";
import { UserLogJson, UserLogScraper } from "../driver/UserLogScraper.ts";
import { UserCommit, UserId, UserLog, UserName } from "../domain/UserLog.ts";

Deno.test("gateway", async () => {
  const scraper = {} as UserLogScraper;
  scraper.run = async (): Promise<UserLogJson> => {
    return await new UserLogJson("jinwatanabe", "Watanabe Jin", true, 2);
  };

  const userId = "jinwatanabe";
  const target = new UserLogGateway(userId, scraper);
  const actual = await target.getUserLog();
  const expected = new UserLog(
    new UserId("jinwatanabe"),
    new UserName("Watanabe Jin"),
    new UserCommit(true)
  );

  assertEquals(actual, expected);
});
