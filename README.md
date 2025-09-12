# swiftstudents.com

A beautiful, responsive web application showcasing Swift student communities from around the world. Built with React and featuring Apple Liquid Glass design aesthetics.

## 🌍 About

This project connects Swift students globally by providing a centralized hub where different country communities can be discovered and accessed.

## 🚀 Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## 🤝 Contributing

We welcome contributions from Swift students communities around the world! Please follow the guide below.

### Adding a New Community Widget

To add a new Swift student community for your country:

1. **Fork this repository** and clone it to your local machine
2. **Open the file** `src/widgets.js`
3. **Add a new widget object** to the `widgets` array following this format:

```javascript
{
  id: 'your-community-identifier',        // e.g., 'css-korea', 'ssc-japan'
  emoji: '🏳️',                            // Your country's flag emoji
  country: 'Your Country Name',           // e.g., 'Korea', 'Japan', 'Singapore'
  label: 'Community Name',                // e.g., 'Swift Students Canada'
  url: 'https://your-website.com'         // Your community's website (or '' if not available)
}
```

### Guidelines

- ✅ Use official country flag emojis
- ✅ Keep community names concise but descriptive
- ✅ Ensure URLs are valid and working
- ✅ Follow the existing naming conventions
- ✅ Test on both desktop and mobile views


### Example Addition

```javascript
// Add this to the widgets array in src/widgets.js
{
  id: 'css-korea',
  emoji: '🇰🇷',
  country: 'South Korea',
  label: 'Community for Swift Students',
  url: 'https://wwdc.kr'
}
```

### Submission Process

1. **Test your changes** by running `npm start` locally
2. **Create a pull request** with a clear description of your addition
3. **Include screenshots** showing how your widget looks on the page
4. **Verify** that your widget displays correctly on both desktop and mobile


### Need Help?

- Check existing widgets in `src/widgets.js` for reference
- Open an issue if you have questions

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
