import { Bank1AccountSource } from '../mocks'
import { Bank1Transaction } from '../mocks/bank1'
import { IAccountSource } from '../types'
import { IAccountTransaction } from '../types'

export class Bank1Adapter implements IAccountSource {
  constructor(private accountSource: Bank1AccountSource) {}

  public getAccountBalance(accountId: number): number {
    return this.accountSource.getAccountBalance(accountId)
  }

  public getAccountCurrency(accountId: number): string {
    return this.accountSource.getAccountCurrency(accountId)
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
