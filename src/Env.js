export const get = (key) => {
  let enviroment = process.env.NODE_ENV;
  let value = undefined;
  if (env[enviroment][key]) {
    value = env[enviroment][key];
  }

  return value;
};

export const env = {
  release: 'beta',
  build: '0.0.4',
  date: '24-07-2020',
  development: {
    api: 'http://127.0.0.1:3000/',
    dashboard: 'dashboard',
    show_notice: true,
  },
  production: {
    api: 'https://analytics.adapttive.com/',
    dashboard: 'dashboard',
    show_notice: true,
  },
};
