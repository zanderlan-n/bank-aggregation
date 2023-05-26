import { IAccountSource } from '../types'
import { BankController } from './bank-controller'

describe('BankController', () => {
  let bankController: BankController
  let log: jest.SpyInstance
  const mockId = 1234
  const mockSource: IAccountSource = {
    getAccountBalance: jest.fn().mockReturnValue(215.5),
    getAccountCurrency: jest.fn().mockReturnValue('USD'),
    getTransactions: jest.fn().mockReturnValue([
      {
        amount: 100,
        type: 'debit',
        text: 'Check deposit',
      },
      {
        amount: 25.5,
        type: 'debit',
        text: 'Debit card purchase',
      },
      {
        amount: 225,
        type: 'credit',
        text: 'Rent payment',
      },
    ]),
  }

  beforeEach(() => {
    log = jest.spyOn(console, 'info')
    bankController = new BankController(mockSource)
  })

  afterEach(() => {
    log.mockRestore()
  })

  describe('printBalances', () => {
    it('should print  account balances', () => {
      bankController.printBalances(mockId)

      expect(log).toHaveBeenNthCalledWith(1, 'Account balances:')
      expect(log).toHaveBeenNthCalledWith(2, '$215.50')
    })
  })

  describe('printTransactions', () => {
    it('should print account transactions', () => {
      bankController.printTransactions(mockId)

      expect(log).toHaveBeenNthCalledWith(1, 'Account transactions:')
      expect(log).toHaveBeenNthCalledWith(
        2,
        '  Check deposit - $100.00 - debit',
      )
      expect(log).toHaveBeenNthCalledWith(
        3,
        '  Debit card purchase - $25.50 - debit',
      )
      expect(log).toHaveBeenNthCalledWith(
        4,
        '  Rent payment - $225.00 - credit',
      )
    })
  })
})
