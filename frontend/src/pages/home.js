import React from "react";
import Title from "./../components/Title/index";
import SearchBar from "../components/SearchBar";

function Home() {
  return (
    <div>
      <Title title={"Catálogo de Produtos"} text={"Produtos Disponíveis"} />
      {/* <Title title=""/> */}
      <SearchBar/>
    </div>
  );
}
export default Home;