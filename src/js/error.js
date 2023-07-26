
import { FADE_IN } from './constans';
import { FADE_OUT } from './constans';

const createError = () => {
  const container = document.querySelector('.container');
  const errorBlock = document.createElement('div');

  errorBlock.classList.add('error__block');
  errorBlock.innerHTML = `
      <div class="planet ">
      <div class="inner">
        <div class="surface"></div>
      </div>
      <div class="ring"></div>
      <div class="moon"></div>
      <span>4</span>
      <span>4</span>
      <div class="stars s1"></div>
      <div class="stars s2"></div>
      <div class="stars s3"></div>
      <div class="stars s4"></div>
    </div>
    <p class="alt">404</p>
  `;
  const back = document.createElement('a');
  back.classList.add('info');
  back.innerText = 'return home?';
  errorBlock.append(back);



  errorBlock.classList.add(FADE_IN);
  container.classList.add(FADE_OUT);
  container.classList.add('hidden');
  document.body.append(errorBlock);



  const returnBack = () => {
    errorBlock.classList.add(FADE_OUT);
    errorBlock.classList.add('hidden');
    container.classList.add(FADE_IN);
    container.classList.remove('hidden');
  }
  back.addEventListener('click', returnBack)


}
export default createError;
