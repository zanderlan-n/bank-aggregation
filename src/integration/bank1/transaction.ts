export interface IBank1Transaction {
  getAmount(): number
  getType(): number
  getText(): string
}

export class Bank1Transaction implements IBank1Transaction {
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
