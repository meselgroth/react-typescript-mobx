import React from 'react';
import { render, screen } from '@testing-library/react';
import HomemadeTable from './HomemadeTable';

test('renders learn react link', () => {
  render(<HomemadeTable />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
