## Setting Up
1. Run `npm install` inside the `\client` directory to install all dependencies
2. Run `npm start` to begin a local instance of the server

## Contributing
The file structure is organized as follows:

- `\src\api` - Logic for interacting with the Express backend
- `\src\assets` - Static files like images, reusable across multiple components
- `\src\webpages` - Webpage views where the whole page is rendered
- `\src\components` - Reusable components shared across multiple webpages
- `\src\domain` - Large components which aren't reused, unlike `\src\components`

### HTML Content
Content is often rendered as JSX in React components. Editing the content for a specific component often means working inside a `.js` file for it. For example, the content for the "Main Features" section is rendered from `\client\src\domain\MainFeatures\MainFeatures.js`.

### CSS Styles
Each corresponding `.js` file often has a corresponding `.module.css` stylesheet. For example, styles for the "Main Features" section are found in `\client\src\domain\MainFeatures\MainFeatures.module.css`

## Deployment
A static version of the site is hosted [here](https://amgthrow.github.io/CMSC128C/). To push updates to the deployment,

1. Checkout to the `deploy-gh-pages` branch. This branch is slightly different from `main` to accomodate implementation details for GitHub Pages
3. Merge changes from `main` to `deploy-gh-pages` to update the branch with any new changes
4. run `cd client` and `npm run deploy` to build and deploy the site to GitHub Pages
5. View deployment status [here](https://github.com/AmGthrow/CMSC128C/deployments/activity_log?environment=github-pages)
