import type { Metadata } from 'next';
import './globals.css';
import { CartProvider } from '@/components/cart-context';

export const metadata: Metadata = {
  title: 'VoltDrive Auto Parts',
  description: 'Premium EV accessories and performance parts',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
