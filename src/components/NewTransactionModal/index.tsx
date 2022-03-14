import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import Modal, { Props } from "react-modal";
import { FormWrapper, TransactionTypeContainer, RadioTypeBox } from "./styles";
import { FormEvent, useState } from "react";
import { api } from "../../services/api";

interface ModalProps extends Props {
  onRequestClose: () => void;
}

/**
 * Componente {@link NewTransactionModal}
 * @returns
 */
export function NewTransactionModal({
  isOpen,
  onRequestClose,
  ...props
}: ModalProps) {
  const [type, setType] = useState<"deposit" | "withdraw">("deposit");
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState("");

  function handleCreateNewTransaction(e: FormEvent) {
    e.preventDefault();
    api
      .post("/transactions", {
        title,
        amount,
        category,
        type,
        createdAt: new Date(),
      })
      .then((response) => {
        if (response.status <= 201) {
          alert("Transação cadastrada com sucesso");
          cleanCloseForm();
        }
      })
      .catch((err) => console.error("[Create Error]: " + err));
  }

  function cleanCloseForm() {
    setAmount(0);
    setTitle("");
    setCategory("");
    setType("deposit");

    onRequestClose();
  }

  return (
    <Modal
      {...props}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="modal-custom-overlay"
      className="modal-custom-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="modal-custom-close"
      >
        <img src={closeImg} alt="Fechar modal" />
      </button>
      <FormWrapper onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>

        <input
          autoFocus
          type="text"
          value={title}
          placeholder="Título"
          onChange={(event) => setTitle(event.target.value)}
        />
        <input
          type="number"
          value={amount}
          placeholder="Valor"
          onChange={(event) => setAmount(Number(event.target.value))}
        />
        <TransactionTypeContainer>
          <RadioTypeBox
            type="button"
            activeColor="#33CC95"
            isActive={type === "deposit"}
            onClick={() => setType("deposit")}
          >
            <img src={incomeImg} alt="Receita" />
            <span>Entrada</span>
          </RadioTypeBox>
          <RadioTypeBox
            type="button"
            activeColor="#e52e4d"
            isActive={type === "withdraw"}
            onClick={() => setType("withdraw")}
          >
            <img src={outcomeImg} alt="Despesa" />
            <span>Saída</span>
          </RadioTypeBox>
        </TransactionTypeContainer>
        <input
          type="text"
          value={category}
          placeholder="Categoria"
          onChange={(event) => setCategory(event.target.value)}
        />
        <button type="submit">Cadastrar</button>
      </FormWrapper>
    </Modal>
  );
}
