import './Header.css';

function Header() {
  return (
    <header className="almendra-header">
      <div className="header-content">
        <div className="logo-text" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <span className="logo-almendra">Almendra</span>
          <span className="logo-stickers">Stickers</span>
        </div>
      </div>
    </header>
  );
}

export default Header;