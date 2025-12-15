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
    <header className="br-header mb-4" id="header" data-sticky="data-sticky">
        <div className="container-fluid">
          <div className="header-top">
            <div className="header-logo">
              <img src="Gov.br_logo.svg" alt="logo"/>
              <span className="br-divider vertical"></span>
              <div className="header-sign">Assinatura</div>
            </div>
            
            <div className="header-actions">
              <div className="header-links dropdown">
                <button className="br-button circle small" type="button" data-toggle="dropdown" aria-label="Abrir Acesso Rápido">
                  <FontAwesomeIcon icon={faEllipsisV} aria-hidden="true" />
                </button>
                <div className="br-list">
                  <div className="header">
                    <div className="title">Acesso Rápido</div>
                  </div>
                  <a className="br-item" href="javascript:void(0)">Link de acesso 1</a>
                  <a className="br-item" href="javascript:void(0)">Link de acesso 2</a>
                  <a className="br-item" href="javascript:void(0)">Link de acesso 3</a>
                  <a className="br-item" href="javascript:void(0)">Link de acesso 4</a>
                </div>
              </div>
              
              <span className="br-divider vertical mx-half mx-sm-1"></span>
              
              <div className="header-functions dropdown">
                <button className="br-button circle small" type="button" data-toggle="dropdown" aria-label="Abrir Funcionalidades do Sistema">
                  <FontAwesomeIcon icon={faTh} aria-hidden="true" />
                </button>
                <div className="br-list">
                  <div className="header">
                    <div className="title">Funcionalidades do Sistema</div>
                  </div>
                  <div className="br-item">
                    <button className="br-button circle small" type="button" aria-label="Funcionalidade 1">
                      <FontAwesomeIcon icon={faChartBar} aria-hidden="true" />
                      <span className="text">Funcionalidade 1</span>
                    </button>
                  </div>
                  <div className="br-item">
                    <button className="br-button circle small" type="button" aria-label="Funcionalidade 2">
                      <FontAwesomeIcon icon={faHeadset} aria-hidden="true" />
                      <span className="text">Funcionalidade 2</span>
                    </button>
                  </div>
                  <div className="br-item">
                    <button className="br-button circle small" type="button" aria-label="Funcionalidade 3">
                      <FontAwesomeIcon icon={faComment} aria-hidden="true" />
                      <span className="text">Funcionalidade 3</span>
                    </button>
                  </div>
                  <div className="br-item">
                    <button className="br-button circle small" type="button" aria-label="Funcionalidade 4">
                      <FontAwesomeIcon icon={faAdjust} aria-hidden="true" />
                      <span className="text">Funcionalidade 4</span>
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="header-search-trigger">
                <button className="br-button circle" type="button" aria-label="Abrir Busca" data-toggle="search" data-target=".header-search">
                  <FontAwesomeIcon icon={faSearch} aria-hidden="true" />
                </button>
              </div>
              
              <div className="header-login">
                <div className="header-sign-in">
                  <button className="br-sign-in small" type="button" data-trigger="login">
                    <FontAwesomeIcon icon={faUser} aria-hidden="true" />
                    <span className="d-sm-inline">Entrar</span>
                  </button>
                </div>
                <div className="header-avatar"></div>
              </div>
            </div>
          </div>
          
          <div className="header-bottom">
            <div className="header-menu">
              <div className="header-menu-trigger" id="header-navigation">
                <button className="br-button small circle" type="button" aria-label="Menu" data-toggle="menu" data-target="#main-navigation" id="navigation">
                  <FontAwesomeIcon icon={faBars} aria-hidden="true" />
                </button>
              </div>
              <div className="header-info">
                <div className="header-title">Template básico</div>
                <div className="header-subtitle">Subtítulo do Header</div>
              </div>
            </div>
            
            <div className="header-search" id="main-searchbox">
              <div className="br-input has-icon">
                <label htmlFor="searchbox">Texto da pesquisa</label>
                <input id="searchbox" type="text" placeholder="O que você procura?"/>
                <button className="br-button circle small" type="button" aria-label="Pesquisar">
                  <FontAwesomeIcon icon={faSearch} aria-hidden="true" />
                </button>
              </div>
              <button className="br-button circle search-close ml-1" type="button" aria-label="Fechar Busca" data-dismiss="search">
                <FontAwesomeIcon icon={faTimes} aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </header>
    )
}