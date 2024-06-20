# React Typescript Webpack Starter
### Branch: 1_simple-starter-no-libs
bare project with react, typescript, webpack

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

// to remove node_modules from cmd: ```npx rimraf node_modules```

// todo: 
- [ ] add favicon!