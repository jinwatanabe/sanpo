export class UserLog {
  constructor(
    readonly id: string,
    readonly commit: boolean,
    readonly commitCount: number
  ) {}
}
