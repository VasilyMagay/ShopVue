@echo off
rd /s/q dist > NUL
webpack --mode development --config webpack.server.config.js
webpack --mode development --config webpack.dev.config.js --w
