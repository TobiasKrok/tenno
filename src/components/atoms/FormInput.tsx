import React, { ComponentProps } from 'react';
import '../../styles/components/form-input/form-input.scss';

type FormInputProps = ComponentProps<'input'> & {
    label: string;
};
const FormInput: React.FC<FormInputProps> = (props) => {
    return (
        <div className="group">
            {props.label && (
                <>
                    <input className="form-input" {...props} />
                    <label
                        className={`${
                            props.value && props.value.toString().length > 0 ? 'shrink' : ''
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
