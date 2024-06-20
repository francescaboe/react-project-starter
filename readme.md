# React Typescript Webpack Starter
### branch: 3_starter-linters-tailwind
Adds tailwind

## Simple starter
(from https://dev.to/alekseiberezkin/setting-up-react-typescript-app-without-create-react-app-oph)
1. initialize: `npm init`
2. install ts: `npm i --save-dev typescript`
3. in root create tsconfig.json (see file here for all details)
4. install webpack: `npm i --save-dev webpack webpack-cli webpack-dev-server css-loader html-webpack-plugin mini-css-extract-plugin ts-loader`
5. in root create webpack.config.js (see file here for details)
6. add scripts to package.json (see file for details)
7. in root/public create index.html template (see file here for details)
8. install react: ```npm i react react-dom```
9. install: ```npm i --save-dev @types/react @types/react-dom```
10. create src/index.tsx (see file here for details)
11. Create src/index.css and import it to src/index.tsx

Project structure
  ```
  react-project-starter
  
    ├── dist/ (prod build)
        |── index.html
        |── main.css
        |── main.js
        |── main.js.LICENSE.txt
    ├── public/
        ├── index.html
    ├── src/
        ├── App.tsx
        ├── index.css
        ├── index.tsx
    ├── package.json
    ├── tsconfig.json
    ├── webpack.config.js
  ```

## Prettier and Eslint
1. ```npm init @eslint/config``` it will create an eslint configs file
   (when asked to install necessary libraries, remember you need an older version of eslint, the latest is incompatible w eslint-plugin-react! - for now) 
2. remember to add prettier among the rules, so eslint knows to follow the prettier styling rules 
3. add .eslintignore (see file here for details)
4. ```npm i --save-dev prettier eslint-config-prettier eslint-plugin-prettier```
5. add .prettierrc.js with preferred rules (see file here for details)

## Tailwind
1. ```npm i --save-dev tailwindcss postcss autoprefixer postcss-loader postcss-preset-env``` and whatever else the error complains about
2. ```npx tailwindcss init``` (see file here for details)
3. create postcss.config.js (see file here for details)
4. add postcss to webpack (see file here for details)
5. add ```@tailwind base;
   @tailwind components;
   @tailwind utilities;``` to src/index.css

## Testing
using
- Jest (runner, responsible to collect .test files and ) [an alternative is eg. Mocha]
- React Testing Library (catches dom element and perform some action, sort of imitating user interactions with dom)

```tsx
// src/App.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../App';

test('renders welcome message', () => {
  render(<App />);
  const headingElement = screen.getByText(/welcome to react/i); // this is rtl
  expect(headingElement).toBeInTheDocument(); // this is Jest
});
```
RTL & Jest
1. ```npm install --save-dev jest @testing-library/react @testing-library/jest-dom @testing-library/user-event ts-jest @types/jest```
2. create jest.config.js with ```npx ts-jest config:init``` in order to use typescript with jest via ts-jest
3. create jest.setup.js (see file here for details)
4. add ```"types": ["jest", "@testing-library/jest-dom"]``` to tsconfig.json
5. add test script to package.json
6. see App.test.tsx for example test file
7. make sure webpack is handling css correctly (see webpack configs)


// to remove node_modules from cmd: ```npx rimraf node_modules```

// todo: 
- [ ] add favicon!