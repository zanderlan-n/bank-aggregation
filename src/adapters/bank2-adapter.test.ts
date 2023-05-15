import { Bank2AccountSource } from '../integration/bank2/account-source'
import { Bank2TransactionType } from '../integration/bank2/transaction'
import { Bank2Adapter } from './bank2_adapter'

const getMockBank2Transaction = (
  amount: number,
  type: Bank2TransactionType,
  text: string,
) => {
  return {
    getAmount: jest.fn(() => amount),
    getType: jest.fn(() => type),
    getText: jest.fn(() => text),
  }
}

const mockBank2AccountSource: Bank2AccountSource = {
  getBalance: (_accountId: number) => {
    return {
      getBalance: jest.fn(() => 512.5),
      getCurrency: jest.fn(() => 'USD'),
    }
  },
  getTransactions: jest.fn(
    (_accountId: number, _fromDate: Date, _toDate: Date) => [
      getMockBank2Transaction(125, Bank2TransactionType.DEBIT, 'Amazon.com'),
      getMockBank2Transaction(500, Bank2TransactionType.DEBIT, 'Car insurance'),
      getMockBank2Transaction(800, Bank2TransactionType.CREDIT, 'Salary'),
    ],
  ),
}

describe('Bank2Adapter', () => {
  let bank2Adapter: Bank2Adapter

  beforeEach(() => {
    bank2Adapter = new Bank2Adapter(mockBank2AccountSource)
  })

  describe('getAccountBalance', () => {
    it('should return the formatted account balance', () => {
      const balance = bank2Adapter.getAccountBalance(123)

      expect(balance).toBe(512.5)
    })
  })

  describe('getAccountCurrency', () => {
    it('should return the account currency', () => {
      const currency = bank2Adapter.getAccountCurrency(123)

      expect(currency).toBe('USD')
    })
  })

  describe('getTransactions', () => {
    it('should return the mapped transactions', () => {
      const fromDate = new Date('2023-05-01')
      const toDate = new Date('2023-05-31')

      const transactions = bank2Adapter.getTransactions(123, fromDate, toDate)

      expect(transactions).toEqual([
        { amount: 125, text: 'Amazon.com', type: 'debit' },
        { amount: 500, text: 'Car insurance', type: 'debit' },
        { amount: 800, text: 'Salary', type: 'credit' },
      ])
    })
  })
})
