import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Laboratory from './components/Laboratory';



const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="laboratory_service" element={<Laboratory />} />

         
        </Route>
        {/* <Route path="/login" element={<Login setAuthenticated={setAuthenticated} />} />
        <Route path="/bill" element={<Header />} /> */}

        {/* <Route path="*" element={<ProtectedRoutes authenticated={authenticated} setAuthenticated={setAuthenticated} />} /> */}
      </Routes>
    </Router>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)



