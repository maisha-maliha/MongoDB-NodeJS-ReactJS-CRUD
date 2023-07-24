import React from 'react';
import './assets/style.css';
import CreateTask from './components/CreateTask';
import Tasks from './components/Tasks';

function App() {

  return (
    <div>
      <h1>ToDo App by Maisha Maliha</h1>
      <p className='p'>
        This website has been built using Simple Javascript, HTML and CSS.
      </p>
      <CreateTask />
      <Tasks/>
    </div>
  )
}

export default App
