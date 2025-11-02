export function Select({ options, value, onChange, className = "" }) {
    return (
        <select
            value={value}
            onChange={onChange}
            className={`w-full bg-yak-black border-2 border-yak-gold rounded-xl px-4 py-3 text-yak-ivory appearance-none focus:outline-none focus:ring-2 focus:ring-yak-gold/40 ${className}`}
            style={{
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 0.75rem center',
                backgroundSize: '1.5em 1.5em',
            }}
        >
            {options.map((opt, idx) => (
                <option key={idx} value={opt.value} className="text-yak-bordeaux bg-yak-ivory">
                    {opt.label}
                </option>
            ))}
        </select>
    );
}