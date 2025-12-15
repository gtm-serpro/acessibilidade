import { useState } from "react";
import Calendar from "./Calendar";
function DualCalendar() {
  const [baseMonth, setBaseMonth] = useState(new Date());

  function addMonths(date, amount) {
    const d = new Date(date);
    d.setMonth(d.getMonth() + amount);
    return d;
  }

  return (
    <div className="d-flex align-items-center gap-3 mb-4">
      <button
        className="br-button circle secondary"
        aria-label="Mês anterior"
        onClick={() => setBaseMonth(addMonths(baseMonth, -1))}
      >
        <i className="fas fa-chevron-left" aria-hidden="true"></i>
      </button>

      <div className="row flex-fill">
        <div className="col-md-6 mb-3 mb-md-0">
          <Calendar month={baseMonth} />
        </div>

        <div className="col-md-6">
          <Calendar month={addMonths(baseMonth, 1)} />
        </div>
      </div>

      <button
        className="br-button circle secondary"
        aria-label="Próximo mês"
        onClick={() => setBaseMonth(addMonths(baseMonth, 1))}
      >
        <i className="fas fa-chevron-right" aria-hidden="true"></i>
      </button>
    </div>
  );
}
export default DualCalendar;