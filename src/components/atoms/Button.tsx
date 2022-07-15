import React, { ComponentType, HTMLProps, PropsWithChildren } from 'react';
import '../../styles/components/button/button.scss';
const BUTTON_TYPE = {
    google: 'google-sign-in',
    inverted: 'inverted',
};

type ButtonProps = HTMLProps<HTMLButtonElement> & {
    class?: keyof typeof BUTTON_TYPE;
};
const Button: React.FC<PropsWithChildren<ButtonProps>> = (props) => {
    return <button className={`button-container ${props.class}`}>{props.children}</button>;
};

export default Button;
