import { IProduct } from "./IProduct";
import { added } from "./updateStorage";



export function updateAddedItems (items: Array<IProduct>, cards:HTMLCollectionOf<Element>) {
  const storage = window.sessionStorage;
  const added = JSON.parse(storage.getItem('addedProducts') as string) as added;
  const amount = document.querySelectorAll('.added_amount');

  const itemsNames = Object.keys(added);
  const itemsAmount = Object.values(added);

  for (let i = 0; i < items.length; i++) {
    
    if (itemsNames.includes(items[i].name) && Number(itemsAmount[i]) !== 0) {
      cards[i].children[1].classList.add('added');
      amount[i].textContent = itemsAmount[itemsNames.indexOf(items[i].name)];
    }
    if ((itemsNames.includes(items[i].name) && Number(itemsAmount[i]) === 0)) {
      cards[i].children[1].classList.remove('added');
    }
  }
}