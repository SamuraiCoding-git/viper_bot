export function Input({ ...props }) {
    return (
        <input
            className="w-full bg-yak-black border-2 border-yak-gold rounded-xl px-4 py-3 text-yak-ivory placeholder-yak-placeholder focus:outline-none focus:ring-2 focus:ring-yak-gold/40 transition"
            {...props}
        />
    );
}