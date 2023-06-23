import React from 'react'
import { BfInput } from './input-styles';

type argsInput = {
    label: String;
    nameRef: any;
    typeInput: "text"|"password"|"email"|"textarea";
    required?: true | false,
}

const Input:React.FC<argsInput> = ({label, nameRef, typeInput, required = true}) => {
  return (
    <BfInput>
        <label>{label} :</label>
        <input type={typeInput} ref={nameRef} required={required} />
    </BfInput>
  );
}

export default Input;