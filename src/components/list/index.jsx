import './style.css';

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

function List({ elements, elementRender, keyProp }) {
  const [data, setData] = useState(elements);

  useEffect(() => {
    if (!elements) return;

    setData(elements);
  }, [elements]);

  if (!data) {
    return null;
  }

  return (
    <div className="list">
      {data.map((element) => (
        <React.Fragment key={element[keyProp]}>
          {elementRender(element)}
        </React.Fragment>
      ))}
    </div>
  );
}

List.propTypes = {
  elements: PropTypes.array,
  elementRender: PropTypes.func,
  keyProp: PropTypes.string,
};

export default List;
