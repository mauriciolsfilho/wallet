import { Card } from "../Card";
import { Container } from "./styles";

import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";
import { useEffect, useState } from "react";
import { useTransaction } from "../../core/hooks/useTransactions";

interface SummaryValue {
  totals: number;
  deposits: number;
  withdraws: number;
}

/**
 * Componente {@link Summary}
 * @returns
 */
export function Summary() {
  const { transactions } = useTransaction();
  const [summaryValues, setSummaryValues] = useState<SummaryValue>({
    deposits: 0,
    withdraws: 0,
    totals: 0,
  });

  useEffect(() => {
    if (transactions.length > 0) {
      setSummaryValues({
        deposits:
          transactions
            .filter((transaction) => transaction.type === "deposit")
            .map((t) => t.amount)
            .reduce((prev, curr) => prev + curr) || 0,
        withdraws:
          transactions
            .filter((transaction) => transaction.type === "withdraw")
            .map((t) => t.amount)
            .reduce((prev, curr) => prev + curr) || 0,
        totals:
          transactions
            .map((t) => t.amount)
            .reduce((prev, curr) => prev + curr) || 0,
      });
    }
  }, [transactions]);
  return (
    <Container>
      <Card
        image={incomeImg}
        title="Entradas"
        amount={summaryValues.deposits}
      />
      <Card
        image={outcomeImg}
        title="Saídas"
        amount={summaryValues.withdraws}
      />
      <Card
        image={totalImg}
        title="Total"
        amount={summaryValues.totals}
        className={
          summaryValues.totals > 0 ? "background-green" : "background-red"
        }
      />
    </Container>
  );
}
