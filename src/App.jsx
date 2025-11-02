import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './pages/Main.jsx';
import PaymentCard from './pages/PaymentCard.jsx';
import PaymentUsdt from './pages/PaymentUsdt.jsx';
import PaymentIban from './pages/PaymentIban.jsx';
import {useEffect} from "react";

function App() {
    useEffect(() => {
        if (window.Telegram && window.Telegram.WebApp) {
            window.Telegram.WebApp.expand()
        }
    }, [])

    return (
        <div className="bg-yak-bg bg-cover bg-center min-h-screen">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/payment/card" element={<PaymentCard />} />
                    <Route path="/payment/usdt" element={<PaymentUsdt />} />
                    <Route path="/payment/iban" element={<PaymentIban />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}
export default App;