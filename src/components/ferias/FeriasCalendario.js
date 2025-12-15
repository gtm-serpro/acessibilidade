import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

export default function FeriasCalendario({
  range,
  onSelect,
  onConfirm,
}) {
  return (
    <div className="br-card p-4">
      <h2 className="h5 mb-2">Marcar férias</h2>

      <p className="mb-4">
        Selecione um período no calendário. Você pode dividir suas férias
        em até <strong>3 períodos</strong>.
      </p>

      <div className="ferias-calendar-wrapper">
        <DayPicker
            mode="range"
            numberOfMonths={2}
            selected={range}
            onSelect={onSelect}
            showOutsideDays
            className="ferias-daypicker"
        />
        </div>


      <div className="mt-4 d-flex justify-content-end">
        <button
          className="br-button primary"
          onClick={onConfirm}
          disabled={!range?.from || !range?.to}
        >
          Adicionar período
        </button>
      </div>
    </div>
  );
}
