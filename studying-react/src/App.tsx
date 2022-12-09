import React from 'react';
import Header from './components/Header';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';

function App() {
    return (
        <React.StrictMode>
            <Header />
            {/* <LoginPage /> */}
            <RegisterPage />
        </React.StrictMode>
    );
}

export default App;
