import React from 'react';

const Reviews = ({ reviews }) => (
  <ul>
    {reviews.map(({ author, content, id }) => (
      <li key={id}>
        <p>Author: {author}</p>
        <p>{content}</p>
      </li>
    ))}
  </ul>
);

export default Reviews;
