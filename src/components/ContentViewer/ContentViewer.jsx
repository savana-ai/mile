import React, { useState, useEffect } from 'react';
import { ProcessModelViewer } from '../Process/ProcessModelViewer';

// Constants
const VIEW_TYPES = {
  STORIES: 'stories',
  PROCESS: 'process',
  DATA: 'data'
};

// Utility Functions
const breakLongText = (text, maxLength = 80) => {
  if (text.length <= maxLength) return [text];
  
  const words = text.split(' ');
  const lines = [];
  let currentLine = '';

  words.forEach(word => {
    if ((currentLine + word).length <= maxLength) {
      currentLine += (currentLine ? ' ' : '') + word;
    } else {
      lines.push(currentLine);
      currentLine = word;
    }
  });
  
  if (currentLine) lines.push(currentLine);
  return lines;
};

// User Stories Component
const UserStoriesView = ({ activeStory }) => {
  if (!activeStory) {
    return <div className="active-content">No story selected.</div>;
  }

  return (
    <div className="active-story-content">
      <h2>{activeStory.stakeholder}</h2>
      <div>
        <ul className="list-none p-0">
          {activeStory.bdd.map((scenario, index) => {
            const parts = scenario.match(/(Given .*?,)|(When .*?,)|(Then .*\.)/g);

            return (
              <li key={index} className="mb-2 p-4">
                {parts?.map((part, partIndex) => {
                  const lines = breakLongText(part);
                  return lines.map((line, lineIndex) => (
                    <div
                      key={`${partIndex}-${lineIndex}`}
                      className="font-mono text-gray-800 text-left text-sm pb-2"
                      style={{
                        fontFamily: 'ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace',
                        color: '#383a42',
                        textAlign: 'left',
                        wordWrap: 'break-word',
                        overflowWrap: 'break-word',
                        whiteSpace: 'normal',
                        wordBreak: 'break-word',
                        fontSize: 'small',
                        hyphens: 'none',
                        lineHeight: 1,
                        tabSize: 4,
                        paddingBottom: '0.5rem',
                      }}
                    >
                      {line}
                    </div>
                  ));
                })}
              </li>
            );
          })}
        </ul>
        <br />
      </div>
    </div>
  );
};


// Data Model Component (Placeholder)
const DataModelView = () => (
  <div className="p-4">
    <h2>Data Model View</h2>
    <p>Data model visualization will be implemented here.</p>
  </div>
);

const ViewToggle = ({ activeView, onViewChange }) => (
  <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
    {Object.entries(VIEW_TYPES).map(([key, value]) => (
      <button
        key={key}
        onClick={() => onViewChange(value)}
        style={{
          padding: '0.5rem 1rem',
          borderRadius: '8px',
          fontSize: '14px',
          fontWeight: '500',
          transition: 'background-color 0.3s, transform 0.3s',
          transform: 'scale(1)',
          outline: 'none',
          boxShadow: activeView === value ? '0 4px 6px rgba(0, 0, 0, 0.1)' : 'none',
          backgroundColor: activeView === value ? '#3182CE' : '#E2E8F0',
          color: activeView === value ? '#FFFFFF' : '#2D3748',
          cursor: "pointer",
        }}
        onMouseOver={(e) => (e.target.style.transform = 'scale(1.05)')}
        onMouseOut={(e) => (e.target.style.transform = 'scale(1)')}
        onFocus={(e) => e.target.style.outline = '2px solid #3182CE'}
        onBlur={(e) => e.target.style.outline = 'none'}
      >
        {key.charAt(0) + key.slice(1).toLowerCase()}
      </button>
    ))}
  </div>
);


// Main Container Component
export const ContentViewer = () => {
  const [activeView, setActiveView] = useState(VIEW_TYPES.STORIES);
  const [activeStory, setActiveStory] = useState(() => {
    const storedStory = localStorage.getItem('activeStory');
    return storedStory ? JSON.parse(storedStory) : null;
  });

  useEffect(() => {
    const handleStorageChange = () => {
      const storedStory = localStorage.getItem('activeStory');
      setActiveStory(storedStory ? JSON.parse(storedStory) : null);
    };

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('localStorageUpdate', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('localStorageUpdate', handleStorageChange);
    };
  }, []);

  const renderContent = () => {
    switch (activeView) {
      case VIEW_TYPES.STORIES:
        return <UserStoriesView activeStory={activeStory} />;
      case VIEW_TYPES.PROCESS:
        return <ProcessModelViewer />;
      case VIEW_TYPES.DATA:
        return <DataModelView />;
      default:
        return <div>Invalid view selected</div>;
    }
  };

  return (
    <div className="content-viewer">
      <ViewToggle 
        activeView={activeView}
        onViewChange={setActiveView}
      />
      {renderContent()}
    </div>
  );
};

export default ContentViewer;



