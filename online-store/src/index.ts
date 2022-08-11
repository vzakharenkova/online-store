import  "./style.css";
import "./components/rangeFilter"
import pageElements from './components/pageElements';
import { drawData } from "./components/drawData";
import { getProducts } from "./components/app";
import { IProduct } from "./components/IProduct";
import { filterData } from "./components/filter";
import { selectHendler } from "./components/sort";
import { resetFilters } from "./components/resetFilters";
import { search } from "./components/search";
import { updateBasket } from "./components/basket";
import { updateAddedProducts } from "./components/updateStorage";

// getProducts().then((products) => {
//   drawData(products as Array<IProduct>);
// //   const filtered = filter(res);
// //  const sort = sort(fliterd);
// });

async function start () {
  
  const storage = window.sessionStorage;
  const products = await getProducts();
  const _products = products as Array<IProduct>;
  if (storage.getItem("displaiedProducts")) {
    drawData(JSON.parse(storage.getItem("displaiedProducts") as string));
  } else drawData(_products);
  pageElements.filters.forEach((f: Element) => {
    f.addEventListener('change', e => filterData(_products, e));
  });
  pageElements.filters.forEach(f => {
    f.addEventListener('change', () => search(_products));
  })
  pageElements.filters.forEach(f => {
    f.addEventListener('change', e => selectHendler(_products, e));
  });
  
  pageElements.select.addEventListener('change', () => search(_products));
  pageElements.select.addEventListener('change', e => selectHendler(_products, e));
  pageElements.resetBtn.addEventListener('click', () => resetFilters(_products));
  pageElements.resetBtn.addEventListener('click', e => selectHendler(_products, e));
  pageElements.resetBtn.addEventListener('click', () => search(_products));
  pageElements.searchBtn.addEventListener('click', () => search(_products));
  document.body.addEventListener( 'mousemove', function () {
    const basketBtns = document.querySelectorAll('.basket_btn');
    basketBtns.forEach(btn => btn.addEventListener('click', updateBasket));
    basketBtns.forEach(btn => btn.addEventListener('click', updateAddedProducts));
  } );
}

start();

// const storage = window.localStorage;
//   if (storage.getItem("displaiedProducts")) {
//     const storageProducts: Array<IProduct> = [];
//     const idsArr = (storage.getItem("displaiedProducts") as string).split(",");
//     idsArr.forEach(id => {
//       for (let i = 0; i < products.length; i++) {
//         if (products[i]['id'].toString() === id) {
//           storageProducts.push(products[i]);
//           break;
//         }
//       }
//     })
//     drawData(storageProducts);
//   }
// }
