import { Bank2AccountSource } from '../mocks/bank2'
import { IAccountSource } from '../types'
import { IAccountTransaction } from '../types'

export class Bank2Adapter implements IAccountSource {
  constructor(private accountSource: Bank2AccountSource) {}

  public getAccountBalance(accountId: number): number {
    const balance = this.accountSource.getBalance(accountId)
    return balance.getBalance()
  }

  public getAccountCurrency(accountId: number): string {
    const balance = this.accountSource.getBalance(accountId)
    return balance.getCurrency()
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
      amount: t.amount,
      text: t.text,
      type: t.type === 'CREDIT' ? 'credit' : 'debit',
    }))
  }
}
