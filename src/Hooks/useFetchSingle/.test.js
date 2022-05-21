import {renderHook} from '@testing-library/react';
import React from 'react';
import {act} from 'react-test-renderer';
import {defaultAxiosConfig} from '../../Utils/defaults';
import useFetchSingle from './hook';

describe('Test Fetch Single Record Hook', () => {
  it('Test Fetch Truthy', async () => {
    const testProps = {endpoint: 'items', id: 28445, config: defaultAxiosConfig};
    let renderResult = {};

    await act(() => {
      renderResult = renderHook((props) => useFetchSingle(props), {initialProps: testProps});
    });

    expect(renderResult.result.current.loading).toBe(true);
    console.log(renderResult.result.current);
    
  });
});