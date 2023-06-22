import React, { useState } from "react";
import api from "../../services/api";
import "./Cadastro.css";

export default function Cadastro() {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [endereco, setEndereco] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [nomeCartao, setNomeCartao] = useState("");
  const [numeroCartao, setNumeroCartao] = useState("");
  const [cvc, setCvc] = useState("");
  const [numeroCartaoPassou, setNumeroCartaoPassou] = useState(0);
  const [cvcPassou, setCvcPassou] = useState(0);
  const [selectedImg, setSelectedImg] = useState(null);

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

  function handleSelectImg(event) {
    const file = event.target.files[0];
    setSelectedImg(URL.createObjectURL(file));
    console.log('imagem: ', file);
  }

  const cliente= JSON.stringify({
    nome: nome,
    telefone: telefone,
    endereco: endereco,
    cpf: cpf,
    email: email,
    senha: senha,
    nomeCartao: nomeCartao,
    numeroCartao: numeroCartao,
    cvc: cvc,
    imagem: selectedImg
  });
  
  const handleSubmit = (event) => {
    event.preventDefault();
  
    const formData = new FormData();
    formData.append("cliente", cliente);
    formData.append("imagem", selectedImg); 
  
    api
    .post("/clientes", formData, {
      headers: {
        "Content-Type": "multipart/form-data", 
      },
    })
      .then((response) => {
        console.log(response.data);
        alert("O usuário " + response.data.codigo + " foi criado com sucesso!");
      })
      .catch((err) => {
        console.error(err);
        alert("Ocorreu um erro! Veja no console ..");
      })
      .finally(() => {
        setNome("");
        setTelefone("");
        setEndereco("");
        setEmail("");
        setSenha("");
        setCpf("");
        setNomeCartao("");
        setNumeroCartao("");
        setCvc("");
        setSelectedImg("");
      });
  };
  

  return (
    <div className="container text-center">
      <div className="linha">
        <form className="form container-master" onSubmit={handleSubmit}>
          <div className="container1">
            <div>
              <div className="form-group">
                <label>
                  Nome:
                  <input
                    type="text"
                    className="form-control"
                    value={nome}
                    onChange={(e) => {
                      setNome(e.target.value);
                    }}
                  />
                </label>
              </div>
              <br />
              <div className="form-group">
                <label>
                  Telefone:
                  <input
                    type="text"
                    className="form-control"
                    value={telefone}
                    onChange={(e) => {
                      setTelefone(e.target.value);
                    }}
                  />
                </label>
              </div>
              <br />
              <div className="form-group">
                <label>
                  Endereco:
                  <input
                    type="text"
                    className="form-control"
                    value={endereco}
                    onChange={(e) => {
                      setEndereco(e.target.value);
                    }}
                  />
                </label>
              </div>
              <br />
              <div className="form-group">
                <label>
                  CPF:
                  <input
                    type="text"
                    className="form-control"
                    value={cpf}
                    onChange={(e) => {
                      setCpf(e.target.value);
                    }}
                  />
                </label>
              </div>
              <br />
              <div className="form-group">
                <label>
                  Imagem:
                  <input
                    type="file"
                    accept="image/*"
                    className="form-control"
                    onChange={handleSelectImg}
                  />
                </label>
                <div>
                  <img className="image" src={selectedImg}></img>
                </div>
                <br />
              </div>
            </div>
            <div>
              <br />
              <div className="form-group">
                <label>
                  Nome do Titular:
                  <input
                    type="text"
                    className="form-control"
                    value={nomeCartao}
                    onChange={(e) => {
                      setNomeCartao(e.target.value);
                    }}
                  />
                </label>
              </div>
              <br />
              <div className="form-group">
                <label>
                  Número do cartão:
                  <input
                    type="text"
                    className="form-control"
                    value={numeroCartao}
                    onChange={handleNumeroCartaoChange}
                  />
                </label>
                {numeroCartaoPassou == 0 && (
                  <p className="warning">
                    *O número do cartão deve ter 20 dígitos
                  </p>
                )}
              </div>
              <br />
              <div className="form-group">
                <label>
                  CVC:
                  <input
                    type="password"
                    className="form-control"
                    value={cvc}
                    onChange={handleCvcChange}
                  />
                </label>
                {cvcPassou == 0 && (
                  <p className="warning">
                    *O número do CVC deve ter apenas 3 dígitos
                  </p>
                )}
              </div>
              <div className="form-group">
                <label>
                  Email:
                  <input
                    type="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </label>
              </div>
              <br />
              <div className="form-group">
                <label>
                  Senha:
                  <input
                    type="password"
                    className="form-control"
                    value={senha}
                    onChange={(e) => {
                      setSenha(e.target.value);
                    }}
                  />
                </label>
              </div>
            </div>
          </div>
          <button type="submit" className="btn btn-primary botao">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
