import { print } from '../lib/print'
import { IAccountSource } from '../types'

export class BankController {
  constructor(
    private bank1Adapter: IAccountSource,
    private bank2Adapter: IAccountSource,
  ) {}

  public printBalances() {
    print('Account balances:')
    const bank1AccountId = 123
    const bank2AccountId = 456

    const bank1Balance = this.bank1Adapter.getAccountBalance(bank1AccountId)
    const bank2Balance = this.bank2Adapter.getAccountBalance(bank2AccountId)

    const bank1BalanceString = `Bank 1: ${bank1Balance}`
    const bank2BalanceString = `Bank 2: ${bank2Balance}`

    print(bank1BalanceString)
    print(bank2BalanceString)
  }

  public printTransactions() {
    print('Account transactions:')

    const fromDate = new Date('2023-05-01')
    const toDate = new Date('2023-05-31')

    const bank1Transactions = this.bank1Adapter.getTransactions(
      123,
      fromDate,
      toDate,
    )
    print('Bank 1:')
    bank1Transactions.forEach((t) => print(`  ${t.text} ${t.amount} ${t.type}`))

    const bank2Transactions = this.bank2Adapter.getTransactions(
      456,
      fromDate,
      toDate,
    )
    print('Bank 2:')
    bank2Transactions.forEach((t) => print(`  ${t.text} ${t.amount} ${t.type}`))
  }
}
