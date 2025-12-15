import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

export default function FeriasPeriodos({ periodos, onRemove }) {
  if (!periodos.length) return null;

  return (
    <div className="br-card p-4 mt-4">
      <h2 className="h5 mb-3">Períodos selecionados</h2>

      <ul className="br-list">
        {periodos.map((p, index) => (
          <li key={index} className="d-flex justify-content-between">
            <span>
              <strong>{index + 1}º período:</strong>{" "}
              {format(p.from, "dd/MM/yyyy", { locale: ptBR })} a{" "}
              {format(p.to, "dd/MM/yyyy", { locale: ptBR })}
            </span>

            <button
              className="br-button circle small secondary"
              aria-label="Remover período"
              onClick={() => onRemove(index)}
            >
              <i className="fas fa-times" aria-hidden="true"></i>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
