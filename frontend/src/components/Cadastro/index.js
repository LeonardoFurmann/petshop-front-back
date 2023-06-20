import React, { useState } from 'react';
import api from '../../services/api';
import './Cadastro.css';


export default function Cadastro() {
    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [endereco, setEndereco] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [nomeCartao, setNomeCartao] = useState("");
    const [numeroCartao, setNumeroCartao] = useState("");
    const [cvc, setCvc] = useState("");
    const [plano, setPlano] = useState("");
    const [numeroCartaoPassou, setNumeroCartaoPassou] = useState(0);
    const [cvcPassou, setCvcPassou] = useState(0);

    function handlePlanoChange(event) {
        setPlano(event.target.value);
        console.log(plano);
    }

    function handleNumeroCartaoChange(event) {
        if (event.target.value.length != 20) {
            setNumeroCartaoPassou(0);
        } else {
            setNumeroCartaoPassou(1);
        }
        setNumeroCartao(event.target.value);
    }

    function handleCvcChange(event) {
        if (event.target.value.length != 3) {
            setCvcPassou(0);
        } else {
            setCvcPassou(1);
        }
        setCvc(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const bodyParam = {
            nome: nome,
            telefone: telefone,
            email: email,
            endereco: endereco,
            senha: senha,
            nomeCartao: nomeCartao,
            numeroCartao: numeroCartao,
            cvc: cvc,
            plano: plano
        }

        api.post('/clientes', bodyParam)
            .then((response) => {
                console.log(response.data)
                alert(" O usuario " + response.data.codigo + " foi criado com sucesso!")
            })
            .catch((err) => {
                console.error(err)
                alert(" Ocorreu um erro! Veja no console ..")
            })
            .finally(() => {
                setNome("")
                setTelefone("")
                setEndereco("")
                setEmail("")
                setSenha("")
                setNomeCartao("")
                setNumeroCartao("")
                setCvc("")
                setPlano("")
            })
    }

    return (
        <div className="container text-center">
            <div className="row">
                <div className="container1">
                    <form className='form' onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>
                                Nome:
                                <input type="text" className="form-control" value={nome} onChange={(e) => { setNome(e.target.value) }} />
                            </label>
                        </div>
                        <br />
                        <div className="form-group">
                            <label>
                                Telefone:
                                <input type="text" className="form-control" value={telefone} onChange={(e) => { setTelefone(e.target.value) }} />
                            </label>
                        </div>
                        <br />
                        <div className="form-group">
                            <label>
                                Endereco:
                                <input type="text" className="form-control" value={endereco} onChange={(e) => { setEndereco(e.target.value) }} />
                            </label>
                        </div>
                        <br />
                        <div className="form-group">
                            <label>
                                Plano:
                                <input
                                    className="planoBotao"
                                    type="button"
                                    value={"Prata"}
                                    onClick={handlePlanoChange}
                                    style={{ backgroundColor: plano == "Prata" ? "blue" : "black" }}
                                />
                                <input
                                    className="planoBotao"
                                    type="button"
                                    value={"Ouro"}
                                    onClick={handlePlanoChange}
                                    style={{ backgroundColor: plano == "Ouro" ? "blue" : "black" }}
                                />
                            </label>
                        </div>
                        <br />
                        <div className="form-group">
                            <label>
                                Nome do Titular:
                                <input type="text" className="form-control" value={nomeCartao} onChange={(e) => { setNomeCartao(e.target.value) }} />
                            </label>
                        </div>
                        <br />
                        <div className="form-group">
                            <label>
                                Número do cartão:
                                <input
                                    type="text"
                                    value={numeroCartao}
                                    onChange={handleNumeroCartaoChange}
                                />
                            </label>
                            {numeroCartaoPassou == 0 && (
                                <p className="warning">*O número do cartão deve ter 20 dígitos</p>
                            )}
                        </div>
                        <br />
                        <div className="form-group">
                            <label>
                                cvc:
                                <input type="password" value={cvc} onChange={handleCvcChange} />
                            </label>
                            {cvcPassou == 0 && (
                                <p className="warning">
                                    *O número do CVC deve ter apenas 3 dígitos
                                </p>
                            )}
                        </div>
                        <br />
                        <div className="form-group">
                            <label>
                                Email:
                                <input type="email" className="form-control" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                            </label>
                        </div>
                        <br />
                        <div className="form-group">
                            <label>
                                Senha:
                                <input type="password" className="form-control" value={senha} onChange={(e) => { setSenha(e.target.value) }} />
                            </label>
                        </div>
                        <br />
                        <button type="submit" className="btn btn-primary">Cadastrar</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
