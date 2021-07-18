import { render, screen } from '@testing-library/react'
import Notif from '@/components/Notif'

test("alert render data correctly", () => {
  const message = 'failed to load'
  render(<Notif message={message} type="warning" />)

  expect(screen.queryByText(message)).toBeTruthy()
})
