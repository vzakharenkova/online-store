import pageElements from './pageElements';

// const storage = window.localStorage;
// window.addEventListener('beforeunload', () => storage.setItem('totalBasket', (totalBasket.textContent?.trim() as string)));

export function updateBasket(event:Event) {
  
  const button = event.currentTarget as HTMLElement;
  const basketActions = button.parentElement as HTMLElement;
  const cardHoverSide = basketActions.parentElement as HTMLElement;
  const cardImage = cardHoverSide.parentElement as HTMLElement;
  const productInfo = cardImage.nextElementSibling as HTMLElement;
  pageElements.totalBasket = document.getElementById('products_amount_in_basket') as HTMLElement;
  if (button.classList.contains('add_to_basket_logo')) {
    const amountAdded = Number((button.previousElementSibling as Element).textContent);
    if (amountAdded === 0) {
      productInfo?.classList.add('added');
    }
    if (Number(pageElements.totalBasket.textContent) < 20) {
      (button.previousElementSibling as Element).textContent = `${amountAdded + 1}`;
      pageElements.totalBasket.textContent = `${Number(pageElements.totalBasket.textContent) + 1}`
    } else {
      alert('Impossible to add more than 20 items');
    }
  }
  if (button.classList.contains('remove_from_basket_logo')) {
    const amountAdded = Number((button.nextElementSibling as Element).textContent);
    if (Number(pageElements.totalBasket.textContent) > 0) {
      if (Number((button.nextElementSibling as Element).textContent) > 0) {
        (button.nextElementSibling as Element).textContent = `${amountAdded - 1}`;
        pageElements.totalBasket.textContent = `${Number(pageElements.totalBasket.textContent) - 1}`;
        if (amountAdded === 1) {
          productInfo?.classList.remove('added');
        }
      } 
    } else {
      alert('Your basket is empty');
    }
  }
}
