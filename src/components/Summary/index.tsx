import { Card } from "../Card";
import { Container } from "./styles";

import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";
import { useContext, useEffect, useState } from "react";
import { TransactionsContext } from "../../contexts/TransactionsContext";

interface SummaryValue {
  total: number;
  deposit: number;
  withdraw: number;
}

/**
 * Componente {@link Summary}
 * @returns
 */
export function Summary() {
  const { transactions } = useContext(TransactionsContext);
  const [summaryValues, setSummaryValues] = useState<SummaryValue>({
    deposit: 0,
    withdraw: 0,
    total: 0,
  });

  useEffect(() => {
    if (transactions.length > 0) {
      setSummaryValues({
        deposit:
          transactions
            .filter((transaction) => transaction.type === "deposit")
            .map((t) => t.amount)
            .reduce((prev, curr) => prev + curr) || 0,
        withdraw:
          transactions
            .filter((transaction) => transaction.type === "withdraw")
            .map((t) => t.amount)
            .reduce((prev, curr) => prev + curr) || 0,
        total:
          transactions
            .map((t) => t.amount)
            .reduce((prev, curr) => prev + curr) || 0,
      });
    }
  }, [transactions]);
  return (
    <Container>
      <Card image={incomeImg} title="Entradas" amount={summaryValues.deposit} />
      <Card image={outcomeImg} title="Saídas" amount={summaryValues.withdraw} />
      <Card
        image={totalImg}
        title="Total"
        amount={summaryValues.total}
        className={
          summaryValues.total > 0 ? "background-green" : "background-red"
        }
      />
    </Container>
  );
}
