import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import { Link2 } from 'lucide-react';

export default function AddChannelForm({ className }: { className?: string }) {
  return (
    <form
      className={cn('mt-6 flex flex-col gap-2 sm:flex-row sm:gap-3', className)}
    >
      <p className="relative flex min-w-0 flex-1 items-center">
        <Label htmlFor="channel-url" className="sr-only">
          YouTube channel URL
        </Label>
        <Link2
          aria-hidden
          className="pointer-events-none absolute left-4 size-4 text-muted-foreground"
        />
        <Input
          id="channel-url"
          name="channelUrl"
          type="url"
          inputMode="url"
          autoComplete="off"
          placeholder="youtube.com/@channel"
          className="h-12 rounded-xl bg-card pl-11 md:text-base"
        />
      </p>

      <Button type="submit" className="h-12 shrink-0 rounded-xl px-6">
        Add channel
      </Button>
    </form>
  );
}
