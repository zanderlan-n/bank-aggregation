import { Bank1Adapter } from './adapters/bank1-adapter'
import { Bank2Adapter } from './adapters/bank2_adapter'
import { BankController } from './controllers/bank-controller'
import { Bank1AccountSource, Bank2AccountSource } from './mocks'

console.info('Bank Aggregation')

const bank1Adapter = new Bank1Adapter(new Bank1AccountSource())
const bank2Adapter = new Bank2Adapter(new Bank2AccountSource())

const bankController = new BankController(bank1Adapter, bank2Adapter)

bankController.printBalances()
bankController.printTransactions()
