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
})
