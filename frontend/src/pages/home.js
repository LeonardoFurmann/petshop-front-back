import React from "react";
import Title from "./../components/Title/index";
import SearchBar from "../components/SearchBar";
import Banner from "../components/Banner";
import "./home.css";

function Home() {
  return (
    <div style={{backgroundColor: "#D5F3FF"}}>
      <Banner/>
      <h1>Catálogo de Produtos</h1>
      <h3>Produtos disponíveis</h3>
      {/* <Title title=""/> */}
      <SearchBar/>
    </div>
  );
}
export default Home;