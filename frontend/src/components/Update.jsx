import React from 'react';

export default function Update(props){
    return (
        <>
            <input value={props.title} />
            <input value={props.body} />
            <a>Update</a>
        </>
    )
}
