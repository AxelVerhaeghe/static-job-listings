import './globals.scss';
import type { Metadata } from 'next';
import styles from './layout.module.scss';

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
      <body>
        <div className={styles.Header}></div>
        <main className={styles.Content}>{children}</main>
      </body>
    </html>
  );
}
