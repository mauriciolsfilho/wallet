import { ReactNode, useEffect, useState, useContext } from "react";
import { api } from "../../services/api";
import { TransactionsContext } from "../contexts/TransactionsContext";
import { TransactionInput } from "../models/transactionInput";
import { Transaction } from "../models/transactions";

interface TransactionsProviderProps {
  children: ReactNode;
}

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api
      .get("/transactions")
      .then((response) => {
        setTransactions(response.data.transactions);
      })
      .catch((e) => console.error(e));
  }, []);

  async function createTransaction(transaction: TransactionInput) {
    const response = await api.post("/transactions", {
      ...transaction,
      createdAt: new Date(),
    });
    if (response.status <= 201) {
      setTransactions((current) => {
        return [...current, response.data.transaction];
      });
    }
  }

  async function deleteTransaction(id: number) {
    const response = await api.delete(`/transactions/${id}`);
    if (response.status <= 201) {
      setTransactions(response.data.transactions);
    }
  }

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        deleteTransaction,
        createTransaction,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
}

/**
 * Custom hook for transactions
 * @returns
 */
export function useTransaction() {
  const context = useContext(TransactionsContext);

  return context;
}
