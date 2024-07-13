import React from 'react';
import ToggleSwitch from './components/ToggleSwitch';
import Header from './components/Header';
import Welcome from './pages/Welcome';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout';
import NoPage from './pages/NoPage';
import Question from './pages/Question';
import Results from './pages/Results';
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Welcome />} />
            <Route path="/question/:topic" element={<Question />} />
            <Route path='/results' element={<Results />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Analytics/>
      <SpeedInsights/>
    </>
  );
}

export default App;
