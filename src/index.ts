import { Bank1Adapter } from './adapters/bank1-adapter'
import { Bank2Adapter } from './adapters/bank2-adapter'
import { BankController } from './controllers/bank-controller'
import { Bank1AccountSource } from './integration/bank1/account-source'
import { Bank2AccountSource } from './integration/bank2/account-source'
import { print } from './lib/print'

console.info('Bank Aggregation')

const bank1Source = new Bank1Adapter(new Bank1AccountSource())
const bank2Source = new Bank2Adapter(new Bank2AccountSource())

const bank1Controller = new BankController(bank1Source)
const bank2Controller = new BankController(bank2Source)

const accountId = 123
print('Bank 1')
bank1Controller.printBalances(accountId)
bank1Controller.printTransactions(accountId)

print('Bank 2')
bank2Controller.printBalances(accountId)
bank2Controller.printTransactions(accountId)
