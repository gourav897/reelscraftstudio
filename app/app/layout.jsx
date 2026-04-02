export const metadata = {
  title: "ReelCraftStudio",
  description: "Dark cinematic video editing portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
