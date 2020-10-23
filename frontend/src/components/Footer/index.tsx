import React from 'react';

import {Container} from '../../global';
import { ContainerFooter } from './styles';

const Footer: React.FC = () => {
  return(
    
      <ContainerFooter>
          <Container>

          <h4>Desenvolvido por 
              <a href="https://www.linkedin.com/in/lizandra-bonfim/"> Lizandra Bonfim </a>
            </h4>

            <h4>Teste Lyncas</h4>
          </Container>
      </ContainerFooter>
  )
}

export default Footer;