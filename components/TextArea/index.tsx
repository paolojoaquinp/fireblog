import React from 'react'
import { BfInput } from '../Input/input-styles';

type argsInput = {
    label: String;
    nameRef: any;

}

const CustomTextArea:React.FC<argsInput> = ({label, nameRef}) => {
  return (
    <BfInput>
        <label>{label} :</label>
        <textarea ref={nameRef} required ></textarea>
    </BfInput>
  );
}

export default CustomTextArea;