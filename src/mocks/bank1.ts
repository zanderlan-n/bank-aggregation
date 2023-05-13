export class Bank1Transaction {
  public static TYPE_CREDIT = 1
  public static TYPE_DEBIT = 2

  private amount: number
  private type: number
  private text: string

  public constructor(amount: number, type: number, text: string) {
    this.amount = amount
    this.type = type
    this.text = text
  }

  public getAmount(): number {
    return this.amount
  }

  public getType(): number {
    return this.type
  }

  public getText(): string {
    return this.text
  }
}

export class Bank1AccountSource {
  getAccountBalance(accountId: number): number {
    return 215.5
  }
  getAccountCurrency(accountId: number): string {
    return 'USD'
  }

  getTransactions(
    accountId: number,
    fromDate: Date,
    toDate: Date,
  ): Bank1Transaction[] {
    return [
      new Bank1Transaction(100, Bank1Transaction.TYPE_CREDIT, 'Check deposit'),
      new Bank1Transaction(
        25.5,
        Bank1Transaction.TYPE_DEBIT,
        'Debit card purchase',
      ),
      new Bank1Transaction(225, Bank1Transaction.TYPE_DEBIT, 'Rent payment'),
    ]
  }
}
