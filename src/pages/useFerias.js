const DIAS_MINIMOS = 5;
const MAX_PERIODOS = 3;

export default function useFerias(setMensagem) {

  const podeConfirmar = true; // ajuste conforme sua regra real

  const diasRestantes = 10; // exemplo

  const validarPeriodo = (periodo) => {
    if (!periodo) {
      setMensagem({
        tipo: "warning",
        titulo: "Período inválido",
        texto: "Selecione um período válido."
      });
      return false;
    }

    if (periodo.dias < DIAS_MINIMOS) {
      setMensagem({
        tipo: "warning",
        titulo: "Período inválido",
        texto: `O período mínimo é de ${DIAS_MINIMOS} dias.`
      });
      return false;
    }

    if (periodo.quantidade > MAX_PERIODOS) {
      setMensagem({
        tipo: "warning",
        titulo: "Limite excedido",
        texto: `Você pode selecionar no máximo ${MAX_PERIODOS} períodos.`
      });
      return false;
    }

    if (periodo.dias > diasRestantes) {
      setMensagem({
        tipo: "warning",
        titulo: "Dias insuficientes",
        texto: `Você possui apenas ${diasRestantes} dias restantes.`
      });
      return false;
    }

    setMensagem(null);
    return true;
  };

  const limparTudo = () => {
    setMensagem(null);
    // aqui você limpa períodos, datas, estados internos etc
  };

  return {
    podeConfirmar,
    validarPeriodo,
    limparTudo
  };
}
