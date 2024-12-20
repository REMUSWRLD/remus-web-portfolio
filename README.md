# Hey there!

Take a look around to see how I built this react portfolio. Hosted through github pages.

For more detailed start to finish guild check out the [original tutorial](https://github.com/gitname/react-gh-pages?tab=readme-ov-file)!



## New Machine?

### `$ npm install gh-pages --save-dev`
Installs the gh-pages npm package and designate it as a development dependency

### `npm install`

Installs the necessary dependencies to run the site on your local network.

### `npm start`
Runs the app in the development mode.\
Open [http://localhost:3000/](http://localhost:3000/) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

# Ready to deploy?
There are a few things you need to setup beforehand but it's quick and simple!

### Add a homepage property to the package.json file in this format: `https://{username}.github.io/{repo-name}`

```
{
  + "homepage": "https://{username}.github.io/{repo-name}",
    "name": "react-portfolio",
    "version": "0.1.0",
    "private": true,
}
```
### In your package.json you should have a 'scrips' object. You're going to add a `predeploy` and a `deploy` property to this.

```
"scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
  + "predeploy": "npm run build",
  + "deploy": "gh-pages -d build"
  }
```

### Before you can deploy you just need to run the following commmand in a console, make sure you're in the top level to the project.
```
$ git remote add origin https://github.com/{username}/{repo-name}.git
```

### Finally to deploy

```
$ npm run deploy
```

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.