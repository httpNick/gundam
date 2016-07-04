import React from 'react';

const GundamList = ( { onChange, items } ) => {
  if (!items.gundamRequests.isFetching) {
    return (
      <section>
        <h1>{items.gundamRequests.items.text}</h1>
        <ul>
        {
          items.gundamRequests.items.children.map((x, index) =>
            <li key={index+x.text}>
              <h2>{x.text}</h2>
              <ul>
                {
                  x.children.map((z, index) =>
                    <li key={index+z.text}>
                      <label>{z.text}</label>
                    </li>
                  )
                }
              </ul>
            </li>
          )
        }
        </ul>
      </section>
    );
  }
  return (
    <label>Loading...</label>
  );
};

export default GundamList;
