import { formatCurrency } from '../lib/currency'
import { Bank2AccountSource } from '../mocks/bank2'
import { IAccountSource, IAccountTransaction } from '../types'

export class Bank2Adapter implements IAccountSource {
  constructor(private accountSource: Bank2AccountSource) {}

  public getAccountBalance(accountId: number): string {
    const accountBalance = this.accountSource.getBalance(accountId)

    return formatCurrency(accountBalance.balance, accountBalance.currency)
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
