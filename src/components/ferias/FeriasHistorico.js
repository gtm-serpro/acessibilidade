export default function FeriasHistorico() {
  const historico = {
    2024: ["10/01 a 24/01", "05/07 a 19/07"],
    2023: ["02/02 a 16/02"],
  };

  return (
    <div className="br-card p-4 mt-5">
      <h2 className="h5 mb-3">Histórico de férias</h2>

      <div className="br-accordion">
        {Object.entries(historico).map(([ano, periodos]) => (
          <div className="item" key={ano}>
            <button className="header">{ano}</button>
            <div className="content">
              <ul className="br-list">
                {periodos.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
