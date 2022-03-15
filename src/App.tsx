import { useState } from "react";
import Modal from "react-modal";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionsProvider } from "./core/hooks/useTransactions";
import { GlobalStyle } from "./styles/global";

Modal.setAppElement("#root");

/**
 * Componente {@link App}
 * @returns
 * @main
 */
export default function App() {
  const [openedNewTransactionModal, setOpenedNewTransactionModal] =
    useState(false);

  function handleOpenNewTransactionModal() {
    setOpenedNewTransactionModal(true);
  }

  function handleCloseNewTransactionModal() {
    setOpenedNewTransactionModal(false);
  }

  return (
    <TransactionsProvider>
      <GlobalStyle />
      <Header onOpenTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal
        isOpen={openedNewTransactionModal}
        onRequestClose={handleCloseNewTransactionModal}
      />
    </TransactionsProvider>
  );
}
