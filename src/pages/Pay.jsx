import { useState } from "react"

const Pay = () => {
    const [data, setData] = useState([1, 2, 3])
    
    const payNow = () => {
        fetch('https://test2.khetkhamar.org/api/react/place-order', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },            
            body: JSON.stringify({
                "payment_type": "sslcommerz",
                "grand_total": "1000",
                "shipping_cost": "0",
                "shipping_message": "This is a test shipping message",
                "address": "address",
                "city": "city",
                "postal_code": "1234",
                "country": "country",
                "cart": [
                            {
                                "seller_id": 10,
                                "product_id": 15,
                                "price": 12,
                                "quantity": 5
                            },
                            {
                                "seller_id": 20,
                                "product_id": 25,
                                "price": 12,
                                "quantity": 7
                            }
                        ]
            })
        })
    }
    return (
        <>
            <button onClick={() => payNow()} className="btn btn-success m-5 p-5">
                Pay now !!!
            </button>
        </>
    )
}

export default Pay