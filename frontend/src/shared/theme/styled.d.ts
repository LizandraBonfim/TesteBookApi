import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string;
        color: {
            primary: string;
            secundary: string;

            background: string;
            text: string;
            colorClaro: string;
            colorRosa: string;
            svg: string;
        }
    }
}