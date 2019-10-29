# Recover `git reset --hard`

I once accidentally typed
```git
git init
git reset --hard
```
and bump! all of my code gone. I was super panic, went all around stack overflow, googling,... but unfortunately, my repo was just initialized, had not have any history yet, so I can't just [`git reset --hard HEAD@{1}`](https://stackoverflow.com/a/5127681/9787887) to "undo reset --hard by a reset --hard".

Finally, my solution was:

[`git fsck --lost-found`](https://stackoverflow.com/a/21873/9787887)
, and ran a script, which is `script.js` in this repo. Read out the code to be more clear! This repo is to manipulate what happened to me to recover those files I needed.