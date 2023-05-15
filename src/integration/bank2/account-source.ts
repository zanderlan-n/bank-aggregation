import { Bank2AccountBalance, IBank2AccountBalance } from './balance'
import {
  Bank2Transaction,
  Bank2TransactionType,
  IBank2Transaction,
} from './transaction'

export class Bank2AccountSource {
  public getBalance(_accountNum: number): IBank2AccountBalance {
    return new Bank2AccountBalance(512.5, 'USD')
  }

  public getTransactions(
    _accountNum: number,
    _fromDate: Date,
    _toDate: Date,
  ): IBank2Transaction[] {
    return [
      new Bank2Transaction(125, Bank2TransactionType.DEBIT, 'Amazon.com'),
      new Bank2Transaction(500, Bank2TransactionType.DEBIT, 'Car insurance'),
      new Bank2Transaction(800, Bank2TransactionType.CREDIT, 'Salary'),
    ]
  }
}
