import React from "react";
import Title from "./../components/Title/index";

function Planos() {
  return (
    <div>
      <Title title={"Planos"} text={"Veja abaixo os planos disponíveis:"} />
      {/* <Card /> */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          textAlign: "center",
          width: "50%",
          margin: "auto",
        }}
      >
        <div
          style={{
            border: "black solid 2px",
            margin: "2%",
            borderRadius: "15px",
          }}
        >
          <h1>Ouro</h1>
          <br></br>
          <p>Plano Ouro com o melhor custo benefício do mercado!</p>
          <h2>R$29,90</h2>
        </div>
        <div
          style={{
            border: "black solid 2px",
            margin: "2%",
            borderRadius: "15px",
          }}
        >
          <h1>Prata</h1>
          <br></br>
          <p>Plano Prata, com o básico para a sua família</p>
          <h2>R$19,90</h2>
        </div>
      </div>
    </div>
  );
}

export default Planos;