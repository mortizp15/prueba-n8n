
export interface Product {
    description: string;
    price: number;
}

const phone: Product = {
    description: 'Nokia A1',
    price: 200
}

const tablet: Product = {
    description: 'iPad Air',
    price: 800
}

interface TaxCalculationOptions {
    tax: number,
    products: Product[]
}

export function taxCalculation( { products, tax }: TaxCalculationOptions ): [number, number] {

    let total = 0


    products.forEach( ({ price }) => {
        total += price
    })

    return [ total, total * tax ]
}



const shoppingCart = [phone, tablet]
const tax = 0.15


const [ total, resultadoTax ] = taxCalculation({
    products: shoppingCart,
    tax
})


