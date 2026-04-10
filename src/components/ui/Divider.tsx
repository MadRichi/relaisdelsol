type DividerProps = {
  className?: string;
};

function joinClasses(...classes: Array<string | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export default function Divider({ className }: DividerProps) {
  return (
    <div className={joinClasses("flex justify-center", className)}>
      <svg
        width="80"
        height="24"
        viewBox="0 0 80 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-sol-olive"
        role="presentation"
        aria-hidden="true"
      >
        <path
          d="M2 12H78"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M30 12C30 9.2 32.2 7 35 7"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M50 12C50 14.8 47.8 17 45 17"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M38 11C39.5 8.8 41.5 8.8 43 11C41.5 12.5 39.5 12.5 38 11Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
}
