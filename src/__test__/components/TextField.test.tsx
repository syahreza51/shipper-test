import { render, screen } from '@testing-library/react'
import TextField from '@/components/TextField'

test("textfield render data correctly", () => {
  const placeholder = 'cari'
  render(<TextField placeholder={placeholder} />)

  expect(screen.getByTestId('text')).toHaveAttribute('placeholder', placeholder);
});
