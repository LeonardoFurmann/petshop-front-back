import React from 'react';

export default function Sobre() {

    return (
        <div class="container">
            <div class="row">

                <><div className="col" key={1}>

                    <div className="card mx-auto p-3">
                        <p className="mx-auto p-5 align-middle"> Bem-vindo ao nosso petshop, o lugar perfeito para cuidar e mimar seu amado animal de estimação! No nosso estabelecimento, temos uma equipe apaixonada e dedicada, pronta para atender a todas as necessidades do seu fiel companheiro.
                        <br />
                        <br />
                        Oferecemos uma ampla variedade de serviços de alta qualidade, desde banho e tosa até cuidados veterinários especializados. Nossos profissionais experientes estão comprometidos em proporcionar uma experiência positiva e segura para o seu pet, utilizando técnicas e produtos de última geração.</p>
                    </div>

                </div><div className="col " key={2} >
                        <div className="card " style={{ maxWidth: "450px" }}>
                            <img src='https://img.freepik.com/vetores-premium/logotipo-fofinho-da-petshop-com-gato-e-cachorro_454510-56.jpg?w=2000' alt='logo' className="card-img-top" />
                        </div>
                    </div></>
            </div>
            </div>
    )

}