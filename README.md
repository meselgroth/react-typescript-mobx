# Table Component Research (Design & Creation)

## Super basic homemade table, to decide best creation/component design
[CreateHomemadeTable.tsx](./src/CreateHomemadeTable.tsx) |
[BaseHomemadeTable.tsx](./src/BaseHomemadeTable.tsx)

Create functions 
 - Observable (if required) react components
 - Only cells (maybe headers) are mapped to entities
 - Perform iteration over arrays

Components
 - Aren't entity aware (`<Cell value={app.name}>`)
 - Take any type of children
 - No iteration

## MaterialUI Findings
[MaterialTable.tsx](./src/MaterialTable.tsx)
 - Nice typed rows (using keyof)
 - Very easy to change given example to base off my own data structure
   - See 2 commits: [Change data structure](https://github.com/meselgroth/react-typescript-mobx/commit/58b42b48ff4d7c711680ee761c852bb2f1e76ff9) |
  [Connect to store](https://github.com/meselgroth/react-typescript-mobx/commit/ada088c8af7d99cbcf436461f757bd6adfde1e7c)
 - Doesn't like nullable fields (haven't investigated)
 - Requires header name longer than contents to stop width changing (when sorting)

## Available Scripts
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.
