import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Variable, Weight } from "lucide-react";

//components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransion from "@/components/StairTransition";

const jetBrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainMono",
});

export const metadata = {
  title: "Naveen Dasunpriya",
  description: "Hi "
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${jetBrainsMono.variable} font-sans`}>
        <Header />
        <StairTransion/>
          <PageTransition>
            {children}
          </PageTransition>    
      </body>
    </html>
  );
}