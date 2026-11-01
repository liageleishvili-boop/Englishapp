import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "English Page",
  description: "A calm place to learn, practice, and find the words you need.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
