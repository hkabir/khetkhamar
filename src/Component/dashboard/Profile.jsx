import { useEffect } from "react"
import { useHistory } from "react-router"
import { useGlobalContext } from "../../reducer/cartContext"

const Profile = () => {

    const history = useHistory()
    const { getToken } = useGlobalContext()
    const { user } = getToken

    useEffect(() => {
        if(user === undefined) history.push('/')
        console.log('Logged in user', user)
    }, [])

    // URL : https://test2.khetkhamar.org/api/react/update/profile

    // HEADERS : {"Authorization" : "Bearer yourTokenHere"}

    // DATA : {
    //             "name": "Yoo !",
    //             "email": "yoo@gmail.com",
    //             "phone": "01111111111",
    //             "old_password": "12345678",
    //             "new_password": "12345678"
    //         }

    // METHOD : POST

    return (
        <>
            <form>
                <input type="text" defaultValue={user.name} />
                <input type="text" defaultValue={user.email} />
                <input type="text" defaultValue={user.name} />
                <input type="text" defaultValue={user.name} />
            </form>
        </>
    )
}
export default Profile