import { Product } from "../types";

const listItemResponse: Product[] = [];

// Image URLs list
const imageUrls = [
  "https://bizweb.dktcdn.net/100/369/010/products/nt5149-pansvm4c-1-vinr-hinh-mat-truoc-0.jpg?v=1691486368703",
  "https://www.dkny.com/media/catalog/product/r/2/r24cbw34_r24cbw34c3h2_v2_1.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=624&width=455&canvas=455:624",
  "https://www.monsoon.co.uk/dw/image/v2/BDLV_PRD/on/demandware.static/-/Sites-monsoon-master-catalog/default/dwab66ba42/images/large/01_64118301_2.jpg?sw=594&sh=761&sm=cut",
  "https://pacsafe.com/cdn/shop/files/Homepage_ProductCarousel_02_89983818-9b6b-4a3e-b323-a8f821f8a770_1600x.jpg?v=1675257894",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDhjyXHFbTp_2yOJVD1_7I6wCNgUUn3y_i4A&usqp=CAU",
];

const numberOfProducts = 2000;

for (let i = 1; i <= numberOfProducts; i++) {
  const randomImageUrl =
    imageUrls[Math.floor(Math.random() * imageUrls.length)];
  const product: Product = {
    product_id: i,
    name: `Product Name ${i}`,
    description: `Product Description ${i}`,
    image_url: randomImageUrl,
  };
  listItemResponse.push(product);
}

export default listItemResponse;
