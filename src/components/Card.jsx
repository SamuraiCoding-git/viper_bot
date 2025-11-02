export function Card({ children, className = "" }) {
    return (
        <div className={`bg-yak-black/90 border-2 border-yak-gold rounded-2xl shadow-lg p-6 ${className}`}>
            {children}
        </div>
    );
}