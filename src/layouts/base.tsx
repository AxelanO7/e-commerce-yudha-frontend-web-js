import React from "react";
import NavbarAdmin from "./navbar_admin";
import SidebarAdmin from "./sidebar_admin";

interface BaseLayoutProps {
  children: React.ReactNode;
  background?: string;
}

export default function BaseLayout({
  children,
  background = "gray-50",
}: BaseLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <NavbarAdmin />
      <div className="h-20" />
      <div className="flex grow">
        <SidebarAdmin />
        <div className={`w-full bg-${background}`}>{children}</div>
      </div>
    </div>
  );
}
