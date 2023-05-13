import { Bank1Adapter } from '../adapters/bank1-adapter'
import { Bank2Adapter } from '../adapters/bank2_adapter'
import { BankController } from './bank-controller'
import { Bank1AccountSource, Bank2AccountSource } from '../mocks'

describe('BankController', () => {
  let bankController: BankController
  let log: jest.SpyInstance

  beforeEach(() => {
    const bank1Adapter = new Bank1Adapter(new Bank1AccountSource())
    const bank2Adapter = new Bank2Adapter(new Bank2AccountSource())

    bankController = new BankController(bank1Adapter, bank2Adapter)

    log = jest.spyOn(console, 'info')
  })

  afterEach(() => {
    log.mockRestore()
  })

  describe('printBalances', () => {
    it('should print  account balances', () => {
      bankController.printBalances()

      expect(log).toHaveBeenNthCalledWith(1, 'Account balances:')
      expect(log).toHaveBeenNthCalledWith(2, 'Bank 1: $215.50')
      expect(log).toHaveBeenNthCalledWith(3, 'Bank 2: $512.50')
    })
  })

  describe('printTransactions', () => {
    it('should print account transactions', () => {
      bankController.printTransactions()

      expect(log).toHaveBeenNthCalledWith(1, 'Account transactions:')
      expect(log).toHaveBeenNthCalledWith(2, 'Bank 1:')
      expect(log).toHaveBeenNthCalledWith(3, '  Check deposit 100 credit')
      expect(log).toHaveBeenNthCalledWith(4, '  Debit card purchase 25.5 debit')
      expect(log).toHaveBeenNthCalledWith(5, '  Rent payment 225 debit')
      expect(log).toHaveBeenNthCalledWith(6, 'Bank 2:')
      expect(log).toHaveBeenNthCalledWith(7, '  Amazon.com 125 debit')
    })
  })
})
