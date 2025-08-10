export const metadata = {
  title: "Excellence Cleaning – Las Vegas",
  description: "Elegant, reliable residential & commercial cleaning in Las Vegas. English & Spanish support.",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-neutral-900">{children}</body>
    </html>
  );
}
