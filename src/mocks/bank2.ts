enum TransactionType {
  DEBIT = 'DEBIT',
  CREDIT = 'CREDIT',
}

class Bank2AccountTransaction {
  amount: number
  type: TransactionType
  text: string

  constructor(amount: number, type: TransactionType, text: string) {
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
  public getBalance(_accountNum: number): Bank2AccountBalance {
    return new Bank2AccountBalance(512.5, 'USD')
  }

  public getTransactions(
    _accountNum: number,
    _fromDate: Date,
    _toDate: Date,
  ): Bank2AccountTransaction[] {
    return [
      new Bank2AccountTransaction(125, TransactionType.DEBIT, 'Amazon.com'),
      new Bank2AccountTransaction(500, TransactionType.DEBIT, 'Car insurance'),
      new Bank2AccountTransaction(800, TransactionType.CREDIT, 'Salary'),
    ]
  }
}
