import {renderHook, waitFor} from '@testing-library/react';
import useFetchApi from 'Hooks/useFetchApi';
import React from 'react';

describe('GW2 API Hook', () => {
  it('test', async () => {
    // const {result, wait} = renderHook(() => useFetchApi({endpoint: 'items'}));
    const {result} = await renderHook(() => useFetchApi({endpoint: 'items'}));
    await waitFor(() => {
      console.log(result.current);
    });
    // expect(result.current).toBe('Lost');
  });
});