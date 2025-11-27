/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { LayoutDashboard, Users, Ghost, Gift, Shield, Settings, LogOut, ChevronRight, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

// Sidebar Menu Items
const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", to: "/" },
  { icon: Users, label: "All user", to: "/all-user" },
  { icon: Ghost, label: "Avatar", to: "/avatar" },
  { icon: Gift, label: "Referral Reward", to: "/referral-reward" },
  { icon: Shield, label: "Admin", to: "/admin" },
  {
    icon: Settings,
    label: "Settings",
    hasSubmenu: true,
    submenuItems: [
      { label: "Privacy policy", to: "/settings/privacy-policy" },
      { label: "Terms & Condition", to: "/settings/terms" },
      { label: "Contact us", to: "/settings/contact-us" },
      { label: "FAQ", to: "/settings/faq" },
    ],
  },
];

export function Sidebar({ toggleSidebar, isOpen }) {
  const [activeItem, setActiveItem] = useState("/");  // Default to dashboard
  const [settingsOpen, setSettingsOpen] = useState(false);
  const location = useLocation();

  // Helper function to check if the current path is active
  const isActive = (path) => location.pathname === path;

  // Handle toggling of the settings dropdown
  const toggleSettingsDropdown = () => setSettingsOpen(!settingsOpen);

  return (
    <div className="bg-[#0d0d1a] border-r border-gray-800 flex flex-col h-full">
      {/* Menu Items */}
      <nav className="flex-1 px-3 py-4">
        <ul className="space-y-1">
          {menuItems.map((item) => (
            <li key={item.label}>
              <button
                onClick={() => {
                  if (item.hasSubmenu) {
                    toggleSettingsDropdown();
                  } else {
                    setActiveItem(item.to);  // Set active item when clicked
                  }
                }}
                className={cn(
                  "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors",
                  isActive(item.to) || (item.hasSubmenu && settingsOpen)
                    ? "bg-[#1a1a2e] text-white"
                    : "text-gray-400 hover:text-white hover:bg-[#1a1a2e]/50"
                )}
              >
                <item.icon className="w-5 h-5" />
                <span className="flex-1 text-left">{item.label}</span>
                {item.hasSubmenu && (settingsOpen ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />)}
              </button>

              {/* Settings Submenu */}
              {item.hasSubmenu && settingsOpen && item.submenuItems && (
                <ul className="mt-1 ml-4 space-y-1">
                  {item.submenuItems.map((subItem) => (
                    <li key={subItem.label}>
                      <Link to={subItem.to}>
                        <button
                          onClick={() => setActiveItem(subItem.to)}  // Set active item for submenu
                          className={cn(
                            "w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors",
                            isActive(subItem.to) ? "text-white" : "text-gray-400 hover:text-white"
                          )}
                        >
                          {/* Cyan bullet point */}
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                          <span>{subItem.label}</span>
                        </button>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* Logout */}
      <div className="p-3 border-t border-gray-800">
        <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-gray-400 hover:text-white hover:bg-[#1a1a2e]/50 transition-colors">
          <LogOut className="w-5 h-5" />
          <span>Log Out</span>
        </button>
      </div>
    </div>
  );
}
