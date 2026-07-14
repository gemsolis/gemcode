type ImagePlaceholderProps = {
  label?: string;
  tone?: "light" | "dark";
  className?: string;
};

export default function ImagePlaceholder({
  label,
  tone = "dark",
  className = "",
}: ImagePlaceholderProps) {
  const isLight = tone === "light";

  return (
    <div
      className={`flex items-center justify-center overflow-hidden rounded-2xl border border-dashed ${
        isLight
          ? "border-white/25 bg-white/5"
          : "border-black/15 bg-black/[.03]"
      } ${className}`}
    >
      <div className="flex flex-col items-center gap-2 p-6 text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.2}
          stroke="currentColor"
          className={`h-8 w-8 ${isLight ? "text-white/40" : "text-black/25"}`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 15.75l5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3 4.5h18M3 4.5v15a2.25 2.25 0 0 0 2.25 2.25h13.5A2.25 2.25 0 0 0 21 19.5v-15m-18 0A2.25 2.25 0 0 1 5.25 2.25h13.5A2.25 2.25 0 0 1 21 4.5m-13.5 6a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
          />
        </svg>
        {label ? (
          <span
            className={`text-xs font-medium tracking-wide uppercase ${
              isLight ? "text-white/40" : "text-black/30"
            }`}
          >
            {label}
          </span>
        ) : null}
      </div>
    </div>
  );
}
