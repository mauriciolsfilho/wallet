import { Transaction } from "./transactions";

/**
 * @model {@link TransactionInput}
 */
export type TransactionInput = Omit<Transaction, "id" | "createdAt">;