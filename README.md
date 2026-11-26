# news-image-20261126-v2

[![make.fun · news-image-20261126](https://make.fun/badge/news-image-20261126.svg)](https://make.fun/bounty/news-image-20261126?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126)
[![rank](https://make.fun/badge/news-image-20261126/hackedbyexteam-debug/news-image-20261126-v2/rank.svg)](https://make.fun/bounty/news-image-20261126/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126)
[![reward](https://make.fun/badge/news-image-20261126/hackedbyexteam-debug/news-image-20261126-v2/reward.svg)](https://make.fun/bounty/news-image-20261126?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126)

One 1024×1024 broadsheet image summing up Thursday 26 November 2026: 50 true stories from 50 countries, laid out in the format of the 24 and 25 November entries — navy top strip, giant date masthead, red ticker, a 9-region bar (N. America 1 · Latin Am. 4 · Europe 13 · Middle East 7 · N. Africa 3 · Sub-Saharan Africa 10 · S. Asia 4 · East & SE Asia 5 · Oceania 3), a fields line, a UTC timeline, giant-number stats, 3 illustrated leads, 10 mid stories, a world map with numbered dots, a 37-story list, and a DATE CHECK box naming what was left out and why. Every drawing is original, drawn by code; no photograph or copied image is used.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

Copies `entry.png` to `out/entry.png` and verifies the copy byte-for-byte. The program refuses to run if the image is not exactly 1024×1024 or is larger than 1 MiB.
