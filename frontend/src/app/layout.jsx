import './globals.css';

export const metadata = {
  title: 'ClayBlossoms',
  description: 'Handcrafted Clay Products',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
