import { IProduct } from './IProduct';
import pageElements from './pageElements';
import { drawData } from './drawData';
import { searchResult } from './search';
import { updateAddedItems } from "./updateAddedItems";

// const storage = window.localStorage;


// window.addEventListener('beforeunload', () => storage.setItem('userSort', select.value));

export function selectHendler (products:Array<IProduct>, event: Event) {
  const optionValue = (event.target as HTMLSelectElement).value;
  const selectValue =  pageElements.select.value;
  const allFilter = document.getElementsByClassName('checked');
  let contentToSort: Array<IProduct>;
  if ((allFilter.length === 0 && event.target !== pageElements.resetBtn) || (allFilter.length > 0 && event.target === pageElements.resetBtn)) {
    contentToSort = products;
  } else {
    contentToSort = searchResult;
  }
  
  if (optionValue === "name_up" || selectValue === "name_up") {
    contentToSort.sort(sortAZ);
  }
  if (optionValue === "name_down" || selectValue === "name_down") {
    contentToSort.sort(sortZA);
  }
  if (optionValue === "price_up" || selectValue === "price_up") {
    contentToSort.sort(sortMinMax);
  }
  if (optionValue === "price_down" || selectValue === "price_down") {
    contentToSort.sort(sortMaxMin);
  }
  pageElements.productsField.innerHTML ="";
  if (contentToSort.length === 0) {
    pageElements.productsField.innerHTML = "<div id='not_found'>Sorry, no item is found<div>";
  } else {
    pageElements.productsResult.innerText = `${contentToSort.length} items found`
    drawData(contentToSort);
  }

  const productCards = document.getElementsByClassName('product_card');
  updateAddedItems(contentToSort, productCards);
}

function sortMinMax (a:IProduct, b:IProduct) {
  return a.price - b.price;
}

function sortMaxMin (a:IProduct, b:IProduct) {
  return b.price - a.price;
}

function sortAZ (a:IProduct, b:IProduct) {
  const nameA = a.name.toLocaleLowerCase();
  const nameB = b.name.toLocaleLowerCase();
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  return 0;
}
function sortZA (a:IProduct, b:IProduct) {
  const nameA = a.name.toLocaleLowerCase();
  const nameB = b.name.toLocaleLowerCase();
  if (nameA > nameB) {
    return -1;
  }
  if (nameA < nameB) {
    return 1;
  }
  return 0;
}
