export class UserLog {
  constructor(
    readonly id: UserId,
    readonly name: UserName,
    readonly commit: UserCommit
  ) {}
}

export class UserId {
  constructor(readonly value: string) {}
}

export class UserName {
  constructor(readonly value: string) {}
}

export class UserCommit {
  constructor(readonly value: boolean) {}
}
