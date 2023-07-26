import loderImg from '../image/loader.svg';
import { FADE_IN } from './constans';
import { FADE_OUT } from './constans';
const loader = document.createElement('img');

export const createLoader = () => {
  loader.setAttribute('src' , loderImg );
  loader.classList.add(FADE_IN);
  loader.classList.add('loader');
  const news = document.querySelector('.news');
  news.append(loader);
};

export const removeLoader = () => new Promise((resolve) => {
  loader.classList.remove(FADE_IN);
  loader.classList.add(FADE_OUT);
  loader.addEventListener('animationend' , () => {
    loader.remove();
    resolve();
  });
});
