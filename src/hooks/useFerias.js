import { useState } from "react";

export function useFerias() {
  const [periodos, setPeriodos] = useState([]);
  const [rangeAtual, setRangeAtual] = useState();

  function adicionarPeriodo(range) {
    if (!range?.from || !range?.to) return;

    if (periodos.length >= 3) {
      alert("Você pode selecionar no máximo 3 períodos.");
      return;
    }

    setPeriodos([...periodos, range]);
    setRangeAtual(undefined);
  }

  function removerPeriodo(index) {
    setPeriodos(periodos.filter((_, i) => i !== index));
  }

  return {
    periodos,
    rangeAtual,
    setRangeAtual,
    adicionarPeriodo,
    removerPeriodo,
  };
}
