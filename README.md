# Table Component Research (Design & Creation)

## Super basic homemade table, to decide best creation/component design
[HomemadeTable.tsx](../blob/table/src/HomemadeTable.tsx)

Create functions 
 - Observable (if required) react components
 - Only cells (maybe headers) are mapped to entities
 - Perform iteration over arrays

Components
 - Aren't entity aware (`<Cell value={app.name}>`)
 - Take any type of children
 - No iteration

## MaterialUI 
[MaterialTable.tsx](../blob/table/src/MaterialTable.tsx)
 - Typed rows (using keyof)
 - Doesn't like nullable fields
 - Requires header name longer than contents to stop width changing (when sorting)

## Available Scripts
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.