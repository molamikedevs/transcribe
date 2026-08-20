import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

export default function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn(
        'group flex items-center gap-2 rounded-md',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
        className,
      )}
    >
      <Image
        src="/images/logo.png"
        width={28}
        height={28}
        alt=""
        aria-hidden
        className="size-7 shrink-0 transition-transform duration-200 group-hover:-rotate-6"
      />
      <span className="font-heading text-lg font-semibold tracking-tight xs:text-xl">
        Transcribe
      </span>
    </Link>
  );
}
