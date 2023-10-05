import React from 'react';
import { render, waitFor } from '@testing-library/react';
import DisplayQuotes from '../../components/DisplayingQuotes';

jest.mock('node-fetch', () => ({
  __esModule: true,
  default: () => ({
    ok: true,
    json: () => Promise.resolve([{ quote: 'Remember this, that very little is needed to make a happy life.' }]),
  }),
}));

test('DisplayQuotes component matches snapshot', async () => {
  const { container } = render(<DisplayQuotes />);
  await waitFor(() => expect(container).toMatchSnapshot());
});
