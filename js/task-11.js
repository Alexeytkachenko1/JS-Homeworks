/*
 * Работем с коллекцией товаров в корзине:
 * - getItems()
 * - add(product)
 * - remove(productName)
 * - clear()
 * - countTotalPrice()
 * - increaseQuantity(productName)
 * - decreaseQuantity(productName)
 *
 * { name: '🍎', price: 50 }
 * { name: '🍇', price: 70 }
 * { name: '🍋', price: 60 }
 * { name: '🍓', price: 110 }
 */

const cart = {
  items: [],
  getItems() {
    return this.items;
  },
  add(product) {
    this.items.push({
      ...product,
      count: 1,
    });
  },
  remove(productName) {
    const newArr = [];
    for (const element of this.items) {
      if (element.name !== productName) {
        newArr.push(element);
      }
    }
    this.items = newArr;
  },
  clear() {
    this.items = [];
  },
  countTotalPrice() {
    let sum = 0;
    for (const element of this.items) {
      sum += element.price;
    }
    return sum;
  },
  increaseQuantity(productName) {
    const newArr = [];
    for (const element of this.items) {
      newArr.push(
        element.name === productName
          ? {
              ...element,
              count: element.count + 1,
            }
          : element,
      );
    }
    this.items = newArr;
  },
  decreaseQuantity(productName) {
    const newArr = [];
    for (const element of this.items) {
      newArr.push(
        element.name === productName
          ? {
              ...element,
              count: element.count - 1 < 1 ? 1 : element.count - 1,
            }
          : element,
      );
    }
    this.items = newArr;
  },
};

console.table(cart.getItems());

cart.add({ name: '🍎', price: 50 });
cart.add({ name: '🍇', price: 60 });
cart.add({ name: '🍋', price: 60 });
cart.add({ name: '🍓', price: 110 });

console.table(cart.getItems());
console.log('Total: ', cart.countTotalPrice());
cart.remove('🍎');
console.table(cart.getItems());

cart.increaseQuantity('🍓');
console.table(cart.getItems());
console.log('Total: ', cart.countTotalPrice());
cart.decreaseQuantity('🍓');
cart.decreaseQuantity('🍓');
console.table(cart.getItems());
console.log('Total: ', cart.countTotalPrice());

cart.clear();
console.table(cart.getItems());
// console.log('Total: ', cart.countTotalPrice());
