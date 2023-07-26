import imgNews from '../image/news.jpg';
import { getAuthor, getDayAndTime } from './helpers';
import { getTitle } from './helpers';

const createBlock = (json) => {

  const { articles } = json;


  articles.forEach(item => {
    const { author, description, publishedAt,
      title, url, urlToImage } = item;

    const article = document.createElement('div');
    const block = document.querySelector('.news');
    const card = document.createElement('div');
    card.classList.add('news-card');

    const wrapper = document.createElement('div');
    wrapper.classList.add('news-card__wrapper');

    const content = document.createElement('div');
    content.classList.add('news-card__content');
    content.classList.add('news-card__content_active');

    const descr = document.createElement('div');
    descr.classList.add('news-card__descr');

    content.innerHTML =`
      <h2 class="news__title">'${getTitle(title)}'</h2>
      <img src=${urlToImage || imgNews} alt="" class="news__img">
        <p class="news__author">${author ? getAuthor(author) : 'author known' }</p>
      <p class="news__public">${getDayAndTime(publishedAt)}</p>
    `;

    descr.innerHTML = `
      <p>${description ?? 'Description is missing'}</p>
      <a  href=${url}>read more</a>
    `;

    wrapper.append(content);
    wrapper.append(descr);


    const btn = document.createElement('button');
    btn.classList.add('news__btn');
    btn.classList.add('fill');
    btn.innerText = 'Read';

    card.append(wrapper);
    card.append(btn);
    article.append(card);
    block.append(article);

    btn.addEventListener('click', function toggleCard () {
      content.classList.toggle('news-card__content_active');
      descr.classList.toggle('news-card__descr_active');
      btn.innerHTML = (btn.innerText==='Read') ? btn.innerText='Back' : btn.innerText='Read';

    });

  });


}

export default createBlock;
