import {renderHook} from '@testing-library/react';
import React from 'react';
import {act} from 'react-test-renderer';
import useFetchSingle from './hook';


jest.mock('../useApiData', () => {
  return jest.fn(() => ({
    data: {
      "name": "Mighty Black Earth Trident",
      "description": "",
      "type": "Weapon",
      "level": 1,
      "rarity": "Fine",
      "vendor_value": 9,
      "default_skin": 4712,
      "game_types": [
        "Activity",
        "Wvw",
        "Dungeon",
        "Pve"
      ],
      "flags": [],
      "restrictions": [],
      "id": 28446,
      "chat_link": "[&AgEebwAA]",
      "icon": "https://render.guildwars2.com/file/B8F4F953BC20F7A7FE9FF7459FD5534F0608730F/574969.png",
      "details": {
        "type": "Trident",
        "damage_type": "Physical",
        "min_power": 139,
        "max_power": 153,
        "defense": 0,
        "infusion_slots": [],
        "attribute_adjustment": 25.344,
        "infix_upgrade": {
          "id": 137,
          "attributes": [
            {
              "attribute": "Power",
              "modifier": 9
            }
          ]
        },
        "secondary_suffix_item_id": ""
      }
    },
    loading: false,
    error: '',
    message: ''
  }))
})

describe('Test Fetch Single Record Hook', () => {

  it('Test Fetch Truthy', async () => {
    const testProps = {endpoint: 'items', id: 28445};

    let renderResult = {};

    await act(() => {
      renderResult = renderHook((props) => useFetchSingle(props), {initialProps: testProps});
    });

    expect(renderResult.result.current.loading).toBe(true);
    console.log(renderResult.result.current);

  });
});