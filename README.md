# monorepo-template

## What's this repository about?

This repository is intended to serve as a starting point for creating a
TypeScript on monorepos, its use cases, and related tools.

## Project setup

First, you should ensure you have [your ssh keys working with
GitHub][ssh-github]. You can verify this by running

```sh
ssh git@github.com
```

### Tools

Next, make sure you have installed [volta][volta] which ensures you have the
right version of node and yarn for this project

We also strongly recommend the use of [Visual Studio Code][vs-code] as an
authoring tool. If you use something else, you're on your own.

### Clone

Next, checkout a working copy of this project

```sh
git clone git@github.com:chobe/monorepo-template.git
```

enter the directory you just created

```sh
cd monorepo-template
```

### Install dependencies

[`yarn`][yarn] is the recommended package manager to use with this project.
Please use it instead of npm.

Install dependencies with yarn by running

```sh
yarn
```

[ssh-github]:
  https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent
[volta]: https://volta.sh/
[vs-code]: https://code.visualstudio.com/
[yarn]: https://yarnpkg.com/
[verdaccio]: https://verdaccio.org/
