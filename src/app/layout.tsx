import './globals.css'

export const metadata = {
  title: "istcode case", 
  description: "case",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
