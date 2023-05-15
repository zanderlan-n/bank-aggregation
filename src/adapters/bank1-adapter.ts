import { Bank1AccountSource } from '../integration/bank1/account-source'
import { Bank1Transaction } from '../integration/bank1/transaction'
import { IAccountSource, IAccountTransaction } from '../types'

export class Bank1Adapter implements IAccountSource {
  constructor(private accountSource: Bank1AccountSource) {}

  public getAccountCurrency(accountId: number): string {
    return this.accountSource.getAccountCurrency(accountId)
  }
  public getAccountBalance(accountId: number): number {
    const balance = this.accountSource.getAccountBalance(accountId)

    return balance
  }

  public getTransactions(
    accountId: number,
    fromDate: Date,
    toDate: Date,
  ): IAccountTransaction[] {
    const transactions = this.accountSource.getTransactions(
      accountId,
      fromDate,
      toDate,
    )

    return transactions.map((t) => ({
      amount: t.getAmount(),
      text: t.getText(),
      type: t.getType() === Bank1Transaction.TYPE_CREDIT ? 'credit' : 'debit',
    }))
  }
}
