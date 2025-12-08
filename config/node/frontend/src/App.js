import './styles/style.scss';
import { Suspense } from 'react';
import { RouterProvider } from "react-router-dom";
import { CircularProgress } from '@mui/material';
import routes from "./routes/Router";


function App() {
  return (
    <div className="app">
      <Suspense 
      fallback={<CircularProgress  color = "red" />}>
        <RouterProvider router={routes} />
      </Suspense>
      

    </div>
  );
}

export default App;