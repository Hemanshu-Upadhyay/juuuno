import { X } from "lucide-react";
import { Logo, Authentication, Profile, Profile2 } from "@/assets";
import { SidebarLink } from "../../helpers/sidebar";
import { links } from "../../data/mockData";

const SidebarContent = () => {
  return (
    <>
      {/* Logo Section */}
      <div className="flex items-center gap-2 mb-8">
        <img
          src={Logo}
          alt="JUUUNO Logo"
          width="100%"
          height="100%"
          className="rounded-full"
        />
      </div>

      {/* Navigation Links */}
      <nav className="flex-grow space-y-1">
        {links.map((link: any) => (
          <SidebarLink
            key={link.label}
            href={link.href}
            icon={link.icon}
            label={link.label}
            isActive={link.isActive}
          />
        ))}
      </nav>

      {/* Profile Section */}
      <div className="mt-auto pt-8">
        <div className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 mb-2 sm:mb-4">
          <img
            src={Profile}
            alt="Profile"
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover"
          />
          <div className="flex flex-col">
            <span className="text-white">Ads</span>
            <span className="text-white/70 text-sm">Advertiser Account</span>
          </div>
        </div>
        <SidebarLink href="#" icon={Profile2} label="Profile" />
        <SidebarLink href="#" icon={Authentication} label="2F Authentication" />
      </div>
    </>
  );
};

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => (
  <>
    {/* Desktop Sidebar */}
    <aside className="hidden md:flex md:flex-col w-64 bg-[#2B1006] text-white p-4 h-screen">
      <SidebarContent />
    </aside>

    {/* Mobile Menu */}
    {isOpen && (
      <div className="md:hidden fixed inset-0 z-50 bg-black bg-opacity-50">
        <div
          className="fixed inset-y-0 left-0 w-64 bg-[#2B1006] text-white p-4 flex flex-col h-full overflow-y-auto"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex justify-between items-center mb-6">
            <button
              onClick={onClose}
              className="text-white flex-1 hover:text-gray-300 transition-colors duration-200 ease-in-out"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <SidebarContent />
        </div>
      </div>
    )}
  </>
);

export default Sidebar;
