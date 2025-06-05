import { League_Spartan } from "next/font/google";
import "./globals.css";
import DashboardWrapper from "@/app/DashboardWrapper";

const LeagueSpartanSans = League_Spartan({
  variable: "--font-league-spartan-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Payroll - Dashboard",
  description: "This is a dashboard for Global Employee Payroll",
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
