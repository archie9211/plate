import React from 'react';

export const DemoHeader = () => (
  <div className="bg-gray-100 dark:bg-gray-850 relative py-24 border-t border-gray-200">
    <div className="px-4 sm:px-6 lg:px-8  mx-auto container max-w-3xl sm:text-center">
      <h3 className="text-gray-900 dark:text-white text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl sm:leading-10 lg:leading-none mt-2">
        Less Code. Fewer Edge Cases.
      </h3>
      <p className="text-gray-600 dark:text-gray-300 my-4 text-xl leading-7">
        Slate Plugins comes with battle-tested solutions for formatting, events
        handlers, rendering, serializing, normalizing, you literally write a
        tiny fraction of the code you normally would. This means you spend less
        time writing code and more time building your next big thing.
      </p>
    </div>
    <div style={{ height: 224 }} />
  </div>
);
