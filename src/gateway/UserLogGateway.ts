import { UserCommit, UserId, UserLog, UserName } from "../domain/UserLog.ts";
import { UserLogJson, UserLogScraper } from "../driver/UserLogScraper.ts";

export class UserLogGateway {
  constructor(readonly userId: string, readonly scraper: UserLogScraper) {}
  async getUserLog(): Promise<UserLog> {
    const userLogJson = await this.scraper.run(this.userId);
    return this.convert(userLogJson);
  }

  convert(log: UserLogJson): UserLog {
    return new UserLog(
      new UserId(log.id),
      new UserName(log.name),
      new UserCommit(log.commit)
    );
  }
}
