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
            statusText: "البريد الألكتروني غير صحيح أو كلمه المرور غير صحيحه", // res.statusText
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
            statusText: "البريد الألكتروني غير موجود", // res.statusText
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

// Search Book Engine API
export async function searchBookEngine (key , value) {
    let res = await fetch(`https://st-athanasius-library.com.up.railway.app/library/books/search?${key}=${value}`,
    {
        method: 'GET',
        headers: new Headers({'Content-Type': 'application/json'}),
    });

    if (!res.ok){
        throw {
            message: res,
            statusText: "الكتاب غير موجود", // res.statusText
            status: res.status
        }
    }

    let data = await res.json();
    return data
}

// Edit Book API
export async function editBook (id , token , edit) {
    let res = await fetch(`https://st-athanasius-library.com.up.railway.app/library/books/${id}`,
    {
        method: 'PUT',
        headers: new Headers({'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`}),
        body: JSON.stringify(edit)
    });

    if (!res.ok){
        throw {
            message: res,
            statusText: "البوغير صحيحه", // res.statusText
            status: res.status
        }
    }

    let data = await res.json();
    return data
}

// All Libraries API
export async function allLibraries () {
    let res = await fetch(`https://st-athanasius-library.com.up.railway.app/library/librarys`,
    {
        method: 'Get',
        headers: new Headers({'Content-Type': 'application/json'}),
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

// All Blocks API
export async function allBlocks (library_id) {
    let res = await fetch(`https://st-athanasius-library.com.up.railway.app/library/blocks/librarys/${JSON.parse(library_id)}`,
    {
        method: 'Get',
        headers: new Headers({'Content-Type': 'application/json'}),
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

// All Shelfs API
export async function allShelfs () {
    let res = await fetch(`https://st-athanasius-library.com.up.railway.app/library/shelfs`,
    {
        method: 'Get',
        headers: new Headers({'Content-Type': 'application/json'}),
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
