/* eslint-disable no-restricted-globals */
import { Container } from "./styles";
import trashImg from "../../assets/trash.png";
import { Transaction } from "../../core/models/transactions";
import { currencyMask, localeDateFormat } from "../../core/utils/masks";
import { useTransaction } from "../../core/hooks/useTransactions";

/**
 * Componente {@link TransactionsTable}
 * @returns
 */
export function TransactionsTable() {
  const { transactions, deleteTransaction } = useTransaction();

  async function handleDelete(transaction: Transaction) {
    if (confirm("Deseja realmente Remover?"))
      await deleteTransaction(transaction.id);
  }

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Preço</th>
            <th>Categoria</th>
            <th>Data</th>
            <th style={{ textAlign: "center" }}>Ações</th>
          </tr>
        </thead>
        <tbody>
          {transactions?.map((transaction: Transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>
                {currencyMask(transaction.amount)}
              </td>
              <td>{transaction.category}</td>
              <td>{localeDateFormat(transaction.createdAt)}</td>
              <td
                style={{ cursor: "pointer", textAlign: "center" }}
                onClick={() => handleDelete(transaction)}
              >
                <img alt="remover" src={trashImg} width={25} height={25} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
