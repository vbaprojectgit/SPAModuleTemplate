const getMessages = (): any => {
  const messages = {
    relativeTime: {
      future: "%s",
      past: "%s",
      hh: "Yesterday",
      d: "Yesterday",
    },
    timeFormats: {
      TIME_FORMAT: 'hh:mm A',
      MONTH_FORMAT: `hh:mm A MM/DD`,
      YEAR_FORMAT: `hh:mm A MM/DD/YY`
    },
    'sideBar.dashboards': 'dashboards',
    'incident.searchPlaceholder': 'searchPlaceholder',
    'filter.tryChanging': 'tryChanging',
    'filter.noResults': 'noResults',
    'dashboards.noDashboards': 'noDashboards'
  };

  return messages;
};
  
  //@ts-ignore
  global.enUS = getMessages();

  export {}