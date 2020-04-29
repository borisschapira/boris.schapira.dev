/************************************************
  A very poor attempt at tag cloud management
  on the dedicated page.
************************************************/
const tagcountElement = document.getElementById('tagcount');
if (tagcountElement) {
  tagcountElement.style.display = 'block';

  [...document.querySelectorAll('.tagcount button')].forEach((b) => {
    b.addEventListener('click', (e) => {
      e.target.classList.toggle('active');

      // Get active tags
      const activeTags = [
        ...document.querySelectorAll('.tagcount .active'),
      ].reduce((acc, x) => [...acc, 'tag-' + x.dataset['tagSlug']], []);

      // Display articles
      [...document.querySelectorAll('article')].forEach((article) => {
        if (
          activeTags.length == 0 ||
          activeTags.reduce(
            (accumulator, currentValue) =>
              accumulator || article.classList.contains(currentValue),
            false
          )
        ) {
          article.style.display = 'block';
        } else {
          article.style.display = 'none';
        }
      });
    });
  });
}
