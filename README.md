# react-stock

This Project is using below technology
 
 1.  React.js
 2.  Redux
 3.  Saga
 4.  TypeScript
 5.  Jest                                                                                       

To start this project, you can choose to use local or docker

  local: 
  ```
  1. please run npm install before you start the project
  2. run npm start
  3. localhost:3000 for the health check
  4. localhost:3000/stock for the stock page
  ```
  docker:
  ```
  1. please run npm install before you start the project
  2. run docker-compose build
  3. run docker-compose -p stock up -d
  4. localhost:3000 for the health check
  5. localhost:3000/stock for the stock page
  ```

HighLight In this project

1. Redux & Saga
```
Using Redux for stage Management develop flow
[Acion] ---> [Saga](catch for api call) ---> [Reducer] 
```

2. File Structure
```
Clearly separate with Action, Saga & Reducer file structure
Easily for add for further development
```

3. ReduxDevTools
```
Using google chrome extension ReduxDevTools can easily debug with
```

4. Jest
```
(Currently not doing due to time limit)
For api calling, this project support to using jest for testing api
```