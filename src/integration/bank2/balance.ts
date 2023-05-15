export interface IBank2AccountBalance {
  getBalance(): number
  getCurrency(): string
}

export class Bank2AccountBalance implements IBank2AccountBalance {
  private balance: number
  private currency: string

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
