import { IProduct } from "./IProduct";
import pageElements from './pageElements';

export function drawData(productsResult:Array<IProduct>) {
  
  productsResult.forEach(p => pageElements.productsField.insertAdjacentHTML('beforeend', 
  `<div class="product_card">
    <div class="product_img">
      <img src=${p.src}>
      <div class="product_hover_side">
        <div class="basket_actions">
          <div class="remove_from_basket_logo basket_btn">
            <img src="./assets/remove_from_basket.svg">
          </div>
          <div class="added_amount">0</div>
          <div class="add_to_basket_logo basket_btn">
            <img src="./assets/add_to_basket.svg">
          </div>
          <div class="left_amount">${p.amount} items left</div>
        </div>  
      </div>
    </div>
    <div class="product_info">
      <div class="product_name">${p.name}</div>
      <div class="product_price">${p.price} $</div>
    </div>
  </div>`
  ));
}
