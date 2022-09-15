import React from 'react'

export default function TitleBar() {
  return (
      <div className="filter-blur top-0 z-10 flex flex-col justify-center px-3 py-2 dark:border-b dark:border-gray-900 min-h-[48px]">
        <div className="flex flex-none items-center justify-between">
          <span className="flex items-center space-x-3">
            <h2 className="text-primary transform-gpu text-sm font-bold ml-3 dark:text-gray-200">
              DevJourney
            </h2>
          </span>
        </div>
    </div>
  );
}
