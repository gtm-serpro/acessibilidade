import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronRight,
  faHome,
} from '@fortawesome/free-solid-svg-icons';

export default function Breadcrumb() {
  return (
    <nav className="br-breadcrumb">
        <ol className="crumb-list" role="list">
            <li className="crumb home">
                <a className="br-button circle" href="/">
                    <span className="sr-only" >Página inicial</span>
                    <FontAwesomeIcon icon={faHome} />
                </a>
            </li>
            <li className="crumb" data-active="active">
                <FontAwesomeIcon icon={faChevronRight} className="icon" />
                <span tabIndex="0" aria-current="page">Tela Atual</span>
            </li>
        </ol>
    </nav>
  )};