import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Input from '../index'

describe('<Input />', () => {
  test('render', () => {
    const { container } = render(<Input id="testing-input" label="Testing" />)

    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="sc-bdvvtL eLFczo"
        >
          <label
            class="sc-gsDKAQ fytcfN"
            for="testing-input"
          >
            Testing
          </label>
          <input
            class="sc-dkPtRN bNswzL"
            id="testing-input"
            type="text"
            value=""
          />
        </div>
      </div>
    `)
  })

  test('render input component', () => {
    render(<Input id="testing-input" label="Testing" />)

    const inputEl = screen.getAllByLabelText('Testing')
    expect(inputEl[0]).toBeInTheDocument()
  })

  test('input show correct typed text', () => {
    render(<Input id="testing-input" label="Testing" />)

    const inputEl = screen.getAllByLabelText('Testing')
    userEvent.type(inputEl[0], 'testing value')

    expect(inputEl[0]).toHaveValue('testing value')
  })
})
