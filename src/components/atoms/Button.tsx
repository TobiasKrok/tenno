import React, { PropsWithChildren } from 'react';
import '../../styles/components/button/button.scss';
const BUTTON_TYPE = {
    google: 'google-sign-in',
    inverted: 'inverted',
};

type ButtonProps = {
    class?: keyof typeof BUTTON_TYPE;
    buttonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
};
const Button: React.FC<PropsWithChildren<ButtonProps>> = (props) => {
    return (
        <button className={`button-container ${props.class && BUTTON_TYPE[props.class]}`} {...props.buttonProps}>
            {props.children}
        </button>
    );
};

export default Button;
