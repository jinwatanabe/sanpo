import { UserLogScraper } from "./driver/UserLogScraper.ts";
import { UserLogGateway } from "./gateway/UserLogGateway.ts";
import { UserLogUsecase } from "./usecase/UserLogUsecase.ts";
import { notice } from "./line.ts";
import { UserList } from "./data/userList.ts";

const driver = new UserLogScraper();
const userLogGateway = new UserLogGateway(driver);
const userLogUsecase = new UserLogUsecase(userLogGateway);
const userList = UserList;

userList.forEach(async (userId) => {
  const userLog = await userLogUsecase.execute(userId);
  notice(userLog);
});
