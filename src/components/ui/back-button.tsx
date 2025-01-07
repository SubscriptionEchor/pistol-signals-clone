import { useNavigate } from 'react-router-dom';

export function BackButton() {
  const navigate = useNavigate();
  
  return (
    <button
      onClick={() => navigate('/')}
      className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors"
    >
      Back to home
    </button>
  );
}