import React from 'react';

const Button = ({title, onClick}) => {
        return (
                <button onClick={onClick}>{title}</button>
        );
}

Button.defaultProps={
        title:"BUTTON"
}

export default Button;