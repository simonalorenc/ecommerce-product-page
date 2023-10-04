export interface Product {
    title: string,
    description: string,
    salePrice: string,
    discount: string,
    regularPrice: string,
    photos: {
        mainPhoto: string, others: string[]
    }
}