import React from 'react';
import BookList from '../book-list/book-list';

const HomePage = () => {
  return (
    <BookList
      books={[
        {
          id: 1,
          title: 'Production-Ready Microservices',
          author: 'Susan J. Fowler'
        },
        { id: 2, title: 'Release It!', author: 'Michael T. Nygard' }
      ]}
    />
  );
};

export default HomePage;
