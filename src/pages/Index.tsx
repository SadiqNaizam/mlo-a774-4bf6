import React from 'react';

import Header from '../components/layout/Header';
import Sidebar from '../components/layout/Sidebar';
import EventCardGrid from '../components/EventDisplay/EventCardGrid';
import QuickFilterChips from '../components/EventDisplay/QuickFilterChips';

/**
 * ActivitiesPage is the main page for discovering and browsing activities,
 * serving as the index page for this application.
 * 
 * It orchestrates the overall layout by composing several
 * organism-level components:
 * - Header: The main site navigation, fixed at the top.
 * - Sidebar: Contains filtering options for activities.
 * - QuickFilterChips: A horizontal list of popular filter categories.
 * - EventCardGrid: Displays the list of available activities in a grid format.
 * 
 * The layout is responsive and based on the provided requirements:
 * - On large screens (lg and up), it displays a two-column layout (1fr for sidebar, 4fr for content).
 * - On smaller screens, the sidebar is hidden, and the content stacks vertically.
 */
const ActivitiesPage: React.FC = () => {
  return (
    <div className="bg-background min-h-screen">
      <Header />
      {/* Main content area with padding-top to offset the fixed header's height (112px) */}
      <main className="pt-[112px]">
        {/* Consistent container to align with the header's content and page layout requirements */}
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 py-4">
          {/* Main two-column layout based on 'mainContent' requirements. */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_4fr] gap-6">
            {/* Sidebar column - visible only on large screens */}
            <aside className="hidden lg:block">
              <Sidebar />
            </aside>

            {/* Main content column containing quick filters and the event grid */}
            <section className="flex flex-col gap-6">
              <QuickFilterChips />
              <EventCardGrid />
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ActivitiesPage;
