interface SidebarLinkProps {
  href: string;
  icon: string;
  label: string;
  isActive?: boolean;
}

export const SidebarLink = ({
  href,
  icon,
  label,
  isActive,
}: SidebarLinkProps) => (
  <a
    href={href}
    className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors duration-200 ${
      isActive ? "bg-white/10 text-white" : "text-white/70 hover:bg-white/10"
    }`}
    aria-current={isActive ? "page" : undefined}
  >
    <img src={icon} alt={label} className="w-5 h-5" />
    {label}
  </a>
);
