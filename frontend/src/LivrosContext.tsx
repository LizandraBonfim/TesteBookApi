import React, { createContext, Dispatch, SetStateAction, useState } from 'react';

interface Props {
    setLivros: Dispatch<SetStateAction<any[]>>;
    setTerm: Dispatch<SetStateAction<string>>;
    setLoading: Dispatch<SetStateAction<boolean>>;
    setFavoritos: Dispatch<SetStateAction<any[]>>;
    setPage: Dispatch<SetStateAction<number>>;
    page: number;
    term: string;
    favoritos: any;
    loading: boolean;
    livros: any;
    buscarLivros: (page: number) => void;
}

export const LivrosContext = createContext<Props>({} as Props);


const LivrosContainer: React.FC = ({ children }) => {

    const [livros, setLivros] = useState<any[]>([]);
    const [favoritos, setFavoritos] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [page , setPage] = useState<number>(0);
    const [term , setTerm] = useState<string>('');
    
    React.useEffect(() => {
      if(term)
        buscarLivros(page);
    } , [term]);

    React.useEffect(() => {

      async function get(){
          try{
              setLoading(true);
              const url = await fetch('https://localhost:5001/api/favoritos');
              const response = await url.json();
              setFavoritos(response);
          }
          
          catch (error) {
          
            } finally{
              setLoading(false);
          }
      }
      get(); 
    }, []); 
    
    async function buscarLivros( page: number){
      try{
          setLoading(true);
          const url = await fetch(`https://localhost:5001/api/books?p=${term}&page=${page}`);
          const response = await url.json();
          
          setLivros(response);
      }
       catch (error) {
          console.log('Erro:', error.message);
      } finally{
          setLoading(false);
      }
  }


    return (
       <LivrosContext.Provider value={{
         livros, 
         setLivros, 
         setFavoritos, 
         favoritos,
         setLoading,
         loading,
         page, 
         setPage,
         buscarLivros,
         term, 
         setTerm
         }}>
         {children}
       </LivrosContext.Provider >
    )
}

export default LivrosContainer;