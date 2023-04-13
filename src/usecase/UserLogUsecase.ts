import { UserLog } from "../domain/UserLog.ts";
import { UserLogInputPort } from "./port/UserLogInputPort.ts";

export class UserLogUsecase {
  constructor(private inputPort: UserLogInputPort) {}

  execute(userId: string): UserLog {
    return this.inputPort.getUserLog(userId);
  }
}
