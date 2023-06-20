import Card from "../Card";
import { useState } from "react";
import "./searchBar.css";


export default function SearchBar() {

    const [busca, setbusca] = useState([]);
    function handleSearchValue(event){
        setbusca(event.target.value) 
    }

    return (
    <div>
        <div className="search">
            <input
            type="text"
            placeholder="Pesquisar..."
            onChange={handleSearchValue}
            />
            <h1>Categoria</h1>
        </div>

        <Card searchValue={busca}/>
        <Card searchValue={busca}/>
        <Card searchValue={busca}/>
    </div>
    );
}

  