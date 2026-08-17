import Header from '@/components/ui/layout/header';

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-background focus:px-4 focus:py-2 focus:ring-2 focus:ring-ring"
      >
        Skip to content
      </a>
      <Header />

      <main id="main" className="flex-1 px-4 py-6 md:px-6">
        {children}
      </main>
    </>
  );
}
