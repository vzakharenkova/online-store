import noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';
// import { products } from '..';

const priceSlider = document.getElementById('price_slider') as HTMLElement;
const amountSlider = document.getElementById('amount_slider') as HTMLElement;
// const priceArr:Array<number> = [];

// window.addEventListener('load', p)
// function p() {
//   products.forEach(p => priceArr.push(p['price']));
//   console.log(priceArr);
// }

noUiSlider.create(priceSlider, {
    start: [0, 100],
    connect: true,
    range: {
        'min': 0,
        'max': 100
    }
});
noUiSlider.create(amountSlider, {
  start: [0, 100],
  connect: true,
  range: {
      'min': 0,
      'max': 100
  }
});
