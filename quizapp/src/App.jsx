import React from 'react';
import ToggleSwitch from './components/ToggleSwitch';
import Header from './components/Header';
import Welcome from './pages/Welcome';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout';
import NoPage from './pages/NoPage';
import Question from './pages/Question';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Welcome />} />
            <Route path='/question' element={<Question />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <Welcome /> */}
    </>
  );
}

export default App;
