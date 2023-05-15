import { Bank1AccountSource } from '../integration/bank1/account-source'
import { Bank1Transaction } from '../integration/bank1/transaction'
import { Bank1Adapter } from './bank1-adapter'

const getMockBank1Transaction = (
  amount: number,
  type: number,
  text: string,
) => {
  return {
    getAmount: jest.fn(() => amount),
    getType: jest.fn(() => type),
    getText: jest.fn(() => text),
  }
}

const bank1AccountSource: Bank1AccountSource = {
  getAccountBalance: jest.fn((_accountId: number) => 215.5),
  getAccountCurrency: jest.fn((_accountId: number) => 'USD'),
  getTransactions: jest.fn(
    (_accountId: number, _fromDate: Date, _toDate: Date) => [
      getMockBank1Transaction(
        100,
        Bank1Transaction.TYPE_CREDIT,
        'Check deposit',
      ),
      getMockBank1Transaction(
        25.5,
        Bank1Transaction.TYPE_DEBIT,
        'Debit card purchase',
      ),
      getMockBank1Transaction(225, Bank1Transaction.TYPE_DEBIT, 'Rent payment'),
    ],
  ),
}

describe('Bank1Adapter', () => {
  let bank1Adapter: Bank1Adapter

  beforeEach(() => {
    bank1Adapter = new Bank1Adapter(bank1AccountSource)
  })

  describe('getAccountBalance', () => {
    it('should return the account balance', () => {
      const accountId = 123
      const expectedBalance = 215.5

      const accountBalance = bank1Adapter.getAccountBalance(accountId)

      expect(accountBalance).toBe(expectedBalance)
    })
  })

  describe('getAccountCurrency', () => {
    it('should return the account currency', () => {
      const accountId = 123
      const expectedCurrency = 'USD'

      const accountCurrency = bank1Adapter.getAccountCurrency(accountId)

      expect(accountCurrency).toBe(expectedCurrency)
    })
  })

  describe('getTransactions', () => {
    it('should return the account transactions', () => {
      const accountId = 123
      const fromDate = new Date('2023-05-01')
      const toDate = new Date('2023-05-31')
      const expectedTransactions = [
        { amount: 100, text: 'Check deposit', type: 'credit' },
        {
          amount: 25.5,
          text: 'Debit card purchase',
          type: 'debit',
        },
        {
          amount: 225,
          text: 'Rent payment',
          type: 'debit',
        },
      ]

      const transactions = bank1Adapter.getTransactions(
        accountId,
        fromDate,
        toDate,
      )

      expect(transactions).toEqual(expectedTransactions)
    })
  })
})
