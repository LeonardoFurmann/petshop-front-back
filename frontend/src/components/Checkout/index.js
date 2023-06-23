import { useNavigate } from "react-router-dom";
import jwt from 'jwt-decode'
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';



// const pedidoItems = {
//     "total": 285.00,
//     "items": [
//         {
//             "nome": "Item 1",
//             "qtde": 2,
//             "preco": 150
//         },
//         {
//             "nome": "Item 2",
//             "qtde": 1,
//             "preco": 50
//         },
//         {
//             "nome": "Item 3",
//             "qtde": 4,
//             "preco": 50
//         }
//     ]
// }

export default function Checkout() {
    const navigate = useNavigate();
    const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    console.log(carrinho);
    
    function handleSubmit(event) {
        event.preventDefault();

        const storedToken = localStorage.getItem("token");

        if (storedToken) {
            try {
                const data = jwt(storedToken)
                console.log(data)
                alert("Compra efetuada com sucesso para o cliente codigo: " + data.codigo + ".")
            } catch (error) {
                console.log(error)
            }
        } else {
            alert('Usuario não autenticado! Por favor fazer o login!')
            navigate("/login");
        }
    }

    return (
        <div className="container text-center">
          <form onSubmit={handleSubmit}>
            <div className="row">
              {carrinho.length > 0 ? (
                carrinho.map((item, i) => (
                  <div className="col" key={i}>
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title">{item.nome} </h5>
                        <p>Quantidade: {item.quantidade}</p>
                        <p>Preço: {item.preço}</p>
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
                <p className="lead">Valor Total do Pedido: R$ {carrinho.reduce((total, item) => total + (item.preço * item.quantidade), 0)}</p>
              </div>
            </div>
            <button type="submit" className="btn btn-primary">Finalizar Pedido</button>
          </form>
        </div>
      );
    }