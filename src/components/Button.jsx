export function Button({ children, className = "", ...props }) {
    return (
        <button
            className={`w-full rounded-xl px-6 py-3 bg-yak-gold text-yak-bordeaux font-semibold text-lg shadow hover:bg-[#e9c470] transition ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}