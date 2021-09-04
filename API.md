# API | Hridoy

## API Base URL

    1) https://test2.khetkhamar.org/api/react/

## Server Image Base URL

    1) https://khetkhamar.org/public/

## Provided Apis

*Categories* DONE

    URL : https://test2.khetkhamar.org/api/react/categories?page=1

    METHOD : GET

*Category wise products* DONE

    URL : https://test2.khetkhamar.org/api/react/products/category/{categoryId}?page=1

    METHOD : GET


*Send OTP to mobile number* DONE

    URL : https://test2.khetkhamar.org/api/react/auth/login-using-otp

    DATA : {"phone_number" : "+8801736187462"}

    METHOD : POST

*Resend OTP to mobile number + Resend OTP* DONE

    URL : https://test2.khetkhamar.org/api/react/auth/resend-otp

    DATA : {"phone_number" : "+8801736187462"}

    METHOD : POST

*verify OTP & Signin | Validate OTP + User login using OTP validation + User signup (phone number) + Login using phone number* DONE

    URL : https://test2.khetkhamar.org/api/react/auth/otp-verify

    DATA : {"user_id" : 1, "code" : 1234}

    METHOD : POST

*Get Authenticated user* DONE
   
    URL : https://test2.khetkhamar.org/api/react/me
   
    HEADERS : {"Authorization" : "Bearer yourTokenHere"}
   
    METHOD : GET

*Get Authenticated user's shipping + billing address* DONE
   
    URL : https://test2.khetkhamar.org/api/react/addresses/{shipping_address || billing_address}/{userId}

    HEADERS : {"Authorization" : "Bearer yourTokenHere"}

    METHOD : GET

*Store Authenticated user's shipping + billing address* DONE
   
    URL : https://test2.khetkhamar.org/api/react/address/store
   
    HEADERS : {"Authorization" : "Bearer yourTokenHere"}
   
    DATA : {
                "user_id" : 9,
                "address_type" : "billing_address || shipping_address",
                "address" : "My address",
                "country" : "My country",
                "city" : "My city",
                "postal_code" : "My postal_code",
                "phone" : "+8801911111111"
            }

    METHOD : POST

*Update Authenticated user's shipping + billing address* DONE
   
    URL : https://test2.khetkhamar.org/api/react/address/update
   
    HEADERS : {"Authorization" : "Bearer yourTokenHere"}
   
    DATA : {
                "id" : {addressId}
                "address_type" : "billing_address || shipping_address",
                "address" : "My address",
                "country" : "My country",
                "city" : "My city",
                "postal_code" : "My postal_code",
                "phone" : "+8801911111111"
            }

    METHOD : POST

*Delete Authenticated user's shipping + billing address* DONE
   
    URL : https://test2.khetkhamar.org/api/react/address/delete/{addressId}
   
    HEADERS : {"Authorization" : "Bearer yourTokenHere"}
   
    METHOD : DELETE

*Order place* DONE
   
    URL : https://test2.khetkhamar.org/api/react/place-order
   
    HEADERS : {"Authorization" : "Bearer yourTokenHere"}
   
    DATA : {
                "payment_type": "{cash_on_delivery || sslcommerze}",
                "grand_total": "1000",
                "shipping_cost": "30",
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
            }

    METHOD : POST

*Change email + change password + change mobile number + change name* DONE

    URL : https://test2.khetkhamar.org/api/react/update/profile

    HEADERS : {"Authorization" : "Bearer yourTokenHere"}

    DATA : {
                "name": "Yoo !",
                "email": "yoo@gmail.com",
                "phone": "01111111111",
                "old_password": "12345678",
                "new_password": "12345678"
            }

    METHOD : POST

*Get wishlists* DONE

    URL : https://test2.khetkhamar.org/api/react/wishlists

    HEADERS : {"Authorization" : "Bearer yourTokenHere"}

    METHOD : GET

*Get wishlists* DONE

    URL : https://test2.khetkhamar.org/api/react/wishlist/store

    HEADERS : {"Authorization" : "Bearer yourTokenHere"}

    DATA : {
                "product_id": {product_id}
            }

    METHOD : POST

*Delete wishlist* DONE

    URL : https://test2.khetkhamar.org/api/react/wishlist/delete/{wishlistId}

    HEADERS : {"Authorization" : "Bearer yourTokenHere"}

    METHOD : DELETE