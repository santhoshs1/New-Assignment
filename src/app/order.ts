import { ShoppingCart } from 'src/app/models1';

export interface Order {
    orderDetails: ShoppingCart[];
    
    cartTotal: number;
    orderId: string;
    orderDate:Date

}
