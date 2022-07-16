import React, { ComponentProps } from 'react';
import '../../styles/components/form-input/form-input.scss';

type FormInputProps = {
    label: string;
    inputProps: ComponentProps<'input'>;
};
const FormInput: React.FC<FormInputProps> = (props) => {
    return (
        <div className="group">
            {props.label && (
                <>
                    <input className="form-input" {...props.inputProps} />
                    <label
                        className={`${
                            props.inputProps.value && props.inputProps.value.toString().length > 0 ? 'shrink' : ''
                        } form-input-label `}
                    >
                        {props.label}
                    </label>
                </>
            )}
        </div>
    );
};

export default FormInput;
