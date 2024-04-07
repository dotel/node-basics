orderItem
id, order_id, product_item_id, price, quantity



select sum(price), order_id from orderItem group by order_id

ProductItem




Order
id, user_id, order_status
