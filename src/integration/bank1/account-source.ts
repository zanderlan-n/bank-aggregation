import { Bank1Transaction, IBank1Transaction } from './transaction'

export class Bank1AccountSource {
  getAccountBalance(_accountId: number): number {
    return 215.5
  }
  getAccountCurrency(_accountId: number): string {
    return 'USD'
  }

  getTransactions(
    _accountId: number,
    _fromDate: Date,
    _toDate: Date,
  ): IBank1Transaction[] {
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
