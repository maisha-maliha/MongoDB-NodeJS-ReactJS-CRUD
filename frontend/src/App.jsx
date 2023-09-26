import React from 'react';
import './assets/style.css';
import Task from './components/Task';
import axios from 'axios';


function App() {
  // createtask statemanagement
  const [head, setHead] = React.useState("");
  const [body, setBody] = React.useState("");
  const [list, setList] = React.useState([]); 

  function postData(e){
      e.preventDefault();
      console.log('sent');
      axios('http://localhost:4000/create',{
        method: 'POST',
        data:{
            head,
            body 
        }
    }).catch(err=> console.log(err));
    setList(prevlist => [...prevlist, {id: list.length+1, title: head, content: body}]);
    setHead("");
    setBody("");
  }


  React.useEffect(()=>{
    console.log('called')
    axios.get("http://localhost:4000/api/todo")
        .then((item)=> setList(item.data));
  }, [head]);
  let updateList = list.map((item)=>{
    return (
        <Task key={item.id} id={item.id} title= {item.title} details = {item.content}/>
    )
  });
  // ========================= JSX
  return (
    <div>
      <h1>ToDo App by Maisha Maliha</h1>
      <p className='p'>
        This website has been built using Simple Javascript, HTML and CSS.
      </p>
      <section>
            <header>
                <span></span>
                <span></span>
            </header>
            <div className="makelist">
                <h2>WHAT TO DO? <img src="./media/smiling.png" alt="" /></h2>
                <form>
                    <input 
                        type="text" 
                        value={head} 
                        onChange={(e)=> setHead(e.target.value)}
                        placeholder="What could the title be? Hmm.. :P" 
                        required
                    />
                    <textarea 
                        value={body} 
                        onChange={(e)=> setBody(e.target.value)}
                        placeholder="Tell me MORE !!" 
                        required
                    ></textarea>
                    <button type='submit' onClick={postData}>Let's Do This !</button>
                </form>
            </div>
      </section>
      <div className="todo_list">
          {updateList}
      </div>
    </div>
  )
}

export default App
