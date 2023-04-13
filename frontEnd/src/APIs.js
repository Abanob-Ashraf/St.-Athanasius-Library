// Login API
export async function login (login) {
    let res = await fetch('https://st-athanasius-library.com.up.railway.app/library/users/login',
    {
        method: 'POST',
        headers: new Headers({'Content-Type': 'application/json'}),
        body: JSON.stringify(login)
    });

    if (!res.ok){
        throw {
            message: res,
            statusText: res.statusText,
            status: res.status
        }
    }

    let data = await res.json();
    return data
}


// Get Mail API
export async function getMail (getMail) {
    let res = await fetch('https://st-athanasius-library.com.up.railway.app/library/users/resetPassword',
    {
        method: 'POST',
        headers: new Headers({'Content-Type': 'application/json'}),
        body: JSON.stringify(getMail)
    });

    if (!res.ok){
        throw {
            message: res,
            statusText: res.statusText,
            status: res.status
        }
    }

    let data = await res.json();
    return data
}


// Reset Password API
export async function resetPassword (resetPassword , token) {
    let res = await fetch('https://st-athanasius-library.com.up.railway.app/library/users/NewPassword',
    {
        method: 'POST',
        headers: new Headers({'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`}),
        body: JSON.stringify(resetPassword)
    });

    if (!res.ok){
        throw {
            message: res,
            statusText: res.statusText,
            status: res.status
        }
    }

    let data = await res.json();
    return data
}
