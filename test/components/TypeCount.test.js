import { mount } from '@vue/test-utils'
import typeCountComponent from './../../src/js/components/TypeCount'

describe('TypeCountComponent', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(typeCountComponent)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  test('vue component name', () => {
    const wrapper = mount(typeCountComponent)
    expect(wrapper.name()).toEqual('typeCount')
  })

  test('has input element', () => {
    const wrapper = mount(typeCountComponent)
    const input = wrapper.contains('input')
    expect(input).toBeTruthy()
  })

  test('count display', () => {
    const wrapper = mount(typeCountComponent)
    const input = wrapper.find('input')
    input.element.value = 'abc'
    input.trigger('input')

    const count = wrapper.find('.count')
    expect(count.text()).toEqual('3文字')
  })
})
