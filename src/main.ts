import { UserLogScraper } from "./driver/UserLogScraper.ts";
import { UserLogGateway } from "./gateway/UserLogGateway.ts";
import { UserLogUsecase } from "./usecase/UserLogUsecase.ts";

const driver = new UserLogScraper();
const userLogGateway = new UserLogGateway(driver);
const userLogUsecase = new UserLogUsecase(userLogGateway);

const userLog = await userLogUsecase.execute("jinwatanabe");

console.log(userLog);
