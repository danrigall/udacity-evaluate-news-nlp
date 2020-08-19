# Evaluate a News Article with NLP - App Project

## Table of Contents

* [Overview](#overview)
* [HTML](#html)
* [CSS](#css)
* [Javascript](#javascript)
* [Webpack](#webpack)


## Overview

This project focuses on learning how to use the build tool Webpack, along with different loaders and plugins, to make a web app that uses an external API that evaluates the text of an article & posts the results in the DOM. I took the starter files given to me & constructed two different Webpack builds, the first being the development environment & the second being the production environment. I used Node and NPM to install & update all relevant packages, and reflected these changes in my package.json file. I also used 'jest' to create tests for my javascript functions. While the starter project given to me contained a fair amount of files, I changed pretty much everything about them for my own purposes.


## HTML

The HTML form was not changed too much from the original file. I simply personalized the generic content, then filled it out.


## CSS

The UI is supposed to be for the purpose of evaluating news articles online, so I used some news-y fonts and colors. I'm no graphic artist, but I had fun with it still. This was the first time I had the opportunity to learn about SASS and implement it in the project. It is, indeed, syntactically awesome.


## Javascript

The last project I did focused on async JS, using an express server. This project does the same, but without heavy emphasis on it. It's simply another tool in the bag at this point. In order to interface well with Webpack, I broke each of my functions out into their own file and imported them into the main 'formHandler.js' file. Ultimately, all JS files on client side are imported into a single 'index.js' file. The client-side code focuses on handling a 'submit' event, checking that the form had valid input, fetching a key from the server, using the afore-mentioned input & key to make a call to the API, interpreting the recieved response, and updating the UI to reflect said response.


## Webpack

This was my first time learning or using any sort of build tool. I set up Webpack first by installing it and webpack-cli (after installing npm and express, of course). Then I created a generic config file, added an entry & ouput, and then added loaders & plugins. The detailed list of dependencies is found in the package.json file. At this point I duplicated the generic webpack.config file and effectively created two configs - Dev & Prod. I installed the webpack dev server for convenience (this really helped when it came to styling the page), & distinguished the dev server from the prod server. I then optimized the production build to basically minify everything. Finally, I added service workers to the production environment to enable offline functionality.
