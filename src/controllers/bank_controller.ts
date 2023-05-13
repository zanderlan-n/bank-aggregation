import { IAccountSource } from '../types'

export class BankController {
  constructor(
    private bank1Adapter: IAccountSource,
    private bank2Adapter: IAccountSource,
  ) {}

  public printBalances() {
    console.log('Account balances:')

    console.log(`Bank 1: ${this.bank1Adapter.getAccountBalance(123)}`)
    console.log(`Bank 2: ${this.bank2Adapter.getAccountBalance(456)}`)
  }

  public printTransactions() {
    console.log('Account transactions:')

    const fromDate = new Date('2023-05-01')
    const toDate = new Date('2023-05-31')

    const bank1Transactions = this.bank1Adapter.getTransactions(
      123,
      fromDate,
      toDate,
    )
    console.log('Bank 1:')
    bank1Transactions.forEach((t) =>
      console.log(`  ${t.text} ${t.amount} ${t.type}`),
    )

    const bank2Transactions = this.bank2Adapter.getTransactions(
      456,
      fromDate,
      toDate,
    )
    console.log('Bank 2:')
    bank2Transactions.forEach((t) =>
      console.log(`  ${t.text} ${t.amount} ${t.type}`),
    )
  }
}
