import { UserLog } from "../domain/UserLog.ts";
import { UserLogInputPort } from "./port/UserLogInputPort.ts";

export class UserLogUsecase {
  constructor(private inputPort: UserLogInputPort) {}

  async execute(userId: string): Promise<UserLog> {
    return await this.inputPort.getUserLog(userId);
  }
}
