import React, {InputHTMLAttributes} from 'react';

import { Container } from './styles';

interface Props extends InputHTMLAttributes<HTMLInputElement>{
    name: string,
    type: string,
    placeholder: string;
    
}

const Input: React.FC<Props> = ({name, type, placeholder, ...props}) => {
  return (
      <Container>
          <input 
          name={name} 
          type={type} 
          placeholder={placeholder}
            {...props}
          ></input>
      </Container>
  )
}

export default Input;