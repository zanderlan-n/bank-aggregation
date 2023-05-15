import { formatCurrency } from '../lib/currency'
import { print } from '../lib/print'
import { IAccountSource } from '../types'

export class BankController {
  constructor(private source: IAccountSource) {}

  public printBalances() {
    print('Account balances:')
    const accountId = 123

    const balance = this.source.getAccountBalance(accountId)
    const currency = this.source.getAccountCurrency(accountId)
    const formattedBalance = formatCurrency(balance, currency)

    print(formattedBalance)
  }

  public printTransactions() {
    print('Account transactions:')
    const accountId = 123

    const fromDate = new Date('2023-05-01')
    const toDate = new Date('2023-05-31')

    const bank1Transactions = this.source.getTransactions(
      accountId,
      fromDate,
      toDate,
    )
    const currency = this.source.getAccountCurrency(accountId)
    bank1Transactions.forEach((t) => {
      const formattedAmount = formatCurrency(t.amount, currency)

      print(`  ${t.text} - ${formattedAmount} - ${t.type}`)
    })
  }
}
