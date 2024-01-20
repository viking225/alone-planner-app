import { beforeEach, describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import Register from '../Register.vue'

describe('Register Component', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(Register)
  })

  it('Should render without crashing', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('Should init with empty input field', () => {
    const input = wrapper.find('input[type="email"]')
    expect(input.exists()).toBe(true)
    expect(input.html()).toContain('Type your email here')
    expect(wrapper.vm.email).toBe(null)
  })

  it('Should emit event on submit button with value typed', async () => {
    const submit = wrapper.find('button[type=submit]')
    const input = wrapper.find('input[type="email"]')

    expect(submit.exists()).toBe(true)
    expect(input.exists()).toBe(true)

    input.setValue('kevin@gmail.com')

    await submit.trigger('click')
    expect(wrapper.emitted()).toHaveProperty('submit')
    expect(wrapper.emitted('submit')[0]).toEqual(['kevin@gmail.com'])
  })
})
