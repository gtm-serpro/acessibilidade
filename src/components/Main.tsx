import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTimes,
  faExternalLinkSquareAlt,
  faChevronRight,
  faHome,
  faBell,
  faHeart,
  faAddressBook,
  faBook,
  faTree,
  faMoon,
  faArchive
} from '@fortawesome/free-solid-svg-icons';
import { 
  faFacebookF, 
  faTwitter, 
  faLinkedinIn, 
  faWhatsapp 
} from '@fortawesome/free-brands-svg-icons';

export default function Main() {
    return (  
        <main className="d-flex flex-fill mb-5" id="main">
        <div className="container-fluid d-flex">
          <div className="row">
            {/* Menu Lateral */}
            <div className="br-menu" id="main-navigation">
              <div className="menu-container">
                <div className="menu-panel">
                  <div className="menu-header">
                    <div className="menu-title">
                      <img src="Gov.br_logo.svg" alt="Logo"/>
                      <span>Identificação do site ou Sistema</span>
                    </div>
                    <div className="menu-close">
                      <button className="br-button circle" type="button" aria-label="Fechar o menu" data-dismiss="menu">
                        <FontAwesomeIcon icon={faTimes} aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                  
                  <nav className="menu-body" role="tree">
                    <div className="menu-folder">
                      <a className="menu-item" href="javascript:void(0)" role="treeitem">
                        <span className="icon"><FontAwesomeIcon icon={faBell} aria-hidden="true" /></span>
                        <span className="content">Camada 1</span>
                      </a>
                      <ul>
                        <li>
                          <a className="menu-item" href="javascript:void(0)" role="treeitem">
                            <span className="icon"><FontAwesomeIcon icon={faHeart} aria-hidden="true" /></span>
                            <span className="content">Camada 2</span>
                          </a>
                        </li>
                        <li>
                          <a className="menu-item" href="javascript:void(0)" role="treeitem">
                            <span className="icon"><FontAwesomeIcon icon={faAddressBook} aria-hidden="true" /></span>
                            <span className="content">Camada 2</span>
                          </a>
                          <ul>
                            <li>
                              <a className="menu-item" href="javascript:void(0)" role="treeitem">
                                <span className="icon"><FontAwesomeIcon icon={faBook} aria-hidden="true" /></span>
                                <span className="content">Camada 3</span>
                              </a>
                            </li>
                            <li>
                              <a className="menu-item" href="javascript:void(0)" role="treeitem">
                                <span className="icon"><FontAwesomeIcon icon={faTree} aria-hidden="true" /></span>
                                <span className="content">Camada 3</span>
                              </a>
                              <ul>
                                <li>
                                  <a className="menu-item" href="javascript:void(0)" role="treeitem">
                                    <span className="content">Camada 4</span>
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a className="menu-item" href="javascript:void(0)">
                                <span className="icon"><FontAwesomeIcon icon={faMoon} aria-hidden="true" /></span>
                                <span className="content">Camada 3</span>
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a className="menu-item" href="javascript:void(0)">
                            <span className="icon"><FontAwesomeIcon icon={faArchive} aria-hidden="true" /></span>
                            <span className="content">Camada 2</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </nav>
                  
                  <div className="menu-footer">
                    <div className="menu-logos">
                      <img src="Gov.br_logo.svg" alt="Logo"/>
                      <img src="Gov.br_logo.svg" alt="Logo"/>
                    </div>
                    <div className="menu-links">
                      <a href="javascript:void(0)">
                        <span className="mr-1">Link externo 1</span>
                        <FontAwesomeIcon icon={faExternalLinkSquareAlt} aria-hidden="true" />
                      </a>
                      <a href="javascript:void(0)">
                        <span className="mr-1">Link externo 2</span>
                        <FontAwesomeIcon icon={faExternalLinkSquareAlt} aria-hidden="true" />
                      </a>
                    </div>
                    <div className="social-network">
                      <div className="social-network-title">Redes Sociais</div>
                      <div className="d-flex">
                        <a className="br-button circle" href="javascript:void(0)" aria-label="Compartilhar por Facebook">
                          <FontAwesomeIcon icon={faFacebookF} aria-hidden="true" />
                        </a>
                        <a className="br-button circle" href="javascript:void(0)" aria-label="Compartilhar por Twitter">
                          <FontAwesomeIcon icon={faTwitter} aria-hidden="true" />
                        </a>
                        <a className="br-button circle" href="javascript:void(0)" aria-label="Compartilhar por Linkedin">
                          <FontAwesomeIcon icon={faLinkedinIn} aria-hidden="true" />
                        </a>
                        <a className="br-button circle" href="javascript:void(0)" aria-label="Compartilhar por Whatsapp">
                          <FontAwesomeIcon icon={faWhatsapp} aria-hidden="true" />
                        </a>
                      </div>
                    </div>
                    <div className="menu-info">
                      <div className="text-center text-down-01">
                        Todo o conteúdo deste site está publicado sob a licença <strong>Creative Commons Atribuição-SemDerivações 3.0</strong>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="menu-scrim" data-dismiss="menu" tabIndex="0"></div>
              </div>
            </div>

            {/* Conteúdo Principal */}
            <div className="col mb-5">
              <nav className="br-breadcrumb">
                <ol className="crumb-list" role="list">
                  <li className="crumb home">
                    <a className="br-button circle" href="javascript:void(0)">
                      <span className="sr-only" >Página inicial</span>
                      <FontAwesomeIcon icon={faHome} className="icon"/>
                    </a>
                  </li>
                  <li className="crumb">
                    <FontAwesomeIcon icon={faChevronRight} className="icon" />
                    <a href="javascript:void(0)">Tela Anterior</a>
                  </li>
                  <li className="crumb" data-active="active">
                    <FontAwesomeIcon icon={faChevronRight} className="icon" />
                    <span tabIndex="0" aria-current="page">Tela Atual</span>
                  </li>
                </ol>
              </nav>
              
              <div className="main-content pl-sm-3 mt-4" id="main-content">
                <h1>Título h1</h1>
                <p>Parágrafo de exemplo <a href="">link de exemplo</a>.</p>
                
                <div className="row">
                  <div className="col-sm d-flex">
                    <div className="br-card">
                      <div className="card-header">Card de exemplo 1</div>
                      <div className="card-content">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      </div>
                    </div>
                  </div>
                  <div className="col-sm d-flex">
                    <div className="br-card">
                      <div className="card-header">Card de exemplo 2</div>
                      <div className="card-content">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      </div>
                    </div>
                  </div>
                  <div className="col-sm d-flex">
                    <div className="br-card">
                      <div className="card-header">Card de exemplo 3</div>
                      <div className="card-content">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    )
}