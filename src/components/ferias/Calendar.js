function Calendar({ month }) {
  const monthName = month.toLocaleDateString("pt-BR", {
    month: "long",
    year: "numeric",
  });

  return (
    <div className="br-card p-3">
      <h3 className="h6 text-center mb-3 text-capitalize">
        {monthName}
      </h3>

      <div className="calendar-grid">
        {Array.from({ length: 30 }).map((_, i) => (
          <button
            key={i}
            className="calendar-day"
            aria-pressed="false"
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
export default Calendar;