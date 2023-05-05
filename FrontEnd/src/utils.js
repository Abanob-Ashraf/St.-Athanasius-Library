import { redirect } from "react-router-dom"

export async function requirdAuth () {
    const isLoggend = sessionStorage.getItem("user");
    if (!isLoggend){
        throw redirect("/")
    }
    return null;
}

// export async function reverceRequirdAuth () {
//     const isLoggend = sessionStorage.getItem("user");
//     if (isLoggend){
//         throw redirect("/")
//     }
//     return null;
// }