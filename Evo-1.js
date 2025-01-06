// Rearrange Fruites 
function rearrangeFruits(fruits) {
  const removedFruits = fruits.splice(-4);
   // Remove last 4 fruits
  fruits.unshift(...removedFruits);
   // Adding 
  return fruits;
}

const fruits = ["Apple", "Banana", "Orange", "Mango", "Pineapple", "Grapes", "Strawberry", "Watermelon", "Peach", "Kiwi"];
console.log(rearrangeFruits(fruits));