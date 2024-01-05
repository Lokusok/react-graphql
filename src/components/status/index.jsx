import PropTypes from 'prop-types';

function Status({ children, loading }) {
  return (
    <div style={{ opacity: loading ? 0.5 : 1 }}>
      {children}
    </div>
  );
}

Status.propTypes = {
  children: PropTypes.node,
  loading: PropTypes.bool,
};

export default Status;
