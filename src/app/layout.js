// src/app/layout.js
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "../components/Navbar/Nabbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased" suppressHydrationWarning={true}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}















// // src/app/layout.js
// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";

// import Menu from "@/components/menu/Menu.js";

// // import Navbar from "../components/Navbar/Navbar";
// import Navbar from "../components/Navbar/Nabbar";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//         suppressHydrationWarning={true}
//       >
//         <Navbar />
//         {/* <Menu/> */}
//         {children}
//       </body>
//     </html>
//   );
// }





