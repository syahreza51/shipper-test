import { render, screen } from '@testing-library/react'
import Button from '@/components/Button'

test("button render data correctly", () => {
  const children = 'submit'
  render(<Button children={children} type="submit" />)

  expect(screen.queryByText(children)).toBeTruthy()
  expect(screen.getByTestId('button')).toHaveAttribute('type', 'submit')
});
