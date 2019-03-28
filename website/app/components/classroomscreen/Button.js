import React from 'react';

const Button = ({clickEvent,buttonName}) => {
    return (
        <button onClick={clickEvent}>{buttonName.charAt(0).toUpperCase() + buttonName.slice(1)}</button>
    )
}
export default Button;