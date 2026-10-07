import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata={title:"Isbah Ansari — Frontend Developer",description:"Portfolio of Isbah Ansari, a frontend developer and software engineer focused on Next.js, React.js and Redux."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en" suppressHydrationWarning><body>{children}</body></html>}
