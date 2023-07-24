import React from 'react';
import axios from 'axios';

export default function Read(props){

    function rmvTask(){
        axios('http://localhost:4000/delete',{
            method: 'POST',
            data:{
                id: props.id 
            }
        })
        .catch(err=> console.log(err));
    }

    return (
        <>
            <div className="img">
                <img src="./media/paper-clip.png" alt=""/>
            </div>
            <h2>{props.title}</h2>
            <p>{props.body}</p>
            <form>
                <a onClick={props.update}>EDIT</a>
                <a onClick={props.gone}>
                    <img src="./media/party.png" />
                </a>
                <button type="submit" onClick={rmvTask}>DELTE</button>
            </form>
            <div className="img">
                <img src="./media/wink.png" alt=""/>
            </div>
        </>
    );
};