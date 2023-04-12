<div><img src="./docs/images/main.jpg" /></div>

<div align="center">Sanpo notifies you if your competitors have committed on GitHub</div>

---

- [Installation](#installation)
- [Cron](#cron)
- [Usage](#usage)
- [Test](#test)

# Installation

```bash
$ git clone https://github.com/jinwatanabe/sanpo.git
$ cd sanpo
```

### Install Deno

```bash
$ curl -fsSL https://deno.land/x/install/install.sh | sh
$ sudo vi ~/.bashrc

# Add the following line to the end of the file
export DENO_INSTALL="/home/watanabejin/.deno"
export PATH="$DENO_INSTALL/bin:$PATH"
```

# Cron

```bash
$ code /etc/crontab
```

以下を最後に追加(毎時 30 分に起動)

```
30 *  * * * root    sh /home/watanabejin/workspace/rota/cron.sh
```

Cron を起動

```bash
$ systemctl start cron
```

# Usage

```bash
$ make dev
```

# Test

```bash
$ make test
```
