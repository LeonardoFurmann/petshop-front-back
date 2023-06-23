import "./Banner.css"


export default function Banner(){

    const bannerImgPath = process.env.PUBLIC_URL + '/banner-img.jpg';
    const logoImgPath = process.env.PUBLIC_URL + '/the-petshop-logo-transparent.png';



    return(
        <div>
            <img className="banner" src={bannerImgPath}></img>
            <div className="slogan">
                <h1 className="slogan-1">The PetShop</h1>
                <h3 className="slogan-2">Os melhores produtos para o seu pet, quando e onde você estiver!</h3>
            </div>
            <div className="banner-container">
                <div className="item 1">Acessórios</div>
                <div className="item 2">Brinquedos</div>
                <div className="item 3">Rações</div>
            </div>
            <img className="logo" src={logoImgPath}></img>
        </div>
    )
}