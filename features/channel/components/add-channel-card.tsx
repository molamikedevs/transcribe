import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

export default function AddChannelCard() {
  return (
    <li>
      <Button
        variant="outline"
        className="h-full min-h-44 w-full flex-col gap-2 rounded-xl border-dashed bg-transparent text-muted-foreground hover:text-foreground"
      >
        <Plus aria-hidden className="size-6" />
        <span className="text-sm">Add another</span>
      </Button>
    </li>
  );
}
