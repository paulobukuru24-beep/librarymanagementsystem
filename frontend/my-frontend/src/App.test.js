import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('renders the registered-user login screen', () => {
  render(<App />);

  expect(screen.getByRole('heading', { name: /ingia mfumoni|login/i })).toBeInTheDocument();
  expect(screen.getByLabelText(/jina la mtumiaji|full name/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/namba ya usajili|registration number/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/id ya mtumiaji|user id/i)).toBeInTheDocument();
});

test('rejects unregistered users from borrowing a book', () => {
  render(<App />);

  fireEvent.change(screen.getByLabelText(/jina la mtumiaji|full name/i), {
    target: { value: 'Musa Juma' }
  });
  fireEvent.change(screen.getByLabelText(/namba ya usajili|registration number/i), {
    target: { value: 'REG-404' }
  });
  fireEvent.change(screen.getByLabelText(/id ya mtumiaji|user id/i), {
    target: { value: 'U-404' }
  });
  fireEvent.click(screen.getByRole('button', { name: /ingia/i }));

  expect(screen.getByText(/user siyo aliyesajiliwa|hatusajiliwi|not registered/i)).toBeInTheDocument();
});
