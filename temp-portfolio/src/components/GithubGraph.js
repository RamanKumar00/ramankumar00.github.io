import React from 'react';
import { GitHubCalendar } from 'react-github-calendar';

const GithubGraph = () => {
  const selectLastHalfYear = contributions => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const shownMonths = 6;

    return contributions.filter(day => {
      const date = new Date(day.date);
      const monthOfDay = date.getMonth();

      return (
        date.getFullYear() === currentYear &&
        monthOfDay > currentMonth - shownMonths &&
        monthOfDay <= currentMonth
      );
    });
  };

  return (
    <div className="github-graph-container animate-on-scroll">
      <h3 className="graph-title">
        <span className="material-symbols-outlined">dataset</span>
        Activity Log
      </h3>
      <div className="graph-wrapper">
        <GitHubCalendar 
          username="RamanKumar00" 
          colorScheme="dark"
          blockSize={12}
          blockMargin={4}
          fontSize={12}
          theme={{
            dark: ['#161b22', '#0e2fd840', '#0e2fd880', '#0e2fd8c0', '#0e2fd8'],
          }}
        />
      </div>
    </div>
  );
};

export default GithubGraph;
