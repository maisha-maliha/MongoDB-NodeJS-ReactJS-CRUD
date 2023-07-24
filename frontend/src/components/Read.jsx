import React from 'react';

export default function Read(props){
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
                <button type="submit">DELTE</button>
            </form>
            <div className="img">
                <img src="./media/wink.png" alt=""/>
            </div>
        </>
    );
};