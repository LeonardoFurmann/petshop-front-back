import React from 'react';
import Title from './../components/Title/index';
import Cadastro from '../components/Cadastro/index';

export default function Cliente() {
    return (
        <div>
            <Title
                title={"Cadastro de cliente"} />
            <Cadastro />
        </div>
    )
}