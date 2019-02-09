# GDD 325: 2D Web Game Base LITE
#### A light-weight code base for student games developed in GDD 325 at UW Stout

# Recommended Software and Tools
Before getting started, install and configure software as follows:
- Install [Git for Windows](https://git-scm.com/download/win) and configure as follows
  - _Enable checking for updates_: This option comes up early in the install wizard
  - _Choose the default editor used by git_: Change to 'Use nano as the default editor'
  - _Configuring line endings_: change to 'Check out as-is, commit unix style'
- Install [node.js](https://nodejs.org/) LTS version (the even numbered version, NOT the odd one)
- Install [Visual Studio Code](https://code.visualstudio.com/)
  - At 'Additional Tasks', ENABLE the TWO 'Open with Code' options and the 'Create a Desktop Icon' option.
- Install recommended VS Code extensions (select 'extensions' at left or press ctrl+shift+x):
  - Beautify
  - Node.js Extension Pack
  - vscode-icons

# Using this Project
To retrieve the code and install dependencies:
- Click the 'clone or Download' button and download the zip file
- Extract the contents of the zip file to a local folder
- Open the repository folder in VS Code
  - Right-click folder and say 'open in VS Code' or ...
  - Run VS Code and select 'File -> Open Folder' from the menus
- Press ctrl+` (same as tilde key) to open a terminal
- From the terminal, run 'npm install'

To serve the 'public' directory while DEVELOPING the code:
- From the terminal, run 'npm run dev'
- All changes to files under the 'public' directory will automatically reload the browser
- A global JavaScript variable \_\_DEV__ will be set to true and debugging info will appear

To serve the 'public directory for PLAING the game:
- From the termainl, run 'npm start'
- All changes to files will still automatically reload the browser
- Debug info will NOT display and \_\_DEV__ will be set to false

# How it Works
This project is really just a way to serve your Phaser files locally.  It uses browser-sync: a simple web server that runs
locally on your machine and simulates a real server. Without this, you would not be able to easily load the assets needed
for your Phaser game. It also has some configuration to make editing in VS Code easier including configuration and installation
of ESLint, a system to run in a 'dev' mode with extra debugging information, and some useful phaser 3 plugins pre-setup.

The needed phaser libraries and plugsin are loaded from content delivery networks (CDNs) and your javascript code runs directly
in the browser without translation, packaging, or minification. Most examples from the Phaser 3 labs should work in this framework.
If you only run your project in a modern version of Chrome then most of ES6 IS supported but this will limit the ability to play
your game in older browsers.  For wider browser compatibility and better ES6 support, please use the full, heavyweight 
gdd325-web-base project available here on github.

# Adding Files
When you are editing the code, consider using multiple JavaScript files to separate your code. If you add a new JavaScript file it
must be MANUALLY added to the list of files in the HTML \<body> tag. Be sure to edit the __index.html__ in the root folder of the
project NOT the one in public which is automatically generated (see 'Project Structure' below).

# Phaser 3 and Plugins
This project is now based on phaser 3 (NOT the 'community edition', sometimes called Phaser 2). It will setup and use the
[debug draw](https://github.com/samme/phaser-plugin-debug-draw) and [scene update](https://github.com/samme/phaser-plugin-update)
plugins by default. Debug draw is only enabled when running in dev mode.

# Project Structure
The various folders in the project directory all serve specific purposes. Please try to adhere to the conventions listed
below when adding new files to your project so that things stay organized and it is easier to work concurrently without
stepping on each other's toes.

The project folders are structured as follows:
* __index.html__ - HTML file used in non-dev mode (edit to include extra js files if needed).
* __index.dev.html__ - HTML file used in dev mode (edit to include extra js files if needed).
* __public__ - All files under this directory are served by browsersync.
* __public/src__ - All the JavaScript code for your game.
* __public/assets__ - All data/assets go here (both binary and JSON encoded).
* __package.json__ - Lists info about the project included the 'start' and 'dev' scripts and the dependencies.

The following folders are managed by the tools and are automatically generated (therefore KEEP OUT):
* __public/index.html__ - The main HTML file (copied from one of the root HTML files automatically).
* __node_modules__ - These are packages installed by node when you run 'npm install' (lots of JS libraries).
* __package-lock.json__ - Generated by npm when you run npm install (list of EVERYTHING it installs).

# Tips for Project Success
- This project deliberately inclues options to support use of VS Code. It is the recommended code editor.
- Remember, you can and should use ES6 features in most browsers especially object oriented 'class' features.

# Credits
This project was created as a lightweight version of the complex gdd325-web-base project. It abandons babel and webpack
and does not use modular code like that project. All code is instead directly loaded in the browser and therefore it will
only work in modern browsers that support the basics of ES6. It will allow for making much simpler experiences quickly
but is not recommended for complex games with multiple levels and complex character movement.
