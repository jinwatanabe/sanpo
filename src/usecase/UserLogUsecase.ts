import { UserLog } from "../domain/UserLog.ts";
import { UserLogInputPort } from "./port/UserLogInputPort.ts";

export class UserLogUsecase {
  constructor(private inputPort: UserLogInputPort) {}

  execute(): UserLog {
    return this.inputPort.getUserLog();
  }
}
