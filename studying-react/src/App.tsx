import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';
import HomePage from './pages/Home';
import LoginPage from './pages/Login';
import NotFound from './pages/NotFound';
import RegisterPage from './pages/Register';
import Welcome from './pages/Welcome';

function App() {
    return (
        <React.StrictMode>
            <Router>
                <main className="container">
                    <Menu />
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/cadastro" element={<RegisterPage />} />
                        <Route path="/acesso" element={<LoginPage />} />
                        <Route path="/bemvindo" element={<Welcome />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </main>
            </Router>
        </React.StrictMode>
    );
}

export default App;
