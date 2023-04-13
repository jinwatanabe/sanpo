import { UserLog } from "../domain/UserLog.ts";
import { UserLogUsecase } from "../usecase/UserLogUsecase.ts";
import { UserLogInputPort } from "../usecase/port/UserLogInputPort.ts";
import { assertEquals } from "./deps.ts";

Deno.test("usecase", () => {
  const inputPortMock = {} as UserLogInputPort;
  const userLog = new UserLog("id", true, 1);
  inputPortMock.getUserLog = () => userLog;

  const target = new UserLogUsecase(inputPortMock);
  const actual = target.execute();

  assertEquals(actual, userLog);
});
