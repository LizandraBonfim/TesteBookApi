import React, { createContext, Dispatch, SetStateAction, useState } from 'react';

interface Props {
    setMessage: Dispatch<SetStateAction<any>>;
    message: any;
}
export const ToastUser = createContext<Props>({} as Props);

const ToastContext : React.FC = ({ children }) => {

    const [message, setMessage] = useState<any>();

    return (
        <ToastUser.Provider
            value={{ message, setMessage }}>
            {children}
        </ToastUser.Provider>)
}

export default ToastContext;