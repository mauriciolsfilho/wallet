import { Transaction } from "../../core/models/transactions";
import { Container } from "./styles";
import { currencyMask, localeDateFormat } from "../../core/utils/masks";
import { useTransaction } from "../../core/hooks/useTransactions";

/**
 * Componente {@link TransactionsTable}
 * @returns
 */
export function TransactionsTable() {
  const { transactions } = useTransaction();

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
