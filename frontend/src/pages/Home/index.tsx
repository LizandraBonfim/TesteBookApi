import React, { ChangeEvent, FormEvent, useContext, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import {  NavLink , useHistory} from 'react-router-dom';
import Input from '../../components/Input';
import { Container} from '../../global';
import { LivrosContext } from '../../LivrosContext';
import { MainContainer, CampoPesquisa, CampoInputPesquisa , ContainerLivros} from './styles';


const Home: React.FC = () => {

    const history = useHistory();

    const {setTerm} = useContext(LivrosContext);
    const [dados, setDados] = useState('');

    function handleSubmit(event : FormEvent){
        event.preventDefault();
        setTerm(dados);

    }

    function handleChange({ target } : ChangeEvent<HTMLInputElement>) {

        const value  = target.value.toLowerCase();
        setDados(value);


        if(window.location.pathname === '/favoritos'){
            history.push('/');
        }
    }
    
    return (
        <MainContainer>
            <Container>

                <CampoPesquisa>
                    <h1> Pesquise um livro </h1>
                    
                        <CampoInputPesquisa >
                            <Input 
                            name="pesquisa"
                            type="text"
                            placeholder="Pesquise um livro..."
                            onChange={handleChange}
                            />

                            <button type="submit" onClick={handleSubmit}> <FaSearch/></button>
                        </CampoInputPesquisa>

                </CampoPesquisa>

                <ContainerLivros>
                        <nav>
                            <NavLink to="/" exact>Livros</NavLink>

                            <NavLink to="/favoritos">
                                Meus favoritos
                            </NavLink>
                        </nav>
                </ContainerLivros>

            </Container>
        </MainContainer>
    )
}

export default Home;