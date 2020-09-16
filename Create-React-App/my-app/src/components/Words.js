import React from 'react';

const Words = props => {
    return (
        <li>Slowo po angielsku: <strong>{props.english}</strong>
            <br />
    Tlumaczenie: <strong>{props.polish}</strong></li>
    )
}

export default Words