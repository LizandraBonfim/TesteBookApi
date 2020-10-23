import React from 'react';
import LivroDetalhes from './LivroDetalhes';
import { Container } from '../../global';
import {ContainerLivros} from './styles';

const Livros: React.FC = () => {
  return (
      <Container>
          <ContainerLivros>
            <LivroDetalhes />
          </ContainerLivros>
      </Container>
  )
}

export default Livros;