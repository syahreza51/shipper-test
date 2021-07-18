import { render, screen } from '@testing-library/react'
import PageHeader from '@/components/PageHeader'
import Button from '@/components/Button'

test("alert render data correctly", () => {
  const title = 'driver'
  const desc = 'list driver'
  render(
    <PageHeader title={title} description={desc}>
      <Button type="button">submit</Button>
    </PageHeader>
  )

  expect(screen.queryByText(title)).toBeTruthy()
  expect(screen.queryByText(desc)).toBeTruthy()
  expect(screen.getByTestId('button')).toHaveAttribute('type', 'button');
});
