import { mount } from '@vue/test-utils'
import SumComponent from './../../src/js/components/Sum'

describe('SumComponent', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(SumComponent)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
