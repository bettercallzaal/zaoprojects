import { CTA } from "@/lib/types";

interface CTAButtonsProps {
  primary: CTA;
  secondary: CTA;
  isEmbed?: boolean;
}

export default function CTAButtons({ primary, secondary, isEmbed = false }: CTAButtonsProps) {
  return (
    <div className={`space-y-2 ${isEmbed ? 'pt-1' : 'pt-2'}`}>
      <div className="flex flex-row gap-3">
        <a
          href={primary.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`
            flex-1 inline-flex items-center justify-center ${isEmbed ? 'px-3 py-1.5' : 'px-4 py-2.5'}
            bg-zao-accent text-zao-bg ${isEmbed ? 'text-[10px]' : 'text-xs sm:text-sm'} font-bold uppercase tracking-wider
            rounded hover:bg-zao-accent-hover hover:shadow-[0_0_15px_var(--zao-primary)]
            transition-all duration-300
          `}
        >
          {primary.label}
        </a>
        <a
          href={secondary.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`
             inline-flex items-center justify-center ${isEmbed ? 'px-3 py-1.5' : 'px-4 py-2.5'}
            border border-zao-accent/30 text-zao-accent ${isEmbed ? 'text-[10px]' : 'text-xs sm:text-sm'} font-bold uppercase tracking-wider
            rounded hover:bg-zao-accent/5 hover:border-zao-accent
            transition-all duration-300
          `}
        >
          {secondary.label}
        </a>
      </div>
    </div>
  );
}
