import { useState } from "react";
import copyIcon from '/copy.png'; // Icon pack of your choice
import dragonIcon from "/oldkey.png";  // Import the Spinner component

const USDT_ADDRESS = "TFozkabXZ6YXs9BdMKq64E2Z5DwPfL95qj"; // Example USDT Address

export default function PaymentUsdt() {
    const sum = 35;
    const [error, setError] = useState("");

    const handleCopy = () => {
        navigator.clipboard.writeText(USDT_ADDRESS);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        window.Telegram.WebApp.openTelegramLink('https://t.me/m/MqpAmtkoODZi');
    };

    return (
        <>
            <div
                className="min-h-screen w-full bg-yak-bg bg-cover bg-center flex flex-col items-center justify-start relative font-montserrat p-6">
                <div className="w-full max-w-md mb-3 py-2 rounded-2xl border-2 border-[#96b1b3] bg-[#012219] transition-all">
                    <h1 className="text-[#96b1b3] text-lg font-bold text-center mt-2 mb-1 tracking-wide">
                        ОПЛАТА USDT (TRC-20)
                    </h1>
                    <div className="text-[#96b1b3] text-sm text-center mb-2">
                        Отправьте <span className="font-bold">{sum} USDT</span> на адрес:
                    </div>
                </div>

                {/* Address with copy icon */}
                <div className="relative w-full max-w-md mb-4">
                    <input
                        className="w-full py-3 px-4 pr-12 rounded-2xl border-2 border-[#96b1b3] bg-[#012219] text-[#96b1b3] font-mono text-base outline-none select-all"
                        value={USDT_ADDRESS}
                        readOnly
                    />
                    <button
                        type="button"
                        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-lg w-8 h-8 flex items-center justify-center transition"
                        onClick={handleCopy}
                        aria-label="Скопировать адрес"
                    >
                        <img src={copyIcon} alt="Copy" className="w-8 h-12"/>
                    </button>
                </div>

                {/* Email Input */}
                {/* Error Message */}
                {error && (
                    <div className="text-red-500 text-center mb-4">{error}</div>
                )}

                {/*<div className="flex flex-1 mb-12 items-center justify-center">*/}
                {/*    <img*/}
                {/*        src={dragonIcon}*/}
                {/*        alt="Логотип: дракон"*/}
                {/*        className="w-64 h-64 object-contain"*/}
                {/*    />*/}
                {/*</div>*/}

                <div
                    className="w-64 h-64 rounded-full border-4 border-[#96b1b3] bg-[#012219] shadow-lg flex items-center justify-center p-4">
                    <img src={dragonIcon} alt="Dragon" className="max-w-full max-h-full object-contain"/>
                </div>

                <div className="flex-1"/>

                {/* Submit Button */}
                <button
                    type="submit"
                    onClick={handleSubmit}
                    className="w-full max-w-md mt-8 mb-6 py-4 rounded-2xl border-2 border-[#96b1b3] bg-[#012219] text-[#96b1b3] text-2xl font-bold transition-all"
                >
                    Оплатил
                </button>
            </div>
        </>
    );
}
