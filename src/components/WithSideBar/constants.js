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

const ICON_COMPILER = (Component) => {
  return (isSelected, colorGray) => (
    <Component isSelected={isSelected} colorGray={colorGray} />
  );
};

export const SCHEMA = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: ICON_COMPILER(DashboardIcon),
  },
  {
    title: "Inventory",
    href: "/inventory",
    icon: ICON_COMPILER(InventoryIcon),
  },
  {
    title: "Leads",
    href: "/leads",
    icon: ICON_COMPILER(LeadsIcon),
  },
  {
    title: "Deals",
    href: "/deals",
    icon: ICON_COMPILER(DealsIcon),
  },
  {
    title: "Accounts",
    href: "/accounts",
    icon: ICON_COMPILER(AccountsIcon),
  },
  {
    title: "Payments",
    href: "/payments",
    icon: ICON_COMPILER(PaymentsIcon),
  },
  {
    title: "Collections",
    href: "/collections",
    icon: ICON_COMPILER(CollectionsIcon),
  },
  {
    title: "Accounting",
    href: "/accounting",
    icon: ICON_COMPILER(AccountingIcon),
  },
  {
    title: "Insights",
    href: "/insights",
    icon: ICON_COMPILER(InsightsIcon),
  },
  {
    title: "Settings",
    href: "/settings",
    icon: ICON_COMPILER(SettingsIcon),
  },
];

export const SIDEBAR_OPTION = {
  COLLAPSED: "collapsed",
  NOT_COLLAPSED: "notCollapsed",
};

export const SIDEBAR_COLLAPSED = "isCollapsed";
