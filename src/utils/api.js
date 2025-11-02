const BASE_URL = 'http://localhost:8000'; // Установите ваш базовый URL

export async function convert(amount) {
    const res = await fetch(`${BASE_URL}/utils/convert?amount=${amount}`);
    if (!res.ok) throw new Error("Ошибка при получении курса USDT");
    const data = await res.json();
    return data.converted; // Только число (USDT)
}

export async function createPayment(paymentData) {
    const response = await fetch(`${BASE_URL}/payments/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(paymentData),
    });

    if (!response.ok) {
        throw new Error("Ошибка при создании платежа");
    }

    const data = await response.json();
    return data;  // Возвращает объект Payment (или данные, которые вернет ваш сервер)
}

export async function getPayment(productId, currency) {
    const response = await fetch(`${BASE_URL}/payment?product_id=${productId}&currency=${currency}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (!response.ok) {
        throw new Error("Ошибка при получении информации о платеже");
    }

    const data = await response.json();
    return data;  // Возвращает объект PaymentRead
}