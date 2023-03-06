import React from 'react'
import axios from 'axios';

const Testing = () => {
    axios.get('https://dev-pricelist-api.websodev.com/api/price-list')
  .then(response => {
    console.log(response.data.data); // log the retrieved data
  })
  .catch(error => {
    console.error(error); // log any errors
  });
  return (
    <div>
        
    </div>
  )
}

export default Testing