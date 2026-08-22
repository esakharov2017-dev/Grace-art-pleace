export const size = 32;
export const contentType = "image/png";

export default function Icon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="32" height="32" rx="8" fill="#1C1C1C" />
      <text
        x="50%"
        y="55%"
        dominantBaseline="middle"
        textAnchor="middle"
        fill="#F7F5F1"
        fontSize="16"
        fontWeight="600"
        fontFamily="var(--font-manrope), sans-serif"
      >
        G
      </text>
    </svg>
  );
}