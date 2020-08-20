@echo off
rd /s/q dist > NUL
webpack --mode production --config webpack.server.config.js
webpack --mode production --config webpack.prod.config.js