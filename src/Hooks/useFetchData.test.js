import {renderHook, render, waitFor, screen} from '@testing-library/react';
import axios from 'axios';
import useFetchData from 'Hooks/useFetchData';
import React from 'react';


it('test fetch', async () => {

  const props = {endpoint: 'items'};
  const {result} = await renderHook(() => useFetchData(props));
  console.log(result.current);

  expect(result).toBeTruthy();
});

it('async axios', async() => {
  const result = await axios.get('items', {baseURL: 'https://api.guildwars2.com/v2/'});
  console.log(result);
  expect(result).toBeTruthy();
});

it('render  hook', async () => {
  render(React.createElement(() => {

    const {data, loading} = useFetchData({endpoint: 'items'});

    return <div>
      <div data-testid="loading">{loading && 'Loading'}</div>
      <div data-testid="data">{data}</div>
    </div>
  }));

  console.log(screen.getByTestId('data'));
  expect(screen.getByTestId('data')).toBeVisible();
});