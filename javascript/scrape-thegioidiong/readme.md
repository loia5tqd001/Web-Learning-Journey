Data scraped:
- Url: https://www.thegioididong.com/dtdd
- Script:

```javascript
JSON.stringify(
  Array.from(document.querySelectorAll('.homeproduct .item:not(.feature)')).map((item, id) => {
    const name = item.querySelector('h3').textContent;
    const image = item.querySelector('img').src;
    const price = +item.querySelector('.price strong').textContent.replace(/\.|₫/g, '');
    const crossPriceItem = item.querySelector('.price span');
    const crossPrice = crossPriceItem ? +crossPriceItem.textContent.replace(/\.|₫/g, '') : null;

    return {
      id: `product_${id + 1}`,
      name,
      price,
      crossPrice,
      image,
    };
  }),
  null,
  2,
);
```

- Steps: Access the url, open the console window (Ctrl + Shift + I), copy and paste the script to the console, run then see the result

- Sample result:
```json
[
  {
    "id": "product_1",
    "name": "Xiaomi Redmi Note 9S",
    "price": 5990000,
    "crossPrice": null,
    "image": "https://cdn.tgdd.vn/Products/Images/42/214924/xiaomi-redmi-note-9s-4gb-green-400x460-400x400.jpg"
  },
  {
    "id": "product_2",
    "name": "Samsung Galaxy A51 (6GB/128GB)",
    "price": 7990000,
    "crossPrice": null,
    "image": "https://cdn.tgdd.vn/Products/Images/42/211570/samsung-galaxy-a51-white-1-400x400.jpg"
  },
  {
    "id": "product_3",
    "name": "iPhone 11 64GB",
    "price": 21990000,
    "crossPrice": null,
    "image": "https://cdn.tgdd.vn/Products/Images/42/153856/iphone-11-red-400x400.jpg"
  },
  {
    "id": "product_4",
    "name": "OPPO A91",
    "price": 6990000,
    "crossPrice": null,
    "image": "https://cdn.tgdd.vn/Products/Images/42/217287/oppo-a91-trang-600x600-400x400.jpg"
  },
  {
    "id": "product_5",
    "name": "Vsmart Joy 3 (3GB/32GB)",
    "price": 2690000,
    "crossPrice": null,
    "image": "https://cdn.tgdd.vn/Products/Images/42/217920/vsmart-joy-3-tim-600x600-400x400.jpg"
  },
  {
    "id": "product_6",
    "name": "Realme C3",
    "price": 2990000,
    "crossPrice": null,
    "image": "https://cdn.tgdd.vn/Products/Images/42/218361/realme-c3-do-600x600-400x400.jpg"
  },
  {
    "id": "product_7",
    "name": "Samsung Galaxy Fold",
    "price": 50000000,
    "crossPrice": null,
    "image": "https://cdn.tgdd.vn/Products/Images/42/198158/samsung-galaxy-fold-black-400x400.jpg"
  },
  {
    "id": "product_8",
    "name": "iPhone 11 Pro Max 512GB",
    "price": 40990000,
    "crossPrice": 43990000,
    "image": "https://cdn.tgdd.vn/Products/Images/42/210654/iphone-11-pro-max-512gb-gold-400x400.jpg"
  },
  {
    "id": "product_9",
    "name": "iPhone 11 Pro Max 256GB",
    "price": 37990000,
    "crossPrice": null,
    "image": "https://cdn.tgdd.vn/Products/Images/42/210653/iphone-11-pro-max-256gb-black-400x400.jpg"
  },
  {
    "id": "product_10",
    "name": "Samsung Galaxy Z Flip",
    "price": 36000000,
    "crossPrice": null,
    "image": "https://cdn.tgdd.vn/Products/Images/42/213022/samsung-galaxy-z-flip-den-600x600-400x400.jpg"
  },
  {
    "id": "product_11",
    "name": "iPhone 11 Pro 256GB",
    "price": 34990000,
    "crossPrice": null,
    "image": ""
  },
  {
    "id": "product_12",
    "name": "iPhone 11 Pro Max 64GB",
    "price": 33990000,
    "crossPrice": null,
    "image": ""
  },
  {
    "id": "product_13",
    "name": "iPhone Xs Max 256GB",
    "price": 33990000,
    "crossPrice": null,
    "image": ""
  },
  {
    "id": "product_14",
    "name": "Samsung Galaxy S20 Ultra",
    "price": 27990000,
    "crossPrice": 29990000,
    "image": ""
  },
  {
    "id": "product_15",
    "name": "iPhone Xs Max 64GB",
    "price": 27990000,
    "crossPrice": null,
    "image": ""
  },
  {
    "id": "product_16",
    "name": "iPhone 11 256GB",
    "price": 24990000,
    "crossPrice": 25990000,
    "image": ""
  },
  {
    "id": "product_17",
    "name": "iPhone Xs 256GB",
    "price": 24990000,
    "crossPrice": null,
    "image": ""
  },
  {
    "id": "product_18",
    "name": "Huawei P40 Pro (Không có Google)",
    "price": 23990000,
    "crossPrice": null,
    "image": ""
  },
  {
    "id": "product_19",
    "name": "Samsung Galaxy S20+",
    "price": 21990000,
    "crossPrice": 23990000,
    "image": ""
  },
  {
    "id": "product_20",
    "name": "OPPO Find X2",
    "price": 23990000,
    "crossPrice": null,
    "image": ""
  },
  {
    "id": "product_21",
    "name": "iPhone 11 128GB",
    "price": 23990000,
    "crossPrice": null,
    "image": ""
  },
  {
    "id": "product_22",
    "name": "Samsung Galaxy S20",
    "price": 19490000,
    "crossPrice": 21490000,
    "image": ""
  },
  {
    "id": "product_23",
    "name": "iPhone Xs 64GB",
    "price": 20990000,
    "crossPrice": null,
    "image": ""
  },
  {
    "id": "product_24",
    "name": "Samsung Galaxy S10+",
    "price": 19990000,
    "crossPrice": null,
    "image": ""
  },
  {
    "id": "product_25",
    "name": "iPhone 8 Plus 64GB",
    "price": 14490000,
    "crossPrice": 15990000,
    "image": ""
  },
  {
    "id": "product_26",
    "name": "Xiaomi Mi Note 10 Pro",
    "price": 13490000,
    "crossPrice": 14990000,
    "image": ""
  }
]
```