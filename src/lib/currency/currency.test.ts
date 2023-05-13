import { formatCurrency } from './format-currency'

describe('formatCurrency', () => {
  it('should format the currency correctly', () => {
    const amount = 1000
    const currency = 'USD'
    const formatted = formatCurrency(amount, currency)

    expect(formatted).toBe('$1,000.00')
  })
})
