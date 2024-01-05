import './style.css';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import cn from 'classnames';

function Pagination({ currentPage, totalPages }) {
  const renders = {
    items: new Array(totalPages).fill(null).map((_, index) => (
      <Link
        className={cn('Pagination-item', { 'Pagination-item_active' : index+1 == currentPage })}
        key={index}
        to={`/posts/${index+1}`}
      >{index + 1}</Link>
    )),
  };

  if (renders.items.length <= 1) {
    return null;
  }

  return (
    <div className="Pagination">
      {renders.items}
    </div>
  );
}

Pagination.propTypes = {
  currentPage: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  totalPages: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Pagination;
