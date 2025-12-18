import { CTA } from "@/lib/types";

interface CTAButtonsProps {
  primary: CTA;
  secondary: CTA;
}

export default function CTAButtons({ primary, secondary }: CTAButtonsProps) {
  return (
    <div className="space-y-2">
      <div className="flex flex-row gap-2">
        <a
          href={primary.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-3 py-1.5 sm:px-4 sm:py-2 bg-zao-accent text-zao-bg text-xs sm:text-sm font-medium rounded-lg hover:bg-zao-accent-hover transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-zao-accent focus:ring-offset-2 focus:ring-offset-zao-bg"
        >
          {primary.label}
          <svg
            className="ml-1 w-3 h-3 sm:ml-2 sm:w-4 sm:h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </a>
        <a
          href={secondary.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-3 py-1.5 sm:px-4 sm:py-2 border border-zao-border text-zao-text text-xs sm:text-sm font-medium rounded-lg hover:border-zao-accent hover:text-zao-accent transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-zao-accent focus:ring-offset-2 focus:ring-offset-zao-bg"
        >
          {secondary.label}
          <svg
            className="ml-1 w-3 h-3 sm:ml-2 sm:w-4 sm:h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </a>
      </div>
      <p className="text-xs text-zao-muted">{primary.helperText}</p>
    </div>
  );
}
