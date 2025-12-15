import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTimes,
  faExternalLinkSquareAlt,
  faBell,
  faHeart,
  faAddressBook,
  faBook,
  faTree,
  faMoon,
  faArchive,
  faUser,
  faIdBadge,
  faUmbrellaBeach,
  faGift,
  faMedal,
  faFileInvoiceDollar,
} from '@fortawesome/free-solid-svg-icons';
import { 
  faFacebookF, 
  faTwitter, 
  faLinkedinIn, 
  faWhatsapp 
} from '@fortawesome/free-brands-svg-icons';
import Breadcrumb from './ui/Breadcrumb';
import { ActionCard } from "./ui/ActionCard";

const cards = [
  
  {
    title: "Benefícios",
    description: "Consulte, acompanhe e verifique os benefícios disponíveis para você.",
    icon: faGift,
    href: "/beneficios",
  },
  {
    title: "Férias",
    description: "Solicite, acompanhe e consulte os períodos de férias disponíveis.",
    icon: faUmbrellaBeach,
    href: "/ferias",
  },
  {
    title: "Licença-Prêmio",
    description: "Consulte, acompanhe e verifique as informações sobre licença-prêmio.",
    icon: faMedal,
    href: "/licenca-premio",
  },
  {
    title: "Informe de Rendimentos",
    description: "Acesse, consulte e baixe o informe de rendimentos para o exercício desejado.",
    icon: faFileInvoiceDollar,
    href: "/irrf",
  },
    {
    title: "Cadastro Pessoal",
    description: "Consulte, atualize e acompanhe as informações do seu cadastro pessoal.",
    icon: faUser,
    href: "/cadastro-pessoal",
  },
  {
    title: "Cadastro de Funcionário",
    description: "Consulte, atualize e acompanhe as informações do cadastro do funcionário.",
    icon: faIdBadge,
    href: "/cadastro-funcionario",
  },
];



export default function Main() {
    return (  
        <main className="d-flex flex-fill mb-5" id="main">
        <div className="container d-flex">
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
              {/* <Breadcrumb /> */}
              
              <div className="main-content pl-sm-3 mt-4" id="main-content">
                {/* <h1>Título h1</h1>
                <p>Parágrafo de exemplo <a href="">link de exemplo</a>.</p> */}
                
                <div className="row">
                  
                  {cards.map((card) => (
                    <div key={card.title} className="col-12 col-sm-6 col-lg-4 d-flex">
                    <ActionCard
                      key={card.title}
                      title={card.title}
                      description={card.description}
                      icon={card.icon}
                      href={card.href}
                    />
                    </div>
                  ))}
                </div>

                
              </div>
            </div>
          </div>
        </div>
      </main>
    )
}