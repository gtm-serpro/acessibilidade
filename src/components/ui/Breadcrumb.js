import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronRight,
  faHome,
} from '@fortawesome/free-solid-svg-icons';

export default function Breadcrumb({current}) {
  return (
    <nav className="br-breadcrumb ml-n2">
        <ol className="crumb-list" role="list">
            <li className="crumb home">
                <a className="br-button circle ml-n2 mr-n3" href="/">
                    <span className="sr-only" >Página inicial</span>
                    <FontAwesomeIcon icon={faHome} />
                </a>
            </li>
            <li className="crumb" data-active="active">
                <FontAwesomeIcon icon={faChevronRight} className="icon" />
                <span tabIndex="0" aria-current="page">{current}</span>
            </li>
        </ol>
    </nav>
  )};