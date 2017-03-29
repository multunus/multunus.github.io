# Multunus - Goodbye

This site was built using [Middleman 4](https://middlemanapp.com/).

## Installation

### Step 1: Clone the repo - Switch to source branch
The project uses a static site generator called [Middleman](https://middlemanapp.com/). All the code files for middleman are present in the **source** branch and the generated static site is present in the **master** branch. Switch to the **source** branch during development. 
> Remember: After making code changes push to the **source** branch (git push -u origin source).

```
git clone https://github.com/multunus/multunus.github.io.git
git checkout source
```

### Step 2: Prerequisites
This project user **bower** as a package manager and **gulp** as a build system for automating tasks. The following commands will install bower and gulp binaries globally in your machine. You can skip the following commands if you already have these binaries installed globally.
```
npm install -g bower
npm install -g gulp-cli
```

### Step 3: Installing dependencies
Next its time to install the project dependencies. This will download the frameworks, libraries, assets, and utilities used in the project. The `gulp scripts` command runs a gulp task that concatenates and minifies javascript files to improve the site performance. 
```
bundle install
bower install
npm install
gulp scripts
```

### Step 4: Serve
Fire up the Middleman server to view the site in your browser at http://localhost:4567
```
middleman
```

## Deployment
The project is hosted through github pages. The files present in the **master** branch of the project will be server statically. The deployment process is managed with CircleCI.

Making any code changes in the **source** branch and pushing them will automatically start the deployment cycle. Make sure to check the site locally before pushing out any changes.