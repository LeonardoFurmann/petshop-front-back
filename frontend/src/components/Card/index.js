import { useState } from "react";
import { useEffect } from "react";
import "./card.css";

export default function Card({ searchValue }) {
  const [produtos, setProdutos] = useState([]);
  const [filteredProdutos, setFilteredProdutos] = useState([]);
 

  useEffect(() => {
    fetch("http://localhost:3001/produtos")
      .then((response) => response.json())
      .then((data) => setProdutos(data))
      .catch((err) => console.error(err));
  }, []);

  
  useEffect(() => {
    setFilteredProdutos(
      produtos.filter((produto) => {
        return produto.nome.toLowerCase().includes(searchValue.toLowerCase());
      })
    );
  }, [searchValue]);

  useEffect(() => {
    if (filteredProdutos.length == 0) {
      setFilteredProdutos(produtos);
    }
  }, [produtos]);

  if (!produtos) {
    return <p>Carregando...</p>;
  }

  function handleFiltroChange(event) {
    console.log(produtos);
    console.log(event.target.value);
    const ordenado = [...filteredProdutos];
    if (event.target.value == "preçoMaior") {
      setFilteredProdutos(
        ordenado.sort(function (a, b) {
          return b.preço - a.preço;
        })
      );
    } else if (event.target.value == "nome") {
      setFilteredProdutos(
        ordenado.sort(function (a, b) {
          return a.nome.localeCompare(b.nome);
        })
      );
    } else if (event.target.value == "preçoMenor") {
      setFilteredProdutos(
        ordenado.sort(function (a, b) {
          return a.preço - b.preço;
        })
      );
    }
    console.log(produtos);
  }

  return (
    <div className="container text-center">
      <div className="filtrarPor">
        <label>Filtrar por:</label>
        <select name="filtro" id="filtro" onChange={handleFiltroChange}>
          <option value="preçoMaior">Preço(Maior pro menor)</option>
          <option value="preçoMenor">Preço(Menor pro maior)</option>
          <option value="nome">Nome</option>
        </select>
      </div>
      <div className="linha">
        {filteredProdutos.map((produto, i) => (
          <div className="coluna" key={i}>
            <div className="card">
              <img
                src={produto.imagem}
                alt={produto.nome}
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">
                  {produto.nome}
                </h5>
                <p>
                  Categoria: {produto.categoria}
                </p>
                <p>
                  Preço: {produto.preço}R$
                </p>
                <p>
                  Descrição: {produto.descrição}
                </p>
                <p>
                  Para: {produto.animal}
                </p>
                <p className="card-text">{produto.descricao}</p>
                <a href={`/detalhes/${produto.id}`}>
                  <div className="btn btn-primary">Detalhes</div>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

