import "./globals.css";

export const metadata = {
  title: "Yeshraj Maganti | Portfolio",
  description: "Data Engineer • AWS · Azure · Snowflake · PySpark",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
