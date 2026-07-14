type LogoProps = {
  /**
   * primary: purple rectangle, for light/neutral backgrounds
   * white: white rectangle, for dark or saturated backgrounds
   * mono-white / mono-black: no rectangle, flat 1-color mark
   */
  variant?: "primary" | "white" | "mono-white" | "mono-black";
  className?: string;
};

export default function Logo({ variant = "primary", className = "" }: LogoProps) {
  const isMono = variant === "mono-white" || variant === "mono-black";

  const bubbleBg =
    variant === "primary"
      ? "bg-authority-navy"
      : variant === "white"
        ? "bg-white"
        : "";

  const bubbleText =
    variant === "primary"
      ? "text-white"
      : variant === "white"
        ? "text-authority-navy"
        : variant === "mono-white"
          ? "text-white"
          : "text-neutral-900";

  const scriptText =
    variant === "primary"
      ? "text-authority-navy"
      : variant === "white"
        ? "text-white"
        : variant === "mono-white"
          ? "text-white"
          : "text-neutral-900";

  return (
    <span className={`inline-flex flex-col ${className}`}>
      <span
        className={`font-authority-sans relative inline-flex w-fit items-center text-sm font-bold tracking-wide uppercase ${bubbleText} ${
          isMono ? "" : `${bubbleBg} px-3 py-1.5`
        }`}
      >
        The Authority
        {!isMono ? (
          <span
            aria-hidden="true"
            className={`absolute -bottom-1 left-4 h-2.5 w-2.5 rotate-45 ${bubbleBg}`}
          />
        ) : null}
      </span>
      <span
        className={`font-authority-script -mt-0.5 ml-6 text-2xl leading-none ${scriptText}`}
      >
        agency
      </span>
    </span>
  );
}
