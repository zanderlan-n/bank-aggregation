export interface IBank2Transaction {
  getAmount(): number
  getType(): Bank2TransactionType
  getText(): string
}

export class Bank2Transaction implements IBank2Transaction {
  private amount: number
  private type: Bank2TransactionType
  private text: string

  constructor(amount: number, type: Bank2TransactionType, text: string) {
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

export enum Bank2TransactionType {
  DEBIT = 'DEBIT',
  CREDIT = 'CREDIT',
}
