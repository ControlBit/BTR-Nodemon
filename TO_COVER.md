# Beyond the README: Nodemon

## Why Nodemon?

To quote the nodemon website,

```
Nodemon is a utility that will monitor for any changes in your source and automatically restart your server. Perfect for development.
```

If that doesn't cover it, nodemon is a great developer aid that watches all of your input files, and anytime it sees a change, will restart your project. It's hot-reloading for the backend.

In personal experience, I've found nodemon to significantly speed up development, as I no longer have to worry about restarting my project every time I make a change.

## Initial Thoughts

Since nodemon is actually a fairly small package, the readme covers almost all of its functionality.

For this reason, please note that this repo is best used as a companion to the video tutorial of the same name. My intention is only to help more developers find success in using this package, by providing an easy-to-consume informational series on the subject.

## Installation

Nodemon can be installed globally, or locally as a dependency to a project.
As explained in the official readme, nodemon follows a specificity, which is important to be aware of, so that as you use nodemon, your custom configurations work correctly.

From lowest specificity to highest:
1. global config
2. local config
3. command line arguments

These will be covered with more depth later, so don't worry about that now.

Like other NPM packages, you can install nodemon like so:

Global:
```
npm install -g nodemon
```

Locally (as a devDependency, which is preferred):
```
npm install --save-dev nodemon
```

## Basic Usage

At it's most basic level, you can simply run:

```
nodemon
```

or

```
nodemon <file>
```

If a file is not specified in the CLI, nodemon will look inside your package.json for a `main` field. If `main` is found, the file it references will be the source.

If your `package.json` does not have a `main` field, nodemon will search for an `index.js` file at the root of your project, and use that.

In the case `index.js` is not found, the `scripts/start` command will run. You will be notified if none of the above criteria exist.

If at any point you need to restart nodemon (perhaps after a crash), you can run `rs` inside of the nodemon instance.

## CLI Arguments



## Config file (or package.json)

## Inspect mode

## Module, Child Process, Non-Node Scripts, and Chrome Debugger

## Final thoughts