class Bank2AccountTransaction {
  amount: number
  type: 'credit' | 'debit'
  text: string

  constructor(amount: number, type: 'credit' | 'debit', text: string) {
    this.amount = amount
    this.type = type
    this.text = text
  }

  getAmount() {
    return this.amount
  }

  getType() {
    return this.type
  }

  getText() {
    return this.text
  }
}

class Bank2AccountBalance {
  balance: number
  currency: string

  constructor(balance: number, currency: string) {
    this.balance = balance
    this.currency = currency
  }

  getBalance(): number {
    return this.balance
  }

  getCurrency(): string {
    return this.currency
  }
}

export class Bank2AccountSource {
  public getBalance(accountNum: number): Bank2AccountBalance {
    return new Bank2AccountBalance(512.5, 'USD')
  }

  public getTransactions(
    accountNum: number,
    fromDate: Date,
    toDate: Date,
  ): Bank2AccountTransaction[] {
    return [
      new Bank2AccountTransaction(125, 'debit', 'Amazon.com'),
      new Bank2AccountTransaction(500, 'debit', 'Car insurance'),
      new Bank2AccountTransaction(800, 'credit', 'Salary'),
    ]
  }
}
