export const initDSGOV = () => {
  // Importa dinamicamente o JS do DS.GOV
  import('@govbr-ds/core/dist/core-init.js').then(() => {
    // Inicializa os comportamentos
    if (window.BRCore) {
      window.BRCore.default();
    }
  });
};