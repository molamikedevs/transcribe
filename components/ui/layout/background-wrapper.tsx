import { cn } from '@/lib/utils';

export default function BackgroundWrapper({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        'relative w-full flex-1',
        'bg-[repeating-linear-gradient(-45deg,var(--color-border)_0,var(--color-border)_1px,transparent_1px,transparent_14px)]',
        'before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:border-t before:border-dashed before:border-border',
        className,
      )}
    >
      <div className="mx-auto min-h-screen w-full max-w-5xl border-border bg-background px-8 py-10 sm:border-x sm:border-dashed sm:px-8 md:px-12">
        {children}
      </div>
    </div>
  );
}
