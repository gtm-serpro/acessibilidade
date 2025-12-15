import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faEllipsisV, 
  faTh, 
  faChartBar, 
  faHeadset, 
  faComment, 
  faAdjust,
  faSearch,
  faUser,
  faBars,
  faTimes
} from '@fortawesome/free-solid-svg-icons';

export default function Header() {
    return (  
<header className="br-header compact">
  <div className="container-lg">
    <div className="header-top">
      <div className="header-logo">
        <img src="Serpro_logo.svg" alt="Logo Serpro" className="h-5"/>
        <span className="br-divider vertical"></span>
      </div>

      <div className="header-actions">
        <div className="header-links dropdown">
          <button
            className="br-button circle small"
            type="button"
            data-toggle="dropdown"
            aria-label="Abrir Acesso Rápido"
          >
            <FontAwesomeIcon icon={faEllipsisV} />
          </button>

          <div className="br-list">
            <div className="header">
              <div className="title">Acesso Rápido</div>
            </div>
            <a className="br-item" href="/beneficios">Benefícios</a>
            <a className="br-item" href="/ferias">Férias</a>
            <a className="br-item" href="/licenca-premio">Licença Prêmio</a>
            <a className="br-item" href="/irrf">Informe de Rendimentos</a>
          </div>
        </div>

        <span className="br-divider vertical mx-half mx-sm-1"></span>

        <div className="header-functions dropdown">
          <button
            className="br-button circle small"
            type="button"
            data-toggle="dropdown"
            aria-label="Abrir Funcionalidades do Sistema"
          >
            <FontAwesomeIcon icon={faTh} />
          </button>

          <div className="br-list">
            <div className="header">
              <div className="title">Funcionalidades do Sistema</div>
            </div>

            <div className="br-item">
              <button className="br-button circle small" type="button" aria-label="Funcionalidade 1">
                <FontAwesomeIcon icon={faChartBar} />
                <span className="text">Funcionalidade 1</span>
              </button>
            </div>

            <div className="br-item">
              <button className="br-button circle small" type="button" aria-label="Funcionalidade 2">
                <FontAwesomeIcon icon={faHeadset} />
                <span className="text">Funcionalidade 2</span>
              </button>
            </div>

            <div className="br-item">
              <button className="br-button circle small" type="button" aria-label="Funcionalidade 3">
                <FontAwesomeIcon icon={faComment} />
                <span className="text">Funcionalidade 3</span>
              </button>
            </div>

            <div className="br-item">
              <button className="br-button circle small" type="button" aria-label="Funcionalidade 4">
                <FontAwesomeIcon icon={faAdjust} />
                <span className="text">Funcionalidade 4</span>
              </button>
            </div>
          </div>
        </div>

        <div className="header-search-trigger">
          <button
            className="br-button circle"
            type="button"
            aria-label="Abrir Busca"
            data-toggle="search"
            data-target=".header-search"
          >
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>

        <div className="header-login">
          <div className="header-sign-in">
            <button className="br-sign-in small" type="button" data-trigger="login">
              <FontAwesomeIcon icon={faUser} />
              <span className="d-sm-inline">Entrar</span>
            </button>
          </div>
          <div className="header-avatar"></div>
        </div>
      </div>
    </div>

    <div className="header-bottom">
      <div className="header-menu">
        <div className="header-menu-trigger  ml-n2">
          <button
            className="br-button small circle"
            type="button"
            aria-label="Menu"
            data-toggle="menu"
            data-target="#main-navigation"
            id="menu-compact"
          >
            <FontAwesomeIcon icon={faBars}/>
          </button>
        </div>
        <a href='/'>
          <div className="header-info">
            <div className="header-title">SGP</div>
            <div className="header-subtitle">Sistema de Gestão de Pessoas</div>
          </div>
        </a>
      </div>

      <div className="header-search">
        <div className="br-input has-icon">
          <label htmlFor="searchbox-63837">Texto da pesquisa</label>
          <input
            id="searchbox-63837"
            type="text"
            placeholder="O que você procura?"
          />
          <button className="br-button circle small" type="button" aria-label="Pesquisar">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>

        <button
          className="br-button circle search-close ml-1"
          type="button"
          aria-label="Fechar Busca"
          data-dismiss="search"
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </div>
    </div>
  </div>
</header>


    )
}