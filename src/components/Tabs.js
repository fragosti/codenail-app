import styled from 'styled-components';
import { 
  Tab as rTab, 
  Tabs as rTabs, 
  TabList as rTabList,
  TabPanel as rTabPanel } from 'react-tabs';


export const Tabs = styled(rTabs)`
  .react-tabs__tab-list {
    padding: 0;
  }
  .react-tabs__tab-panel {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .react-tabs__tab {
    display: inline-block;
    cursor: pointer;
    border-bottom: 1px solid rgba(0,0,0,.1);
    padding: 5px 15px;
    &:not(:last-child) {
      border-right: 1px solid rgba(0,0,0,.1);
    }
  }
  .react-tabs__tab--selected {
    font-weight: 600;
    border-bottom: 1px solid black;
  }
`
export const Tab = rTab
export const TabList = rTabList
export const TabPanel = rTabPanel
