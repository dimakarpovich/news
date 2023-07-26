import getNews from "./getNews";

const sendRequest = () => {
  const links = document.querySelectorAll('.menu__link');
  links.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const value = link.innerHTML;
      const block = document.querySelector('.news');
      block.innerHTML = '';
      getNews(value);
    });
  });
}
export default sendRequest;
