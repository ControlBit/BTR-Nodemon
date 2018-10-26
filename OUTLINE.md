# Beyond the Readme: Nodemon

## What is nodemon?

    - What gap does nodemon fill?
    - What was it intended for?

## How does nodemon work?

     - Walkthrough: Build your own nodemon
        - What is piping (in unix and node)?
        - What is child_process.spawn() ?

## What does nodemon offer beyond this basic wrapper?

    - requiring nodemon as a module
        - spawning w/ arguments
        - events
            - on / once
            - emit
    - nodemon cli
        - arguments
            - --ext, -e
            - --exec, -x
            - --ignore, -i
            - --watch, -w
            - --delay, -d
            - --verbose, -V
            - --dump
    - nodemon.json configuration (or package.json)
        - properties
        - events

## What else / Now what?

    - nodemon in workflow
        - testing environments (transpilers, builders, testing suites, etc)
        - containers  (docker, kubernetes)
        - deployment/production

## Misc (these will be added into other sections)
- running other file types (python, bash, etc)
- passing additional node arguments (for example, -r dotenv/config to have global env variables populated)
- specificity (cli > local config > global config | filename > main > index.js | npm start)