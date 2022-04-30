
import React from 'react';
import {fireEvent, render, screen, waitFor} from '@testing-library/react';
import Header from './index';

it('menus change when they are clicked', async () => {

  render(<Header />);

  expect(screen.getByText('Guild Wars 2 Stuff')).toBeVisible();

  fireEvent.click(screen.getByRole('link', {name: 'API'}));

  await waitFor(() =>
      expect(screen.getByRole('link', {name: 'Items'})).toBeVisible()
  );
  await waitFor(() =>
      expect(screen.getByRole('link', {name: 'Accounts'})).toBeVisible()
  );

});