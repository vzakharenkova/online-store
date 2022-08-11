export default {
    productsField : (document.getElementById('products_field') as HTMLElement),
    filters : Array.from(document.querySelectorAll("input[type=checkbox]")) as Array<HTMLInputElement>,
    select : document.querySelector('select') as HTMLSelectElement,
    resetBtn : document.getElementById('clear_btn') as HTMLButtonElement,
    productsResult : document.getElementById('search_result') as HTMLElement,
    searchField : document.querySelector("input[type=search]") as HTMLInputElement,
    searchBtn : document.getElementById('search_btn') as HTMLElement,
    totalBasket : document.getElementById('products_amount_in_basket') as HTMLElement,
  }
