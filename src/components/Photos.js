import React from 'react';

const Photos = ({id, secret, server, alt}) => (
  <li>
    <img src={`https://live.staticflickr.com/${server}/${id}_${secret}.jpg`} alt={alt} />
  </li>
);

export default Photos;

