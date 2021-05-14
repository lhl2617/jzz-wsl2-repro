# `JZZ()` call fails on WSL2 

## Issue Summary
`JZZ()` call fails crashes on WSL2 without any catch-able exceptions.

## Reproduction environment

### Windows Version
Windows 10 Version 20H2 (OS Build 19042.867)

### WSL2 Version
2

### WSL Ubuntu Version
```
$ cat /etc/issue 
Ubuntu 20.04.2 LTS \n \l

$ uname -a
Linux <REDACTED> 5.4.72-microsoft-standard-WSL2 #1 SMP Wed Oct 28 23:40:43 UTC 2020 x86_64 x86_64 x86_64 GNU/Linux
```

### Node version
v12.22.1

## Reproduction Steps
1. Set up reproduction environment.
2. Clone repository into WSL2.
3. Run `npm i`
4. Run `npm start`

### Expected Behavior
Runs without any logs (succeeded), or fails gracefully with the exception caught.

### Obtained Behavior

```bash
$ npm run start

> jzz-testing@1.0.0 start /home/$USER/experimental/jzz
> node index.js

ALSA lib seq_hw.c:466:(snd_seq_hw_open) open /dev/snd/seq failed: No such file or directory
node: seq.c:1880: snd_seq_query_next_client: Assertion `seq && info' failed.
Aborted
npm ERR! code ELIFECYCLE
npm ERR! errno 134
npm ERR! jzz-testing@1.0.0 start: `node index.js`
npm ERR! Exit status 134
npm ERR! 
npm ERR! Failed at the jzz-testing@1.0.0 start script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/$USER/.npm/_logs/2021-05-14T11_23_57_411Z-debug.log
```
