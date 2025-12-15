import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function ActionCard({ title, description, icon, href }) {
  
  return (
    <div className="d-flex justify-content-center">
      <a
        href={href}
        className="br-card text-decoration-none"
        role="link"
      >
        <div className="card-header d-flex flex-column align-items-center">
          <FontAwesomeIcon icon={icon} aria-hidden="true" className="mb-3" size="2x"/>
          <span className="text-weight-bold">{title}</span>
        </div>

        <div className="card-content">
          {description}
        </div>
      </a>
    </div>
  );
}
