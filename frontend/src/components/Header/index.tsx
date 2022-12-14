import logo from '../../assets/img/logo.svg';
import './style.css';

function Header() {
    return (
        <>
        <header>
            <div className="dsmeta-logoContainer">
                <img src={logo} alt="DSMeta" />
                <h1>DSMeta</h1>
                <p>
                    Desenvolvido por
                    <a href="https://www.instagram.com/kleitonreal/?next=%2F" target="_blank"> @kleitonreal</a>
                </p>
            </div>
        </header>
        </>
    )
}

export default Header;