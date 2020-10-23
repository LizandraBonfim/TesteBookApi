import React, { useContext } from 'react';
import Switch from 'react-switch';
import {
    FaInstagram,
    FaFacebook,
    FaYoutube,
    FaTwitter,
    FaMoon,
    FaRegLightbulb
} from 'react-icons/fa';

import { ThemeContext } from 'styled-components';

import {
    HeaderContainer,
    HeaderTop,
    RedesSociais,
    BotaoToggle,

} from './styles';
import { Container } from '../../global';

interface Theme {
    toggleTheme(): void;
}

const Header: React.FC<Theme> = ({ toggleTheme }) => {

    const { title } = useContext(ThemeContext);

    return (
        <HeaderContainer>
                <Container>
            <HeaderTop>

                    <RedesSociais>

                        <li><FaInstagram /></li>
                        <li><FaFacebook /></li>
                        <li><FaYoutube /></li>
                        <li><FaTwitter /></li>

                    </RedesSociais>

           
                       
                        <BotaoToggle >
                            <FaRegLightbulb size={20} />
                            <Switch
                                onChange={toggleTheme}
                                checked={title === 'dark'}
                                checkedIcon={true}
                                uncheckedIcon={false}
                                height={10}
                                width={40}
                                handleDiameter={20}
                                offColor={'#fc5c94'}
                                onColor={'#fc5c94'}
                                offHandleColor={'#fff'}

                            />

                            <FaMoon size={20} />
                        </BotaoToggle>
              
            </HeaderTop>
                </Container>


        </HeaderContainer >
    )
}

export default Header;