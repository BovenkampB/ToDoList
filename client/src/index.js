import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/js/App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Calendar from './components/js/CalendarPage';
import Kennisbank from './components/js/KennisbankPage';
import DroneSubjectPage from './components/js/DroneSubjectPage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="calendar" element={<Calendar />} />
        <Route path="kennis" element={<Kennisbank />} />
        <Route path="drone" element={<DroneSubjectPage />} />
        <Route path="3dPrinter" element={<Kennisbank />} />
        <Route path="frontend" element={<Kennisbank />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
