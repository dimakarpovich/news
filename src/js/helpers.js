export const getDayAndTime = (str) => `${str.split('T')[0].slice(5).replace('-', '/')} ${str.split('T')[1].slice(0, -4)}`;
export const getTitle = (str) => `${str.split(' ').slice(0,10).join(' ')}...`
export const getAuthor = (str) => `${str.split(',')[0]}`



