import React from 'react';
import Read from './Read';
import Update from './Update';

export default function Task(props){
    const [cName, setCname] = React.useState("item "+ props.id);
    const [value, setValue] = React.useState(false);
    const [task, setTask] = React.useState({h: props.title, d: props.details});

    function updateTask(head, details){
        setTask({h: head, d: details});
    }
    function disappear() {
        (cName==='item gone') ? setCname(`item ${props.id}`) : setCname('item gone');
    }

    return (
        <div className={cName} id={props.id}>
            { value ?
                <Update 
                    title={task.h}
                    body={task.d}
                    id={props.id}
                    updateTask={updateTask}
                    update={()=> setValue(preval => !preval)}
                /> 
                : 
                <Read 
                    id={props.id} 
                    title={task.h} 
                    body={task.d} 
                    update={()=> setValue(preval => !preval)} 
                    gone={disappear}
                />
            }
        </div>
    )
}