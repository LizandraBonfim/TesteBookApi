import { useState, useEffect, Dispatch, SetStateAction } from 'react';

type Response<T> = [
    T,
    Dispatch<SetStateAction<T>>,
];

function usePersisteTheme<T>(key: string, defaultValue: T): Response<T> {
    const [state, setState] = useState(() => {
        const local = localStorage.getItem(key);

        if (local) {
            return JSON.parse(local)
        } else {
            return defaultValue;
        }
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state));
    }, [key, state]);

    return [state, setState];
}

export default usePersisteTheme;