import React from 'react';
import { useParams } from 'react-router-dom';
import Title from './../components/Title/index';

export default function Sobre() {
    const { name } = useParams();
    
    return (
        <div>  
            <Title
                title={"Sobre"}
                text={"Mais informações sobre a empresa"} />          
            <p>Olá usuário {name}!</p>       
        </div>
    )
}