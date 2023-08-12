import "./header.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  return (

        <div className="header-options-container">
           <div className="header-icon"> 
            <Link to="/">
            <img className="logo-icon" src={process.env.PUBLIC_URL + '/the-petshop-logo-transparent.png'}></img>
            </Link>
            </div>
            <div>
            <Link to="/pedido">
              <img className="carrinho" src={process.env.PUBLIC_URL + '/carrinho.png'}></img>
            </Link>
            </div>
            <div className="sobre">
            <Link to="/sobre">
              Sobre
            </Link>
            </div>
            <div>
            {location.pathname != "/login" && (
              <a href={`/login`}>
                <button type="button" className="btn btn-outline-primary me-2 login">
                  Login
                </button>
              </a>
            )}
            </div>
            <div>
            {location.pathname != "/cadastro" && (
              <a href={`/cliente`}>
                <button type="button" className="btn btn-primary registro">
                  Cadastrar
                </button>
              </a>
            )}
            </div>
          </div>
  );
}
