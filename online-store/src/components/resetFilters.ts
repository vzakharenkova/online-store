import pageElements from './pageElements';
// import { drawData } from './drawData';
import { obj } from './filter';
import { IProduct } from './IProduct';
import { addedProducts } from './updateStorage';
// import { search } from './search';

const storage = window.localStorage;

export function resetFilters(products:Array<IProduct>) {

  pageElements.filters.forEach(f => {
    f.checked = false;
    f.classList.remove('checked');
  });
  pageElements.productsField.innerHTML = "";
  pageElements.productsResult.innerText = `${products.length} items found`
  // searchField.value = "";
  storage.clear();
  storage.setItem('addedProducts', JSON.stringify(addedProducts))
  Object.keys(obj).forEach(k =>{
    delete obj[k];
  })
}
