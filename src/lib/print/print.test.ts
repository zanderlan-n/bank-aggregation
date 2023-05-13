import { print } from '.'

describe('print', () => {
  let logSpy: jest.SpyInstance

  beforeEach(() => {
    logSpy = jest.spyOn(console, 'info').mockImplementation()
  })

  afterEach(() => {
    logSpy.mockRestore()
  })

  it('should log the provided text', () => {
    const text = 'This is a test message'
    print(text)

    expect(logSpy).toHaveBeenCalledWith(text)
  })
})
