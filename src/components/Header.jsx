import logo from "../images/RickAndMorty.png";
function Header() {
  return (
    <header className="header">
      <a className="header__brand" href="./" title="< Volver">
        <img className="header__logo" src={logo} alt="Logo Ricky and Morty" />
      </a>
    </header>
  );
}

export default Header;
