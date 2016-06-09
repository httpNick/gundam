import React from 'react';

const CheckBoxList = ( { onChange, items } ) => (
  <ul>
    {
      items.map((x, index) =>
        <label key={index}>
          <input
            type="checkbox"
            checked={x.checked}
            onChange = {() => onChange(x)}
          /> {x.text}
        </label>
      )
    }
  </ul>
);

export default CheckBoxList;