import { useContext } from "react";
import { Transaction } from "../../models/transactions";
import { Container } from "./styles";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { currencyMask, localeDateFormat } from "../../utils/masks";

/**
 * Componente {@link TransactionsTable}
 * @returns
 */
export function TransactionsTable() {
  const { transactions } = useContext(TransactionsContext);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Preço</th>
            <th>Categoria</th>
            <th>Data</th>
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
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
