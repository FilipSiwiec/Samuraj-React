import React from 'react';

const SwitchButton = (props) => {
    return (
        <button onClick={props.click}>{props.active ? "wylacz" : "wlacz"}</button>
    )
}

export default SwitchButton