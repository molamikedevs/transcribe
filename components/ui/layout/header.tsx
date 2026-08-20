import ThemeSwitch from '@/components/theme/theme-switch';
import { Skeleton } from '@/components/ui/skeleton';
import { ClerkLoaded, ClerkLoading, Show, UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import { Button } from '../button';
import SiteLogo from './logo';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 grid w-full grid-cols-[auto_1fr] items-center gap-3 border-b border-border bg-background/80 px-4 py-3 backdrop-blur-md md:grid-cols-[auto_minmax(0,1fr)_auto] md:gap-x-6 md:px-6 md:py-4">
      <SiteLogo className="col-start-1 row-start-1" />

      <menu className="col-start-2 row-start-1 flex items-center justify-end gap-2 md:col-start-3">
        <li className="flex items-center gap-2">
          <ClerkLoading>
            <Skeleton className="size-9 rounded-full" />
          </ClerkLoading>

          <ClerkLoaded>
            <Show
              when="signed-in"
              fallback={
                <>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="hidden text-muted-foreground hover:text-foreground sm:inline-flex"
                  >
                    <Link href="/sign-in">Sign in</Link>
                  </Button>
                  <Button size="sm">
                    <Link href="/sign-up">Get started</Link>
                  </Button>
                </>
              }
            >
              <UserButton appearance={{ elements: { avatarBox: 'size-9' } }} />
            </Show>
          </ClerkLoaded>
        </li>

        <li className="ml-1">
          <ThemeSwitch />
        </li>
      </menu>
    </header>
  );
}
