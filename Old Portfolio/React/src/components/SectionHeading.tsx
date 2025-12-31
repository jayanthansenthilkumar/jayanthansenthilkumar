
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

const SectionHeading = ({ 
  title, 
  subtitle, 
  align = 'left',
  className 
}: SectionHeadingProps) => {
  return (
    <div 
      className={cn(
        'mb-8 sm:mb-12',
        align === 'center' && 'text-center',
        align === 'right' && 'text-right',
        className
      )}
    >
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold relative">
        <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">{title}</span>
        <div className="absolute -bottom-2 sm:-bottom-3 left-0 h-1 w-16 sm:w-20 bg-gradient-to-r from-primary to-secondary rounded-full" style={{
          left: align === 'center' ? '50%' : align === 'right' ? 'auto' : '0',
          right: align === 'right' ? '0' : 'auto',
          transform: align === 'center' ? 'translateX(-50%)' : 'none'
        }} />
      </h2>
      {subtitle && (
        <p className={cn(
          "mt-4 sm:mt-6 text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed",
          align === 'center' && 'text-center mx-auto',
          align === 'right' && 'text-right ml-auto',
          align === 'left' && 'text-left'
        )}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
