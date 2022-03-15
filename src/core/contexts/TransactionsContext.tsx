import { createContext } from "react";
import { TransactionInput } from "../models/transactionInput";
import { Transaction } from "../models/transactions";

interface TransactionsContextData {
  transactions: Transaction[];
  deleteTransaction: (id: number) => Promise<void>;
  createTransaction: (transaction: TransactionInput) => Promise<void>;
}

export const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
);
