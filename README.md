# Gold Calculator / Note Taker

This project is a React + Electron application. Below are instructions for installing dependencies, running, and building the app using the available npm scripts.

## Prerequisites
- Node.js (v16 or later recommended)
- npm (comes with Node.js)

## Install Dependencies
```
npm install
```

## Available Scripts

### Start React App (Development)
```
npm start
```
Runs the React app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Start Electron App (Development)
```
npm run electron
```
Launches the Electron app using the current build.

### Run Both React and Electron (Development)
```
npm run dev
```
Runs both the React development server and Electron app concurrently for easier development.

### Build React App
```
npm run build
```
Builds the React app for production to the `build` folder.

### Build Electron App (Production)
```
npm run build-electron
```
Packages the Electron app for distribution using `electron-builder`.

### Electron Production Mode
```
npm run electron-prod
```
Builds the React app and then launches Electron in production mode with logging enabled.

## Project Structure
- `src/` - React source code
- `build/` - Production build output
- `public/` - Static public assets
- `index.js` - Main Electron entry point

## Notes
- Make sure to run `npm install` before running any scripts.
- For packaging, ensure all build output is up to date.

---

Feel free to customize this README for your project needs.
