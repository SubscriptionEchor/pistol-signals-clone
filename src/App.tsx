import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import { UserProvider } from './lib/context/user';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
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
  );
}

export default App;