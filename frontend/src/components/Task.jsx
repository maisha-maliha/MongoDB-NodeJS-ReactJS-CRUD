import React from 'react';
import Read from './Read';
import Update from './Update';

export default function Task(props){
    const [cName, setCname] = React.useState("item "+ props.id);
    const [value, setValue] = React.useState(false);

    function findParent(e){
        const child = (e.target.parentElement).parentElement;
        if ( child.className === 'item ' + props.id ) return child;
        if ( (child.parentElement).className === 'item ' + props.id ) return child.parentElement
    }
    function disappear(e){
        const parent = findParent(e);
        console.log(parent);
        setCname(old => `${old} gone`);
        console.log(parent);
    }
    function updateValue(){
        console.log('hi');
        setValue(preval=> !preval);
    }

    return (
        <div className={cName} id={props.id}>
            {value?"":<Read id={props.id} title={props.title} body={props.details} update={updateValue} gone={disappear}/>}
            {value? <Update title={props.title} body={props.details}/>: ""}
    </div>
    )
}