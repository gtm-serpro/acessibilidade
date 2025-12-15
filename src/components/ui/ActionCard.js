import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function ActionCard({ title, description, icon, href }) {
  
  return (
    // <div className="action-card">
      <a
        href={href}
        className="br-card text-decoration-none w-100 h-100 p-sm-1 "
        role="link"
      >
        <div className="card-header d-flex flex-column align-items-center">
          <FontAwesomeIcon icon={icon} aria-hidden="true" className="mb-3" size="2x"/>
          <span className="text-weight-bold text-up-01 ">{title}</span>
        </div>

        <div className="card-content text-down-01">
          {description}
        </div>
      </a>
    // </div>
  );
}
