<div><img src="./docs/images/main.jpg" /></div>

<div align="center">Sanpo notifies you if your competitors have committed on GitHub</div>

---

- [Usage](#usage)
- [Installation](#installation)
- [Run](#run)
- [Test](#test)

# Usage

Add the ID of the GitHub user you want to know if he/she committed today to src/data/userList.ts

Push to GitHub and GitHubActions will start and send a notification to LINE at 22:00 every day.

# Installation

```bash
$ git clone https://github.com/jinwatanabe/sanpo.git
$ cd sanpo
```

### Install deno

https://deno.land/manual@v1.32.4/getting_started/installation

### Configure LINE Notify

```bash
$ cp .env.local .env
```

1. Create New Channel
   https://developers.line.biz/ja/

2. Set LINE_API_USER and LINE_API_KEY in the .env

3. Register the same information in secret of GitHubActions
   https://docs.github.com/ja/actions/security-guides/encrypted-secrets

# Run

```bash
$ make run
```

# Test

```bash
$ make test
```
