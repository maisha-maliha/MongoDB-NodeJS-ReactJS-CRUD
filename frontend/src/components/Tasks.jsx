import React from 'react';
import Task from './Task';
import axios from 'axios';

export default function Tasks({update}){
    const [list, setList] = React.useState([]); 
    let updateList = list.map((item)=>{
        return (
            <Task key={item.id} id={item.id} title= {item.title} details = {item.content}/>
        )
    });
    function updatelist(){
        React.useEffect(()=>{
            console.log('called')
            axios.get("http://localhost:4000/api/todo")
                .then((item)=> setList(item.data));
        }, []);
        console.log('updated ');
    }
    updatelist();
    if (update || !update) updatelist();
    return(
        <div className="todo_list">
            {updateList}
        </div>
    )
}