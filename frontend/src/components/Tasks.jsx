import React from 'react';
import Task from './Task';
import axios from 'axios';

export default function Tasks(){
    const [list, setList] = React.useState([]);
    React.useEffect(()=>{
        axios.get("http://localhost:4000/api/todo")
            .then((item)=> setList(item.data));
    }, []);

    const updateList = list.map((item)=>{
        return (
            <Task key={item.id} id={item.id} title= {item.title} details = {item.content}/>
        )
    });

    return(
        <div className="todo_list">
            {updateList}
        </div>
    )
}