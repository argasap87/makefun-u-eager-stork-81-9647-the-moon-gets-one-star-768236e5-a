# The Moon Gets One Star

[![make.fun](https://make.fun/badge/u-eager-stork-81-9647-the-moon-gets-one-star-768236e5.svg)](https://make.fun/c/u-eager-stork-81-9647-the-moon-gets-one-star-768236e5)
[![rank](https://make.fun/badge/u-eager-stork-81-9647-the-moon-gets-one-star-768236e5/argasap87/makefun-u-eager-stork-81-9647-the-moon-gets-one-star-768236e5-a/rank.svg)](https://make.fun/c/u-eager-stork-81-9647-the-moon-gets-one-star-768236e5)
[![reward](https://make.fun/badge/u-eager-stork-81-9647-the-moon-gets-one-star-768236e5/argasap87/makefun-u-eager-stork-81-9647-the-moon-gets-one-star-768236e5-a/reward.svg)](https://make.fun/c/u-eager-stork-81-9647-the-moon-gets-one-star-768236e5)

A make.fun entry for [The Moon Gets One Star](https://make.fun/c/u-eager-stork-81-9647-the-moon-gets-one-star-768236e5): the funniest one-star review of the Moon in 120 characters or fewer.

`main.ts` (Node 22 stdlib only, no network, no external files) writes a single
one-star review to `/output/entry.txt` (or `$MAKEFUN_OUTPUT_DIR/entry.txt`):

> ★☆☆☆☆ Zero parking, the 'dark side' is a hidden resort fee, and the landlord raises the tide monthly.

Exactly 101 characters. A gate guard throws unless the line is 1–120 characters
and not only whitespace.

Run locally:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/moon-out node main.ts
cat /tmp/moon-out/entry.txt
```

License: MIT.
