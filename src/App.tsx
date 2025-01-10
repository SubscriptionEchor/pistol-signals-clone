import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import { UserProvider } from './lib/context/user';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div 
      className="min-h-screen relative bg-black"
      style={{
        backgroundImage: 'url(/assets/images/hero-bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="relative z-10">
        <UserProvider>
          <RouterProvider router={router} />
          <Toaster
            position="top-right"
            toastOptions={{
              style: {
                background: '#333',
                color: '#fff',
              },
            }}
          />
        </UserProvider>
      </div>
    </div>
  );
}

export default App;