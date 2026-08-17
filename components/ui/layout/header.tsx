import ThemeSwitch from '@/components/theme/theme-switch';
import SearchInput from '@/features/search/components/search-input';
import Image from 'next/image';
import SiteLogo from './logo';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 grid w-full grid-cols-[auto_1fr] items-center gap-3 border-b border-border bg-background/80 px-4 py-3 backdrop-blur-md md:grid-cols-[auto_minmax(0,1fr)_auto] md:gap-x-6 md:px-6 md:py-4">
      <SiteLogo className="col-start-1 row-start-1" />

      <SearchInput className="col-span-2 row-start-2 md:col-span-1 md:col-start-2 md:row-start-1" />

      <menu className="col-start-2 row-start-1 flex items-center justify-end gap-1 md:col-start-3 md:gap-2">
        <li>
          <ThemeSwitch />
        </li>
        <li>
          <button
            type="button"
            aria-label="Account"
            className="grid size-10 place-items-center rounded-full bg-muted text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <Image
              src="/icons/user.svg"
              width={20}
              height={20}
              alt=""
              aria-hidden
              className="size-5"
            />
          </button>
        </li>
      </menu>
    </header>
  );
}
