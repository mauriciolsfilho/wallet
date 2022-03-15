import { Card } from "../Card";
import { Container } from "./styles";

import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";
import { useTransaction } from "../../core/hooks/useTransactions";

/**
 * Componente {@link Summary}
 * @returns
 */
export function Summary() {
  const { transactions } = useTransaction();

  const summary = transactions.reduce(
    (acc, curr) => {
      if (curr.type === "deposit") {
        acc.deposits += curr.amount;
      } else {
        acc.withdraws += curr.amount;
      }
      acc.total += curr.amount;
      return acc;
    },
    {
      deposits: 0,
      withdraws: 0,
      total: 0,
    }
  );

  return (
    <Container>
      <Card image={incomeImg} title="Entradas" amount={summary.deposits} />
      <Card image={outcomeImg} title="Saídas" amount={summary.withdraws} />
      <Card
        image={totalImg}
        title="Total"
        amount={summary.total}
        className={summary.total >= 0 ? "background-green" : "background-red"}
      />
    </Container>
  );
}
