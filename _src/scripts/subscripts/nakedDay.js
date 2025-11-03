const q = new Date();
const m = q.getMonth() + 1;
const d = q.getDate();
if (`${m}-${d}` == '4-9') {
  console.log('CSS Naked Day!');
  [...document.querySelectorAll('style, link[rel="stylesheet"]')].forEach(x => x.remove());
}
