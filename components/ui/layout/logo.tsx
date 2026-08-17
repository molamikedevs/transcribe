import { cn } from '@/lib/utils';
import Link from 'next/link';
import UserAvatar from './user-avatar';

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
      <UserAvatar />
    </Link>
  );
}
