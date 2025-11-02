import cardIcon from '/card.png';
import usdtIcon from '/usdt.png';
import dragonIcon from '/oldkey.png';
import { useNavigate } from "react-router-dom";

export default function Main() {
    const navigate = useNavigate();

    return (
        <div
            className="min-h-screen w-full bg-yak-bg bg-cover bg-center flex flex-col items-center justify-start relative font-montserrat">
            {/* Лого дракона */}
            <div
                className="w-44 h-44 mt-8 rounded-full border-4 border-[#96b1b3] bg-[#012219] shadow-lg flex items-center justify-center p-4">
                <img src={dragonIcon} alt="Dragon" className="max-w-full max-h-full object-contain px-2 py-2"/>
            </div>

            <div className="z-10 w-full px-4 mt-4 mb-10">
                <div
                    className="flex items-center justify-center p-4 rounded-xl bg-[#012219] border-2 border-[#96b1b3] shadow-lg transition-all hover:shadow-xl">
                    <h1 className="text-[#96b1b3] text-4xl md:text-5xl font-bold text-center font-serif tracking-wide py-2">
                        VIPER
                    </h1>
                </div>
            </div>

            {/* Заголовок */}

            {/* Кнопки */}
            <div className="flex flex-col gap-4 w-full px-4 max-w-md">
                {/* Банковская карта */}
                <button
                    className="button-glossy flex items-center gap-4 w-full py-5 px-4 rounded-2xl bg-[#012219] border-2 border-[#96b1b3] text-[#96b1b3] text-lg font-bold shadow transition"
                    onClick={() => navigate("/payment/card")}
                >
                    <img src={cardIcon} alt="Card" className="w-8 h-8"/>
                    <span className="flex text-center">Банковская карта</span>
                </button>
                <button
                    className="button-glossy flex items-center gap-4 w-full py-5 px-4 rounded-2xl bg-[#012219] border-2 border-[#96b1b3] text-[#96b1b3] text-lg font-bold shadow transition"
                    onClick={() => navigate("/payment/usdt")}
                >
                    <img src={usdtIcon} alt="USDT" className="w-8 h-8"/>
                    <span className="flex text-center">USDT (TRC-20)</span>
                </button>
                <button
                    className="button-glossy flex items-center gap-4 w-full py-5 px-4 rounded-2xl bg-[#012219] border-2 border-[#96b1b3] text-[#96b1b3] text-lg font-bold shadow transition"
                    onClick={() => navigate("/payment/iban")}
                >
                    <span className="flex text-center">Доллар / Евро</span>
                </button>
                {/* USDT */}
            </div>
        </div>
    );
}