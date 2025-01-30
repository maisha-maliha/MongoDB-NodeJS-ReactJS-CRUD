# 90s game theme ToDo App
This is a very simple todo app made using reactjs in the frontend and nodejs with mongoDB database in the backend.

![TODO APP]([https://github.com/maisha-maliha/MongoDB-NodeJS-ReactJS-CRUD/pic1.png](https://github.com/maisha-maliha/MongoDB-NodeJS-ReactJS-CRUD/blob/master/pic1.png))


To run the project you need to first clone the project:
`git clone https://github.com/maisha-maliha/MongoDB-NodeJS-ReactJS-CRUD`

![TODO APP Tasks]([https://github.com/maisha-maliha/MongoDB-NodeJS-ReactJS-CRUD/pic2.png](https://github.com/maisha-maliha/MongoDB-NodeJS-ReactJS-CRUD/blob/master/pic2.png))

Now you need to open two terminal in the directory you clonned the repository.
## For Frontend
In the first terminal you set the path to _frontend_:
`cd frontend`

Now install all the dependencies:
`npm install`

Now run the reactjs frontend:
`npm run dev`

## For Backend
In the second terminal now set path to _backend_:
`cd backend`
Install the needed dependencies:
`npm install`

Now just run the server:
`node server.js`

## For Database
Make sure you have mongoDB installed in your PC. and create a database names **todo** where there will be a collection named **item**. Each object will have => id, title, content.
The collection file is given as `todo.item.json` in this repository.

## Finally

Now that you have both frontend and backend running you can go to `http://localhost:5173/` and use the todo app.
