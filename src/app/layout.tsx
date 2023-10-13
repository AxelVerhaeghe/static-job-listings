import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Static Job listing',
  description: 'Frontend mentor project',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
