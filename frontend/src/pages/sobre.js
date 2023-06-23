import React from 'react';
import { useParams } from 'react-router-dom';
import Title from './../components/Title/index';

export default function Sobre() {
    const { name } = useParams();
    
    return (
        <div>  
            <Title
                title={"Sobre Nós"}
                text={"Olá! Bem-vindo(a) à nossa loja online de produtos para animais de estimação. Aqui, no The PetShop, estou animado(a) em apresentar a você a melhor seleção de produtos para seus queridos companheiros peludos. Sou apaixonado(a) por animais, assim como você, e é por isso que me dedico em fornecer apenas o melhor para o seu amado pet. Na nossa loja, você encontrará uma ampla variedade de brinquedos, acessórios e rações para atender às necessidades de todos os tipos de animais. Seja um cãozinho enérgico, um gatinho curioso, um pássaro encantador ou qualquer outro bichinho que preencha seu coração, temos tudo o que você precisa para mantê-los felizes e saudáveis."} />           
        </div>
    )
}