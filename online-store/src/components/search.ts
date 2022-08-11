import { IProduct } from "./IProduct";
import pageElements from './pageElements';
import { filterResult } from "./filter";
import { drawData } from "./drawData";

export let searchResult:Array<IProduct> = [];


export function search(products:Array<IProduct>) {

  let searchArr: Array<IProduct>;
  searchResult = [];
  const searchValue = pageElements.searchField.value;
  const checkedFilters = document.getElementsByClassName('checked');
  
  
  if (checkedFilters.length === 0) {
    searchArr = products;
  } else {
    searchArr = filterResult;
  }

  for (let i = 0; i < searchArr.length; i++) {
    if (!searchValue) {
      searchResult.push(searchArr[i]);
    } else if (searchArr[i]["name"].toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) === true) {
      searchResult.push(searchArr[i]);
    }
  }
  pageElements.productsField.innerHTML = "";
  if (searchResult.length === 0) {
    pageElements.productsField.innerHTML = "<div id='not_found'>Sorry, no item is found<div>";
  } else drawData(searchResult);


  const productCards = document.getElementsByClassName('product_card');
  
  pageElements.productsResult.innerText = `${productCards.length} items found`;
  
}
