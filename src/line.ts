import { UserLog } from "./domain/UserLog.ts";
import { config, axiod } from "./deps.ts";

export function notice(userlog: UserLog): void {
  if (!userlog.commit) {
    return;
  }

  const env = config();
  const API_KEY = env.LINE_API_KEY;
  const USER_ID = env.LINE_USER_ID;

  const message = `${userlog.name}さんがコミットしました。`;

  axiod.post(
    "https://api.line.me/v2/bot/message/push",
    {
      to: USER_ID,
      messages: [
        {
          type: "text",
          text: `${message}`,
        },
      ],
    },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
    }
  );
}
