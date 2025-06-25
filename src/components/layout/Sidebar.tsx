import React from 'react';
import SidebarFilters from '../Filters/SidebarFilters';

/**
 * Renders the sidebar content for the application.
 *
 * This layout component acts as a container for the sidebar organism. For the
 * "Activities Discovery Page", it renders the `SidebarFilters` component,
 * which contains all the filtering logic and UI. This composition allows for
 * a clean separation between the page's overall layout structure and the
 * specific content of its regions.
 */
const Sidebar: React.FC = () => {
  return <SidebarFilters />;
};

export default Sidebar;
