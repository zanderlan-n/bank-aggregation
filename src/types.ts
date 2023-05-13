export interface IAccountSource {
  getAccountBalance(accountId: number): number
  getAccountCurrency(accountId: number): string
  getTransactions(
    accountId: number,
    fromDate: Date,
    toDate: Date,
  ): IAccountTransaction[]
}

export interface IAccountTransaction {
  amount: number
  text: string
  type: TRANSACTION_TYPE
}

export type TRANSACTION_TYPE = 'credit' | 'debit'
