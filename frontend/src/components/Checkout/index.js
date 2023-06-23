import React from "react";
import { useNavigate } from "react-router-dom";
import jwt from "jwt-decode";

export default function Checkout() {
  const navigate = useNavigate();
  const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

  function handleSubmit(event) {
    event.preventDefault();

    const storedToken = localStorage.getItem("token");

    if (storedToken) {
      try {
        const data = jwt(storedToken);
        console.log(data);
        alert("Compra efetuada com sucesso para o cliente código: " + data.codigo + ".");
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("Usuário não autenticado! Por favor, faça o login!");
      navigate("/login");
    }
  }

  function handleRemoverItem(index) {
    const carrinhoAtualizado = [...carrinho];
    carrinhoAtualizado.splice(index, 1);
    localStorage.setItem("carrinho", JSON.stringify(carrinhoAtualizado));
    navigate("/pedido"); // Redirecionar para a página de checkout para atualizar a exibição
  }

  return (
    <div className="container text-center">
      <form onSubmit={handleSubmit}>
        <div className="row">
          {carrinho.length > 0 ? (
            carrinho.map((item, index) => (
              <div className="col" key={index}>
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{item.nome} </h5>
                    <p>Quantidade: {item.quantidade}</p>
                    <p>Preço: {item.preço}</p>
                    <button type="button" className="btn btn-danger" onClick={() => handleRemoverItem(index)}>
                      Remover
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col">
              <p>Nenhum item adicionado ao carrinho.</p>
            </div>
          )}
        </div>
        <div className="row">
          <div className="col">
            <br />
            <p className="lead">
              Valor Total do Pedido: R$ {carrinho.reduce((total, item) => total + item.preço * item.quantidade, 0)}
            </p>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Finalizar Pedido
        </button>
      </form>
    </div>
  );
}
