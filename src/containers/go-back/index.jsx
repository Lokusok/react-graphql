import { useNavigate, useLocation } from 'react-router-dom';

function GoBack() {
  const navigate = useNavigate();
  const location = useLocation();

  const callbacks = {
    click: () => {
      navigate(location?.state?.back ? -1 : '/');
    },
  };

  return (
    <button onClick={callbacks.click}>
      Go back
    </button>
  );
}

export default GoBack;
