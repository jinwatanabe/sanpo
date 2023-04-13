import { UserLog } from "../domain/UserLog.ts";
import { UserLogUsecase } from "../usecase/UserLogUsecase.ts";
import { UserLogInputPort } from "../usecase/port/UserLogInputPort.ts";
import { assertEquals } from "./deps.ts";

Deno.test("usecase", async () => {
  const inputPortMock = {} as UserLogInputPort;
  const userLog = new UserLog("jinwatanabe", "Watanabe Jin", true);
  inputPortMock.getUserLog = async () => await userLog;
  const userId = "jinwatanabe";

  const target = new UserLogUsecase(inputPortMock);
  const actual = await target.execute(userId);

  assertEquals(actual, userLog);
});
