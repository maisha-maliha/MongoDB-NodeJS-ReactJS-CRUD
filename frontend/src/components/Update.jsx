import React from 'react';
import axios from 'axios';


export default function Update(props){
    const [head, setHead] = React.useState(props.title);
    const [details, setDetails] = React.useState(props.body);

    function updateTask(){
        axios('http://localhost:4000/update',{
            method: 'POST',
            data:{
                "id": props.id,
                head,
                details
            }
        })
        .catch(err=> console.log(err));
        props.update();
    }

    return (
        <>
            <input value={head} onChange={(e)=>setHead(e.target.value)}/>
            <input value={details} onChange={(e)=>setDetails(e.target.value)} />
            <button type='submit' onClick={updateTask}>Update</button>
        </>
    )
}
