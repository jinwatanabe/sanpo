import { UserLog } from "../domain/UserLog.ts";
import { UserLogScraper } from "../driver/UserLogScraper.ts";
import { UserLogInputPort } from "../usecase/port/UserLogInputPort.ts";

export class UserLogGateway implements UserLogInputPort {
  constructor(readonly scraper: UserLogScraper) {}
  async getUserLog(userId: string): Promise<UserLog> {
    const userLogJson = await this.scraper.run(userId);
    return new UserLog(
      userLogJson.id,
      userLogJson.name.replace("\n          ", "").replace("\n\n        ", ""),
      userLogJson.commit
    );
  }
}
