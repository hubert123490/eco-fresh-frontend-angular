export interface FilterRequest {
    productNamePrefix? : string | null;
    categories? : string[] | null
    priceFrom? : string | null
    priceTo? : string | null
    certifications? : string[] | null
}