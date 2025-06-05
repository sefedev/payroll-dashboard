import { League_Spartan } from "next/font/google";
import "./globals.css";
import DashboardWrapper from "@/app/DashboardWrapper";

const LeagueSpartanSans = League_Spartan({
  variable: "--font-league-spartan-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Payroll Dashboard | Manage Payroll Effortlessly",
  description: "A comprehensive payroll dashboard to manage businesses, employees, and payroll analytics efficiently.",
  openGraph: {
    title: "Payroll Dashboard",
    description: "Manage payroll, employees, and analytics in one place.",
    url: "https://payroll-dashboard-chi.vercel.app/",
    siteName: "Payroll Dashboard",
    locale: "en_US",
    type: "website",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${LeagueSpartanSans.variable} flex antialiased`}>
        <DashboardWrapper>
          {children}
        </DashboardWrapper>
      </body>
    </html>
  );
}
