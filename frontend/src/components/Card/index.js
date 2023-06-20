import { useState } from "react";
import { useEffect } from "react";
import "./card.css";

function Assitido({ javisto }) {
  if (javisto) {
    return <p>Assistido ✔</p>;
  }
  return <p className="item">Não assistido</p>;
}

export default function Card({searchValue}) {
  const [filmes, setFilmes] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/marycamila184/movies/movies")
      .then((response) => response.json())
      .then((data) => setFilmes(data))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    setFilteredMovies(
      filmes.filter((filme) => {
        return filme.titulo.toLowerCase().includes(searchValue.toLowerCase());
         })
    )

  }, [searchValue]);

  useEffect(() => {
    if(filteredMovies.length == 0){
      setFilteredMovies(filmes);
    }
  }, [filmes])

  if (!filmes) {
    return <p>Carregando...</p>;
  }

  function handleFiltroChange(event) {
    console.log(filmes);
    console.log(event.target.value);
    const ordenado = [...filteredMovies];
    if (event.target.value == "ano") {
      setFilteredMovies(
        ordenado.sort(function (a, b) {
          return a.ano - b.ano;
        })
      );
    } else if (event.target.value == "titulo") {
      setFilteredMovies(
        ordenado.sort(function (a, b) {
          return a.titulo.localeCompare(b.titulo);
        })
      );
    } else if (event.target.value == "nota") {
      setFilteredMovies(
        ordenado.sort(function (a, b) {
          return a.nota - b.nota;
        })
      );
    }
    console.log(filmes);
  }


  return (
    <div className="container text-center">
      <div className="filtrarPor">
        <label>Filtrar por:</label>
        <select name="filtro" id="filtro" onChange={handleFiltroChange}>
          <option value="titulo">Título</option>
          <option value="ano">Ano</option>
          <option value="nota">Nota</option>
        </select>
      </div>
      <div className="row">
        {filteredMovies.map((filme, i) => (
          <div className="col" key={i}>
            <div className="card">
              <img
                src={filme.poster}
                alt={filme.titulo}
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">
                  {filme.titulo} ({filme.ano}){" "}
                </h5>
                <p>Sinopse</p>
                <p className="card-text">{filme.descricao}</p>
                <p>{filme.nota}</p>
                <Assitido javisto={filme.assistido} />
                <a href={`/detalhes/${filme.titulo}`}>
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