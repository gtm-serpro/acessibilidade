import { useState } from 'react';
import { DayPicker } from "react-day-picker";
import { format, differenceInDays, addDays } from "date-fns";
import { ptBR } from "date-fns/locale";
import "react-day-picker/dist/style.css";
import Breadcrumb from '../components/ui/Breadcrumb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTimes
} from '@fortawesome/free-solid-svg-icons';
// Hook personalizado para gerenciar férias
function useFerias() {
  const [periodos, setPeriodos] = useState([]);
  const [rangeAtual, setRangeAtual] = useState();

  const DIAS_TOTAIS = 30;
  const DIAS_MINIMOS = 5;
  const MAX_PERIODOS = 3;

  const diasUsados = periodos.reduce((total, periodo) => {
    return total + differenceInDays(periodo.to, periodo.from) + 1;
  }, 0);

  const diasRestantes = DIAS_TOTAIS - diasUsados;

  function adicionarPeriodo(range) {
    if (!range?.from || !range?.to) {
      alert("Selecione um período válido.");
      return;
    }

    const diasSelecionados = differenceInDays(range.to, range.from) + 1;

    if (diasSelecionados < DIAS_MINIMOS) {
      alert(`O período mínimo é de ${DIAS_MINIMOS} dias.`);
      return;
    }

    if (periodos.length >= MAX_PERIODOS) {
      alert(`Você pode selecionar no máximo ${MAX_PERIODOS} períodos.`);
      return;
    }

    if (diasUsados + diasSelecionados > DIAS_TOTAIS) {
      alert(`Você tem apenas ${diasRestantes} dias restantes.`);
      return;
    }

    setPeriodos([...periodos, range]);
    setRangeAtual(undefined);
  }

  function removerPeriodo(index) {
    setPeriodos(periodos.filter((_, i) => i !== index));
  }

  function limparTudo() {
    setPeriodos([]);
    setRangeAtual(undefined);
  }

  const podeConfirmar = diasUsados === DIAS_TOTAIS && periodos.length > 0;

  return {
    periodos,
    rangeAtual,
    setRangeAtual,
    adicionarPeriodo,
    removerPeriodo,
    limparTudo,
    diasUsados,
    diasRestantes,
    podeConfirmar,
    DIAS_TOTAIS,
    MAX_PERIODOS,
  };
}

// Componente de Resumo de Dias
function ResumoFeriasDias({ diasUsados, diasRestantes, totalDias, periodos, maxPeriodos }) {
  const percentual = (diasUsados / totalDias) * 100;
  
  return (
    <div className="br-card p-3 mb-3">
      <h3 className="h6 mb-3">Resumo</h3>
      
      <div className="mb-3">
        <div className="d-flex justify-content-between mb-1">
          <span className="text-weight-semi-bold">Períodos: {periodos.length}/{maxPeriodos}</span>
          <span className="text-weight-semi-bold">Dias: {diasUsados}/{totalDias}</span>
        </div>
        
        <div style={{
          width: '100%',
          height: '8px',
          backgroundColor: '#e0e0e0',
          borderRadius: '4px',
          overflow: 'hidden'
        }}>
          <div style={{
            width: `${percentual}%`,
            height: '100%',
            backgroundColor: diasUsados === totalDias ? '#168821' : diasUsados > totalDias ? '#E52207' : '#1351B4',
            transition: 'width 0.3s ease'
          }} />
        </div>
      </div>

      {diasRestantes > 0 && (
        <div className="br-message warning">
          <div className="content">
            <span className="message-title">Restam {diasRestantes} dias</span>
            <span className="message-body">Você precisa usar todos os 30 dias de férias.</span>
          </div>
        </div>
      )}

      {diasUsados === totalDias && (
        <div className="br-message success">
          <div className="content">
            <span className="message-title">Pronto para confirmar!</span>
            <span className="message-body">Todos os dias foram alocados.</span>
          </div>
        </div>
      )}
    </div>
  );
}

// Componente de Calendário
function FeriasCalendario({ range, onSelect, onConfirm, diasRestantes, periodos }) {
  const diasSelecionados = range?.from && range?.to 
    ? differenceInDays(range.to, range.from) + 1 
    : 0;

  // Marca os dias já selecionados em períodos anteriores
  const diasOcupados = periodos.flatMap(periodo => {
    const dias = [];
    let current = new Date(periodo.from);
    while (current <= periodo.to) {
      dias.push(new Date(current));
      current = addDays(current, 1);
    }
    return dias;
  });

  return (
    <div className="br-card p-4">
      <h2 className="h5 mb-3">Selecionar período de férias</h2>

      <p className="mb-3 text-down-01">
        Selecione no calendário o início e fim do período. Mínimo de 5 dias por período.
      </p>

      {diasSelecionados > 0 && (
        <div className="mb-3 p-2" style={{backgroundColor: '#E7F0FA', borderRadius: '4px'}}>
          <strong>Período selecionado:</strong> {diasSelecionados} dia(s)
          {diasSelecionados < 5 && (
            <span style={{color: '#E52207'}}> - Mínimo de 5 dias</span>
          )}
          {diasSelecionados > diasRestantes && (
            <span style={{color: '#E52207'}}> - Excede dias disponíveis</span>
          )}
        </div>
      )}

      <div className="ferias-calendar-wrapper">
        <DayPicker
          mode="range"
          numberOfMonths={2}
          selected={range}
          onSelect={onSelect}
          disabled={diasOcupados}
          showOutsideDays
          className="ferias-daypicker"
          locale={ptBR}
          fromDate={new Date()}
        />
      </div>

      <div className="mt-3 d-flex justify-content-end gap-2">
        <button
          className="br-button secondary"
          onClick={() => onSelect(undefined)}
          disabled={!range}
        >
          Limpar
        </button>
        <button
          className="br-button primary"
          onClick={onConfirm}
          disabled={!range?.from || !range?.to || diasSelecionados < 5 || diasSelecionados > diasRestantes}
        >
          Adicionar período
        </button>
      </div>
    </div>
  );
}

// Componente de Períodos Selecionados
function FeriasPeriodos({ periodos, onRemove }) {
  if (!periodos.length) {
    return (
      <div className="br-card p-4">
        <h2 className="h5 mb-3">Períodos Adicionados</h2>
        <p className="text-down-01 mb-0">Nenhum período selecionado ainda.</p>
      </div>
    );
  }

  return (
    <div className="br-card p-4">
      <h2 className="h5 mb-3">Períodos selecionados</h2>

      <div className="br-list">
        {periodos.map((p, index) => {
          const dias = differenceInDays(p.to, p.from) + 1;
          return (
            <div key={index} className="br-item d-flex justify-content-between align-items-center">
              <div>
                <strong>{index + 1}º período</strong>
                <div className="text-down-01">
                  {format(p.from, "dd/MM/yyyy", { locale: ptBR })} até{" "}
                  {format(p.to, "dd/MM/yyyy", { locale: ptBR })}
                  <span className="ml-2">({dias} dia{dias > 1 ? 's' : ''})</span>
                </div>
              </div>

              <button
                className="br-button circle small secondary"
                aria-label="Remover período"
                onClick={() => onRemove(index)}
              >
                <FontAwesomeIcon icon={faTimes} aria-hidden="true" />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// Componente de Histórico
function FeriasHistorico() {
  const [anoAberto, setAnoAberto] = useState(null);

  const historico = {
    2024: [
      { inicio: "10/01/2024", fim: "24/01/2024", dias: 15 },
      { inicio: "05/07/2024", fim: "19/07/2024", dias: 15 }
    ],
    2023: [
      { inicio: "02/02/2023", fim: "16/02/2023", dias: 15 },
      { inicio: "10/07/2023", fim: "24/07/2023", dias: 15 }
    ],
    2022: [
      { inicio: "15/01/2022", fim: "03/02/2022", dias: 20 },
      { inicio: "20/07/2022", fim: "29/07/2022", dias: 10 }
    ]
  };

  const toggleAno = (ano) => {
    setAnoAberto(anoAberto === ano ? null : ano);
  };

  return (
    <div className="br-card p-4 mt-4">
      <h2 className="h5 mb-3">Histórico de férias</h2>

      <div>
  {Object.entries(historico)
    .sort(([anoA], [anoB]) => Number(anoB) - Number(anoA))
    .map(([ano, periodos]) => (
      <div
        key={ano}
        className="mb-2"
        style={{ borderBottom: "1px solid #ddd" }}
      >
        <button
          className="w-100 p-3 d-flex justify-content-between align-items-center"
          style={{
            border: "none",
            background: "none",
            cursor: "pointer",
            textAlign: "left",
          }}
          onClick={() => toggleAno(ano)}
          aria-expanded={anoAberto === ano}
        >
          <strong>{ano}</strong>
          <i
            className={`fas fa-chevron-${
              anoAberto === ano ? "up" : "down"
            }`}
            aria-hidden="true"
          />
        </button>

        {anoAberto === ano && (
          <div className="px-3 pb-3">
            <div className="br-list">
              {periodos.map((p, i) => (
                <div key={i} className="br-item">
                  <strong>{i + 1}º período:</strong> {p.inicio} até {p.fim}
                  <span className="text-down-01 ml-2">
                    ({p.dias} dias)
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    ))}
</div>

    </div>
  );
}

// Componente Principal
export default function Ferias() {
  const {
    periodos,
    rangeAtual,
    setRangeAtual,
    adicionarPeriodo,
    removerPeriodo,
    limparTudo,
    diasUsados,
    diasRestantes,
    podeConfirmar,
    DIAS_TOTAIS,
    MAX_PERIODOS,
  } = useFerias();

  const [solicitacaoEnviada, setSolicitacaoEnviada] = useState(false);

  const handleConfirmarSolicitacao = () => {
    if (podeConfirmar) {
      setSolicitacaoEnviada(true);
      setTimeout(() => {
        alert("Solicitação de férias enviada com sucesso!");
        limparTudo();
        setSolicitacaoEnviada(false);
      }, 1000);
    }
  };

  return (
    <main className="container-lg mb-5" id="main-content">
      <Breadcrumb current="Férias"/>

      <h1 className="mb-4">Férias</h1>

      <div className="row">
        <div className="col-lg-8 mb-4">
          <FeriasCalendario
            range={rangeAtual}
            onSelect={setRangeAtual}
            onConfirm={() => adicionarPeriodo(rangeAtual)}
            diasRestantes={diasRestantes}
            periodos={periodos}
          />
        </div>

        <div className="col-lg-4 mb-4">
          <ResumoFeriasDias
            diasUsados={diasUsados}
            diasRestantes={diasRestantes}
            totalDias={DIAS_TOTAIS}
            periodos={periodos}
            maxPeriodos={MAX_PERIODOS}
          />

          <FeriasPeriodos periodos={periodos} onRemove={removerPeriodo} />

          {periodos.length > 0 && (
            <div className="mt-3 d-flex flex-column gap-2">
              <button
                className="br-button primary block"
                onClick={handleConfirmarSolicitacao}
                disabled={!podeConfirmar || solicitacaoEnviada}
              >
                {solicitacaoEnviada ? "Enviando..." : "Confirmar solicitação"}
              </button>
              
              <button
                className="br-button secondary block"
                onClick={limparTudo}
              >
                Limpar tudo
              </button>
            </div>
          )}
        </div>
      </div>

      <FeriasHistorico />
    </main>
  );
}

// Estilos CSS embutidos
const styles = `
<style>
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}

.ferias-daypicker {
  --rdp-accent-color: #1351B4 !important;
  --rdp-background-color: #E7F0FA !important;
  --rdp-accent-color-dark: #0C326F !important;
}

.ferias-daypicker .rdp-day_selected,
.ferias-daypicker .rdp-day_range_start,
.ferias-daypicker .rdp-day_range_end {
  background-color: #1351B4 !important;
  color: #fff !important;
  font-weight: 600 !important;
}

.ferias-daypicker .rdp-day_range_middle {
  background-color: #E7F0FA !important;
  color: #1351B4 !important;
}

.ferias-daypicker .rdp-day_disabled {
  opacity: 0.3;
  text-decoration: line-through;
}

.ferias-calendar-wrapper {
  overflow-x: auto;
}

.gap-2 {
  gap: 0.5rem;
}

.br-message {
  padding: 12px;
  border-radius: 4px;
  font-size: 14px;
}

.br-message.warning {
  background-color: #FFF5E6;
  border-left: 4px solid #FFCD07;
}

.br-message.success {
  background-color: #E6F5E9;
  border-left: 4px solid #168821;
}

.br-message .content {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.br-message .message-title {
  font-weight: 600;
  font-size: 14px;
}

.br-message .message-body {
  font-size: 13px;
}
</style>
`;

// Injetar estilos
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = styles.replace(/<\/?style>/g, '');
  document.head.appendChild(styleSheet);
}