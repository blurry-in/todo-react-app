# todo-react-app
A simple todo application, for the React tutorial on Blurry.in


#PART 1 init npm

npm init

package name: (todo-react-app)
version: (1.0.0)
description:
entry point: (index.js)
test command:
git repository: (https://github.com/blurry-in/todo-react-app.git)
keywords:
author:
license: (ISC)

Creates a package.json file

#PART 2 add webpack and some js (Just Bundling)
##What is webpack?

##npm install --save-dev webpack

While it is installing, lets create a basic index.js file also a .gitignore(why?). With following folder structure:
src
    js
        index.js

###Create a config for webpack file
###Add a script in package.json to run webpack and then run it.
npm run webpack

It will create a dist folder and a bundle.js file inside it.
Congrats webpack bundling is done.

#PART 3 Create an html and run on browser - NEXT