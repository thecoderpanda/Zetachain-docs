import { useCallback, useMemo } from "react";
import { useLocalStorage } from "react-use";

import { NetworkType } from "~/lib/app.types";

import { lsSelectedNetworkType, NetworkTypeTab, networkTypeTabs } from "../Tabs.constants";
import { NavTabs } from "./NavTabs";

type NetworkTypeTabsProps = {
  activeTab: NetworkTypeTab;
  setActiveTab: (item: NetworkTypeTab) => void;
  className?: string;
};

export const NetworkTypeTabs: React.FC<NetworkTypeTabsProps> = ({ activeTab, setActiveTab, className }) => {
  const [selectedNetworkType, setSelectedNetworkType] = useLocalStorage<NetworkType>(lsSelectedNetworkType);

  const selectedTab = useMemo(
    () => networkTypeTabs.find((item) => item.networkType === selectedNetworkType) || activeTab,
    [activeTab, selectedNetworkType]
  );

  const handleSetActiveTab = useCallback(
    (item: NetworkTypeTab) => {
      setActiveTab(item);
      setSelectedNetworkType(item.networkType);
    },
    [setActiveTab, setSelectedNetworkType]
  );

  return (
    <NavTabs tabs={networkTypeTabs} activeTab={selectedTab} setActiveTab={handleSetActiveTab} className={className} />
  );
};