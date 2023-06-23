import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Comments from '../components/Comments';
import "./detalhes.css";

export default function Detalhes() {
  const [produto, setProduto] = useState([]);
  const [loading, setLoading] = useState(true);
  const [quantidade, setQuantidade] = useState(1);
  const { codigo } = useParams();
  const navigate = useNavigate();

  const adicionarAoCarrinho = () => {

    console.log('Produto:', produto);
    console.log('Quantidade:', quantidade);

    const itemCarrinho = {
      id: produto.id,
      nome: produto.nome,
      preço: produto.preço,
      quantidade: quantidade
    };

    const carrinhoAtual = JSON.parse(localStorage.getItem("carrinho")) || [];
    const novoCarrinho = [...carrinhoAtual, itemCarrinho];

    localStorage.setItem("carrinho", JSON.stringify(novoCarrinho));
    if(quantidade==1){
    window.alert("Item adicionado ao carrinho com sucesso!")
    } 
    else{
      window.alert("Itens adicinados ao carrinho com sucesso!")
    }
    navigate("/");
  };

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
            <h1 className="display-6">Nenhum Produto encontrado.</h1>
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
                  <div className="text-center">
                    <label>
                      Quantidade:
                      <input
                        type="number"
                        min="1"
                        value={quantidade}
                        onChange={(e) => setQuantidade(e.target.value)}
                      />
                    </label>
                    <button className="btn btn-primary" onClick={adicionarAoCarrinho}>
                      Adicionar ao carrinho
                    </button>
                  </div>
                </div>
              </div>
              {Object.keys(produto).length !== 0 && <Comments produto={codigo} />}
            </div>
          )}
        </>
      )}
    </div>
  );

}