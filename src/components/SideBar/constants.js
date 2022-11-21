import AccountingIcon from "../../icons/AccountingIcon";
import AccountsIcon from "../../icons/AccountsIcon";
import CollectionsIcon from "../../icons/CollectionsIcon";
import DashboardIcon from "../../icons/DashboardIcon";
import DealsIcon from "../../icons/DealsIcon";
import InsightsIcon from "../../icons/InsightsIcon";
import InventoryIcon from "../../icons/InventoryIcon";
import LeadsIcon from "../../icons/LeadsIcon";
import PaymentsIcon from "../../icons/PaymentsIcon";
import SettingsIcon from "../../icons/SettingsIcon";

const wrapIconComponent = (Component) => {
  return (isSelected, color) => (
    <Component isSelected={isSelected} color={color} />
  );
};

export const SCHEMA = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: wrapIconComponent(DashboardIcon),
  },
  {
    title: "Inventory",
    href: "/inventory",
    icon: wrapIconComponent(InventoryIcon),
  },
  {
    title: "Leads",
    href: "/leads",
    icon: wrapIconComponent(LeadsIcon),
  },
  {
    title: "Deals",
    href: "/deals",
    icon: wrapIconComponent(DealsIcon),
  },
  {
    title: "Accounts",
    href: "/accounts",
    icon: wrapIconComponent(AccountsIcon),
  },
  {
    title: "Payments",
    href: "/payments",
    icon: wrapIconComponent(PaymentsIcon),
  },
  {
    title: "Collections",
    href: "/collections",
    icon: wrapIconComponent(CollectionsIcon),
  },
  {
    title: "Accounting",
    href: "/accounting",
    icon: wrapIconComponent(AccountingIcon),
  },
  {
    title: "Insights",
    href: "/insights",
    icon: wrapIconComponent(InsightsIcon),
  },
  {
    title: "Settings",
    href: "/settings",
    icon: wrapIconComponent(SettingsIcon),
  },
];

export const SIDEBAR_OPTION = {
  COLLAPSED: "collapsed",
  NOT_COLLAPSED: "notCollapsed",
};

export const THEME = {
  dark: {
    icon_color: "#56657f",
  },
  light: {
    icon_color: "#D7D7DE",
  },
};

export const SIDEBAR_COLLAPSED_STORAGE_KEY = "isCollapsed";
