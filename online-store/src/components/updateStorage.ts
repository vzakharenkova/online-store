// import HTMLEl from './const';
const storage = window.sessionStorage;
export type added = {
  [key: string]: string;
}
export const addedProducts: added = {};
export function updateAddedProducts(event:Event) {
  const button = event.currentTarget as HTMLElement;
  const productInfo = button.parentElement?.parentElement?.parentElement?.nextElementSibling;
  
const productName = productInfo?.children[0].textContent as string;

  if (button.classList.contains('add_to_basket_logo')) {
    if(typeof productName === 'string') {
      addedProducts[productName] = button.previousElementSibling?.textContent as string;
    }
    
    storage.setItem('addedProducts', JSON.stringify(addedProducts));
  }
  if (button.classList.contains('remove_from_basket_logo')) {
    if(typeof productName === 'string') {
      addedProducts[productName] = button.nextElementSibling?.textContent as string;
    }
    
    storage.setItem('addedProducts', JSON.stringify(addedProducts));
  }
  
  
}