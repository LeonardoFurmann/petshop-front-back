import Card from "../Card";
import { useState } from "react";
import { useEffect } from "react";
import "./searchBar.css";


export default function SearchBar() {

    const [categorias, setCategorias] = useState([]);
    const [busca, setbusca] = useState([]);
    function handleSearchValue(event) {
        setbusca(event.target.value)
    }

    useEffect(() => {
        fetch("http://localhost:3001/categorias")
            .then((response) => response.json())
            .then((data) => setCategorias(data))
            .catch((err) => console.error(err));
    }, []);


    return (
        <div>
            <div className="search">
                <input
                    type="text"
                    placeholder="Pesquisar..."
                    onChange={handleSearchValue}
                    className="search-bar-input"
                />
            </div>

            <div className="container text-center">
                {categorias.map((categoria) => (
                    <div key={categoria.id} className={categoria.nome.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")}>
                        <h1>{categoria.nome}</h1>
                        <Card searchValue={busca} categoria={categoria.nome} />
                    </div>
                ))}
            </div>
        </div>
    );
}

