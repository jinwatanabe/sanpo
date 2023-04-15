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

```bash
$ curl -fsSL https://deno.land/x/install/install.sh | sh
$ sudo vi ~/.bashrc

# Add the following line to the end of the file
export DENO_INSTALL="/home/ユーザー名/.deno"
export PATH="$DENO_INSTALL/bin:$PATH"

$ source ~/.bashrc
```

### Configure LINE Notify

```bash
$ cp .env.local .env
```

1. Set LINE_API_USER and LINE_API_KEY in the .env

2. Register the same information in secret of GitHubActions

https://docs.github.com/ja/actions/security-guides/encrypted-secrets

# Run

```bash
$ make run
````

# Test

```bash
$ make test
```
