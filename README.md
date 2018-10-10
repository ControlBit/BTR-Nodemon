# Beyond The Readme - Nodemon

## What is nodemon?
[nohd-mawn]

installation

common use cases

how do developers typically use nodemon?

what is covered in the readme
- installation
- usage
    - nodemon -h
    - nodemon \<file> <optional: arguments>
    - nodemon //looks at *main* in package.json
    - nodemon --inspect \<file> <optional: arguments>
    - *nodemon will look for scripts.start
    - manually restarting with rs
    - config file
        - nodemon.json
        - --config \<file>
        - specificity
            - command line arguments
            - local config
            - global config
        - package.json
    - nodemon as a module
    - nodemon as child process
    - running non-node scripts
    - monitoring multiple directories

features
- automatic restart
- change file extension
- nodemon config
- ignore files/directories
- run other file types (python, make, etc)

Passing arguments

Running server applications vs one-time run

Using with the chrome debugger



## Links
[Github](https://github.com/remy/nodemon)

[NPM](https://npmjs.org/package/nodemon)

[Website](https://nodemon.io)