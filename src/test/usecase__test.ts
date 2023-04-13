import { UserCommit, UserId, UserLog, UserName } from "../domain/UserLog.ts";
import { UserLogUsecase } from "../usecase/UserLogUsecase.ts";
import { UserLogInputPort } from "../usecase/port/UserLogInputPort.ts";
import { assertEquals } from "./deps.ts";

Deno.test("usecase", () => {
  const inputPortMock = {} as UserLogInputPort;
  const userLog = new UserLog(
    new UserId("jinwatanabe"),
    new UserName("Watanabe Jin"),
    new UserCommit(true)
  );
  inputPortMock.getUserLog = () => userLog;
  const userId = "jinwatanabe";

  const target = new UserLogUsecase(inputPortMock);
  const actual = target.execute(userId);

  assertEquals(actual, userLog);
});
