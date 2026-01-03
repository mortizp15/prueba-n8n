import { Product, taxCalculation } from "./06-function-destructuring";

const shoppingCart: Product[] = [
    {
        description: 'iPhone 12',
        price: 500
    },
    {
        description: 'Mac',
        price: 1200
    }
];

const [ total, resultadoTax ] = taxCalculation({
    tax: 0.15,
    products: shoppingCart
})

console.log('Total: ', total)
console.log('Tax: ', resultadoTax)