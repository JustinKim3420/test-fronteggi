import { FronteggAppProvider } from '@frontegg/nextjs/app';
import LayoutClientComponent from './LayoutClientComponent'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const authOptions = {
    keepSessionAlive: true // Uncomment this in order to maintain the session alive
  }

  return (
    <html>
      <head></head>
      <body>
        {/* @ts-expect-error Server Component for more details visit: https://github.com/vercel/next.js/issues/42292 */}
        <FronteggAppProvider authOptions={authOptions} hostedLoginBox={true}>
          <LayoutClientComponent>
            {children}
          </LayoutClientComponent>
        </FronteggAppProvider>
      </body>
    </html>
  );
}