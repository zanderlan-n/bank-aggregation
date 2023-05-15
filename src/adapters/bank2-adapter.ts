import { Bank2AccountSource } from '../integration/bank2/account-source'
import { IAccountSource, IAccountTransaction } from '../types'

export class Bank2Adapter implements IAccountSource {
  constructor(private accountSource: Bank2AccountSource) {}

  public getAccountCurrency(accountId: number): string {
    const balance = this.accountSource.getBalance(accountId)
    return balance.getCurrency()
  }
  public getAccountBalance(accountId: number): number {
    const accountBalance = this.accountSource.getBalance(accountId)

    return accountBalance.getBalance()
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
      type: t.getType() === 'CREDIT' ? 'credit' : 'debit',
    }))
  }
}
