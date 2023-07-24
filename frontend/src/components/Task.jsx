import React from 'react';
import Read from './Read';
import Update from './Update';

export default function Task(props){
    const [cName, setCname] = React.useState("item "+ props.id);
    const [value, setValue] = React.useState(false);

    function disappear() {
        (cName==='item gone') ? setCname(`item ${props.id}`) : setCname('item gone');
    }

    return (
        <div className={cName} id={props.id}>
            { value ?
                <Update 
                    title={props.title} 
                    body={props.details} 
                    id={props.id} 
                    update={()=> setValue(preval => !preval)}
                /> 
                : 
                <Read 
                    id={props.id} 
                    title={props.title} 
                    body={props.details} 
                    update={()=> setValue(preval => !preval)} 
                    gone={disappear}
                />
            }
        </div>
    )
}