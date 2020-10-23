import React, { useState, useEffect, useContext } from 'react';
import { ToastUser } from '../../ToastContext';
import { Container, Content } from './styles';


const Toast: React.FC= ( ) => {

    const [visible, setVisible] = useState(false);
    const { message } = useContext(ToastUser);

    useEffect(() => {

        setVisible(true);

        const intervalId = setTimeout(() => {

            setVisible(false);
        }, 3000);

        return () => {
            clearInterval(intervalId);
        }


    }, [message])

    return (
        <>
            {visible && message &&
                <Container>
                    <Content>
                        {message.message}
                    </Content>
                </Container>
            }
        </>
    )
}

export default Toast;