import { environment } from 'src/environments/environment'


export const baseUrl = environment.production ? 'http://api.shoppingcart.com': 'http://localHost:3000'
export const productsUrl = baseUrl + '/products'
export const cartUrl = baseUrl + '/cart'

