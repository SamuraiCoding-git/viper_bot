export function Text({ children, className = "" }) {
    return (
        <span className={`font-montserrat text-yak-ivory ${className}`}>
      {children}
    </span>
    );
}