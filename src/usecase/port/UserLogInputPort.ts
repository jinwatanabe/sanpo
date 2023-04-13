import { UserLog } from "../../domain/UserLog.ts";

export interface UserLogInputPort {
  getUserLog(): UserLog;
}
