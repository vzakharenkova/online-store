import { IProduct } from "./IProduct";
import pageElements from './pageElements';
import { drawData } from "./drawData";

type filtersObj = {
  [key: string]: Array<string | boolean>
}

export const obj:filtersObj = {};  

export let filterResult:Array<IProduct> = [];

export function filterData(products:Array<IProduct>, event: Event) {
  
  let filteredProducts = products;
  const filter = event.target as HTMLInputElement;
  const criterium = filter.getAttribute("name") as string;
  const value = filter.getAttribute("id") as string;

  if (!Object.prototype.hasOwnProperty.call(obj, criterium)) {
    obj[criterium] = [value];
    filter.classList.add('checked');
  } else if (Object.prototype.hasOwnProperty.call(obj, criterium) && obj[criterium].includes(value)) {
    obj[criterium].splice(obj[criterium].indexOf(value), 1);
    filter.classList.remove('checked');
  } else {
    obj[criterium].push(value);
    filter.classList.add('checked');
  }
  if (Object.prototype.hasOwnProperty.call(obj, criterium) && obj[criterium].length === 0) {
    delete obj[criterium];
  }
  const filtersArr = Object.entries(obj);

  for (let i = 0; i < filtersArr.length; i++) {
    const currentFilteredProducts:Array<IProduct> = [];
    filteredProducts.forEach(p => {
      const c = filtersArr[i][0];
      let v: string | boolean;
      switch (c) {
        case "category":
          v = p.category;
          if (filtersArr[i][1].includes(v)) {
            currentFilteredProducts.push(p)
          }
          break;
        case "type":  
        v = p.type;
          if (filtersArr[i][1].includes(v)) {
            currentFilteredProducts.push(p)
          }
        break;
        case "size":  
          v = p.size;
          if (filtersArr[i][1].includes(v)) {
            currentFilteredProducts.push(p)
          }
        break;
        case "popular":  
          v = p.popular.toString();
          if (filtersArr[i][1].includes(v)) {
            currentFilteredProducts.push(p)
          }
        break;
        case "new":  
          v = p.new.toString();
          if (filtersArr[i][1].includes(v)) {
            currentFilteredProducts.push(p)
          }
      }
    })
  filteredProducts = Array.from(currentFilteredProducts);
  }
  filterResult = Array.from(filteredProducts);
  pageElements.productsField.innerHTML = '';
  const checkedFilters = document.getElementsByClassName('checked');
  if (filteredProducts.length === 0) {
    pageElements.productsField.innerHTML = "<div id='not_found'>Sorry, no item is found<div>";
  } 
  else if (checkedFilters.length === 0) {
    drawData(products);
    pageElements.productsResult.innerText = `${products.length} items found`;
  } 
  else {
    drawData(filteredProducts);
    pageElements.productsResult.innerText = `${filteredProducts.length} items found`;
  }
}
