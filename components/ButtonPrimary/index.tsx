import React from 'react'
import { BfButtonPrimary } from './button-styles';

type argsButton = {
    name: String;
    submit?: any;
    child?: any;
    type?: "submit" | "button";
}

const ButtonPrimary: React.FC<argsButton> = ({ name, submit, child, type="button" }) => {
  return (
    <BfButtonPrimary type={type} onClick={submit}>
        {name}
        {child &&
          <img height={20} src={child} alt='logo' />
        }
    </BfButtonPrimary>
  )
}

export default ButtonPrimary;