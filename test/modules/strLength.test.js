import strLength from './../../src/js/modules/strLength'

describe('strLength module', () => {
  test('return string length', () => {
    const str = 'abc'
    expect(strLength(str)).toEqual(3)
  })

  test('surrogate pairs', () => {
    const str = '🍣🍣🍣🍣🍣'
    expect(strLength(str)).toEqual(5)
  })

  test('include surrogate pairs', () => {
    const str = '🍣食べたい！'
    expect(strLength(str)).toEqual(6)
  })
})