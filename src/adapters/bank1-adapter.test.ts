import { Bank1AccountSource } from '../mocks'
import { Bank1Adapter } from './bank1-adapter'

describe('Bank1Adapter', () => {
  let bank1Adapter: Bank1Adapter
  let bank1AccountSource: Bank1AccountSource

  beforeEach(() => {
    bank1AccountSource = new Bank1AccountSource()
    bank1Adapter = new Bank1Adapter(bank1AccountSource)
  })

  describe('getAccountBalance', () => {
    it('should return the account balance', () => {
      const accountId = 123
      const expectedBalance = '$215.50'

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
        { amount: 25.5, text: 'Debit card purchase', type: 'debit' },
        { amount: 225, text: 'Rent payment', type: 'debit' },
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
