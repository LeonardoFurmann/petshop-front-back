import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "./detalhes.css";

export default function Detalhes() {
    const [produto, setProduto] = useState([]);
    const [loading, setLoading] = useState(true);
    const { codigo } = useParams();

    useEffect(() => {

        fetch(`http://localhost:3001/produtos/${codigo}`)
            .then(response => response.json())          
            .then(data => {
                setProduto(data);
                setLoading(false); 
            })
            .catch(err => console.error(err))
    }, []);

        
        return (
            <div className="container">
            {loading ? (
              <h1 className="display-6">Carregando...</h1>
            ) : (
              <>
                {Object.keys(produto).length === 0 ? (
                  <h1 className="display-6">Nenhum filme encontrado.</h1>
                ) : (
                  <div className="row">
                    <div className="col">
                      <div className="card" style={{ maxWidth: "500px" }}>
                        <img src={produto.imagem} alt={produto.nome} className="card-img-top" />
                      </div>
                    </div>
                    <div className="col">
                      <div className="card mx-auto p-3">
                        <h1 className="text-center">{produto.nome}</h1>
                        <p className="text-center">Preço do produto: {produto.preço}R$</p>
                        <p className="text-center">Descrição do produto: {produto.descrição}</p>
                      </div>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        );
                
}