export async function getProducts() {
  
  const requestURL = "./products.json";
  const response = await fetch(requestURL);
  if (response.ok) {
    const data = await response.json();
    console.log(data);
    return data;
  } else {
    alert(response.status);
  }
}
