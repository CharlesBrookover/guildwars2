// import axios from 'axios';
// const axios = require('axios');
//
// axios.get('/items', {baseURL: 'https://api.guildwars2.com/v2/'})
// .then(response => {
//   console.log(response.data);
//
//   console.log(response.headers);
//
//   const regex = new RegExp(/^x-(result|page)-/);
//   const xheaders = Object.fromEntries(Object.entries(response.headers).filter(([key]) => regex.test(key)));
//
//   console.log(xheaders);
// });

import useFetchData from 'Hooks/useFetchData';
import React from 'react';
const fetchTest = () => {

  const {data, loading} = useFetchData({endpoint: 'items'});

  return <div>
    <div>{loading && 'Loading'}</div>
    <div>{data}</div>
  </div>
}

const out = fetchTest();
console.log(out);