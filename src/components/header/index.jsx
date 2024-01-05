import './style.css';
import PropTypes from 'prop-types';

function Header({ title, children }) {
  return (
    <header className="Header">
      <h1>{title}</h1>

      <div className="Header-children">
        {children}
      </div>
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Header;
