import { Reports, Audiance, Chart, CreateCampaign, Dashboard } from "@/assets";
import myntraLogo from "@/assets/icons/Myntra.svg";
import shopeelogo from "@/assets/icons/shopee.svg";
import noonLogo from "@/assets/icons/noon.svg";
import Takealot from "@/assets/icons/Takealot.svg";
import { lazda } from "@/assets/icons";

export const links = [
  { href: "#", icon: Dashboard, label: "Dashboard", isActive: true },
  { href: "#", icon: CreateCampaign, label: "Create Campaign" },
  { href: "#", icon: Chart, label: "Analytics" },
  { href: "#", icon: Audiance, label: "Audience Segment" },
  { href: "#", icon: Reports, label: "Reports" },
];

export const filterOptions = [
  {
    placeholder: "Store",
    options: [{ value: "all", label: "All Stores" }],
  },
  {
    placeholder: "Important Apps",
    options: [{ value: "all", label: "All Apps" }],
  },
  {
    placeholder: "Campaign Type",
    options: [{ value: "all", label: "All Types" }],
  },
  {
    placeholder: "Country",
    options: [{ value: "all", label: "All Countries" }],
  },
  {
    placeholder: "Tracking",
    options: [{ value: "all", label: "All Tracking" }],
  },
];

export const campaigns = [
  {
    name: "Myntra - Fashion Shopping App",
    id: "com.myntra.android",
    logo: myntraLogo,
    platforms: ["android"],
    status: { text: "Active", count: 1 },
    totalClicks: { value: "14.78M", change: 18.34, positive: true },
    totalInstalls: { value: "4.26M", change: 8.15, positive: true },
    totalEvents: { value: "26K", change: 2.34, positive: true },
  },
  {
    name: "Shopee Lite",
    id: "com.shopee.id.android",
    logo: shopeelogo,
    platforms: ["android"],
    status: { text: "Active", count: 2 },
    totalClicks: { value: "24.11M", change: 21.05, positive: true },
    totalInstalls: { value: "2.88M", change: 4.11, positive: true },
    totalEvents: { value: "18K", change: 3.64, positive: true },
  },
  {
    name: "Noon Ecommerce",
    id: "me.noon.commerce.android",
    logo: noonLogo,
    platforms: ["windows"],
    status: { text: "Paused", count: 11 },
    totalClicks: { value: "1.46M", change: 8.91, positive: false },
    totalInstalls: { value: "16K", change: 8.1, positive: false },
    totalEvents: { value: "9K", change: 2.12, positive: true },
  },
  {
    name: "Takealot",
    id: "com.takealot.android",
    logo: Takealot,
    platforms: ["apple"],
    status: { text: "Inactive", count: 3 },
    totalClicks: { value: "7.16M", change: 3.17, positive: true },
    totalInstalls: { value: "2.95M", change: 7.4, positive: true },
    totalEvents: { value: "95K", change: 4.85, positive: false },
  },
  {
    name: "Lazada Mobile",
    id: "com.lazada.android",
    logo: lazda,
    platforms: ["android", "apple", "windows"],
    status: { text: "Paused", count: 5 },
    totalClicks: { value: "27.91M", change: 18.34, positive: true },
    totalInstalls: { value: "11.83M", change: 8.15, positive: true },
    totalEvents: { value: "45K", change: 6.23, positive: true },
  },
];
