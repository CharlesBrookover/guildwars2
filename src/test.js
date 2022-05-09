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

import React from 'react';
import useFetchSingle from 'src/Hooks/useFetchSingle';

const fetchTest = () => {

  const {data, loading} = useFetchSingle({endpoint: 'items'});

  return <div>
    <div>{loading && 'Loading'}</div>
    <div>{data}</div>
  </div>;
};

const out = fetchTest();
console.log(out);