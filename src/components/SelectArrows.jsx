export function SelectArrows({ className = "" }) {
    return (
        <svg
            width="24"
            height="48"
            viewBox="0 0 24 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            {/* Верхний треугольник */}
            <polygon points="12,8 22,22 2,22" fill="#D6B36A"/>
            {/* Нижний треугольник */}
            <polygon points="12,40 22,26 2,26" fill="#D6B36A"/>
        </svg>
    );
}