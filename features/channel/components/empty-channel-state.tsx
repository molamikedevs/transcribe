import { Search } from 'lucide-react';
import AddChannelForm from './add-channel-form';

export default function EmptyChannelState() {
  return (
    <section className="flex flex-col items-center px-4 py-16 text-center sm:py-24">
      <p
        aria-hidden
        className="grid size-14 place-items-center rounded-full border border-border text-info"
      >
        <Search className="size-5" />
      </p>

      <hgroup className="mt-6 max-w-md">
        <h2 className="font-heading text-xl font-semibold tracking-tight sm:text-2xl">
          Nothing indexed yet
        </h2>
        <p className="mt-2 text-sm text-muted-foreground sm:text-base">
          Add a YouTube channel and Transcribe will pull captions from every
          video. Indexing takes a few minutes for most channels.
        </p>
      </hgroup>

      <AddChannelForm className="mt-8 w-full max-w-lg" />

      <p className="mt-4 flex flex-wrap items-center justify-center gap-2 font-mono text-sm text-muted-foreground">
        <span>try</span>
        <span className="rounded-full border border-border px-3 py-1 text-info">
          @modevs
        </span>
        <span className="rounded-full border border-border px-3 py-1 text-info">
          @molamikedevs
        </span>
      </p>
    </section>
  );
}
