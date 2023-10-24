const prodURL = "https://st-athanasius-library.com.up.railway.app";
const localURL = "https://localhost:3000";
let server = false;

// Login API
export async function login(login) {
  let res = await fetch(`${server ? prodURL : localURL}/library/users/login`, {
    method: "POST",
    headers: new Headers({ "Content-Type": "application/json" }),
    body: JSON.stringify(login),
  });

  if (!res.ok) {
    throw {
      message: res,
      statusText: await res.json(),
      status: res.status,
    };
  }

  let data = await res.json();
  return data;
}

// Get Mail API
export async function getMail(getMail) {
  let res = await fetch(
    `${server ? prodURL : localURL}/library/users/resetPassword`,
    {
      method: "POST",
      headers: new Headers({ "Content-Type": "application/json" }),
      body: JSON.stringify(getMail),
    }
  );

  if (!res.ok) {
    throw {
      message: res,
      statusText: await res.json(),
      status: res.status,
    };
  }

  let data = await res.json();
  return data;
}

// Reset Password API
export async function resetPassword(value, token) {
  let res = await fetch(
    `${server ? prodURL : localURL}/library/users/NewPassword`,
    {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      }),
      body: JSON.stringify(value),
    }
  );

  if (!res.ok) {
    throw {
      message: res,
      statusText: await res.json(),
      status: res.status,
    };
  }

  let data = await res.json();
  return data;
}

// Search Book Engine API
export async function searchBookEngine(key, value) {
  let res = await fetch(
    `${server ? prodURL : localURL}/library/books/search?${key}=${value}`,
    {
      method: "GET",
      headers: new Headers({ "Content-Type": "application/json" }),
    }
  );

  if (!res.ok) {
    throw {
      message: res,
      statusText: "الكتاب غير موجود", // res.statusText
      status: res.status,
    };
  }

  let data = await res.json();
  return data;
}

// Search Book In Block API
export async function searchBookInBlock(library_value, block_value) {
  let res = await fetch(
    `${
      server ? prodURL : localURL
    }/library/books/getBooksInThisBlock?library_id=${library_value}&block_id=${block_value}`,
    {
      method: "GET",
      headers: new Headers({ "Content-Type": "application/json" }),
    }
  );

  if (!res.ok) {
    throw {
      message: res,
      statusText: "لايوجد كُتب",
      status: res.status,
    };
  }

  let data = await res.json();
  return data;
}

// Search Book In Shelf API
export async function searchBookInShelf(
  library_value,
  block_value,
  shelf_value
) {
  let res = await fetch(
    `${
      server ? prodURL : localURL
    }/library/books/getBooksInThisBlock?library_id=${library_value}&block_id=${block_value}&shelf_id=${shelf_value}`,
    {
      method: "GET",
      headers: new Headers({ "Content-Type": "application/json" }),
    }
  );

  if (!res.ok) {
    throw {
      message: res,
      statusText: "لايوجد كُتب",
      status: res.status,
    };
  }

  let data = await res.json();
  return data;
}

// Latest Books API
export async function SearchLatestBooks(token) {
  let res = await fetch(
    `${server ? prodURL : localURL}/library/books/latestBooks`,
    {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      }),
    }
  );

  if (!res.ok) {
    throw {
      message: res,
      statusText: "لايوجد كُتب",
      status: res.status,
    };
  }

  let data = await res.json();
  return data;
}

// My Books API
export async function SearchMyBooks(token) {
  let res = await fetch(
    `${server ? prodURL : localURL}/library/books/user/myBooks`,
    {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      }),
    }
  );

  if (!res.ok) {
    throw {
      message: res,
      statusText: "لايوجد كُتب",
      status: res.status,
    };
  }

  let data = await res.json();
  return data;
}

// Search User Engine API
export async function searchUserEngine(key, value, token) {
  let res = await fetch(
    `${server ? prodURL : localURL}/library/users/search?${key}=${value}`,
    {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      }),
    }
  );

  if (!res.ok) {
    throw {
      message: res,
      statusText: "المستخدم غير موجود", // res.statusText
      status: res.status,
    };
  }

  let data = await res.json();
  return data;
}

// All Users API
export async function allUsers(token) {
  let res = await fetch(`${server ? prodURL : localURL}/library/users/`, {
    method: "GET",
    headers: new Headers({
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    }),
  });

  if (!res.ok) {
    throw {
      message: res,
      statusText: "لا يوجد مستخدمين", // res.statusText
      status: res.status,
    };
  }

  let data = await res.json();
  return data;
}

// Unavilable Users API
export async function unavilableUsers(token) {
  let res = await fetch(
    `${server ? prodURL : localURL}/library/users/unavilable`,
    {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      }),
    }
  );

  if (!res.ok) {
    throw {
      message: res,
      statusText: "لا يوجد مستخدمين محذوفين", // res.statusText
      status: res.status,
    };
  }

  let data = await res.json();
  return data;
}

// Edit Book API
export async function editBook (id , edit , token ) {
    let res = await fetch(`${server ? prodURL : localURL}/library/books/${id}`,
    {
        method: 'PUT',
        headers: new Headers({'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`}),
        body: JSON.stringify(edit)
    });

    if (!res.ok){
        throw {
            message: res,
            statusText: await res.json(),
            status: res.status
        }
    }

    let data = await res.json();
    return data
}

// All Libraries API
export async function allLibraries () {
    let res = await fetch(`${server ? prodURL : localURL}/library/librarys`,
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
    let res = await fetch(`${server ? prodURL : localURL}/library/blocks/librarys/${library_id}`,
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
export async function allShelfs (block_id) {
    let res = await fetch(`${server ? prodURL : localURL}/library/shelfs/block/${block_id}`,
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

// Edit User API
export async function editUser (id ,edit ,token) {
    let res = await fetch(`${server ? prodURL : localURL}/library/users/${id}`,
    {
        method: 'PUT',
        headers: new Headers({'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`}),
        body: JSON.stringify(edit)
    });

    if (!res.ok){
        throw {
            message: res,
            statusText: await res.json(),
            status: res.status
        }
    }

    let data = await res.json();
    return data
}

// Delete User API
export async function deleteUser (id ,token) {
    let res = await fetch(`${server ? prodURL : localURL}/library/users/${id}`,
    {
        method: 'DELETE',
        headers: new Headers({'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`}),
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

// Create User API
export async function createUser (edit, token) {
    let res = await fetch(`${server ? prodURL : localURL}/library/users/createNewUser`,
    {
        method: 'POST',
        headers: new Headers({'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`}),
        body: JSON.stringify(edit)
    });

    if (!res.ok){
        throw {
            message: res,
            statusText: await res.json(),
            status: res.status
        }
    }

    let data = await res.json();
    return data
}

// Edit User API
export async function changePassword (edit ,token) {
    let res = await fetch(`${server ? prodURL : localURL}/library/users/me/changePassword`,
    {
        method: 'PUT',
        headers: new Headers({'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`}),
        body: JSON.stringify(edit)
    });

    if (!res.ok){
        throw {
            message: res,
            statusText: await res.json(),
            status: res.status
        }
    }

    let data = await res.json();
    return data
}

// Create Library Engine API
export async function createLibraryEngine (edit ,token) {
    let res = await fetch(`${server ? prodURL : localURL}/library/librarys`,
    {
        method: 'POST',
        headers: new Headers({'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`}),
        body: JSON.stringify(edit)
    });

    if (!res.ok){
        throw {
            message: res,
            statusText: await res.json(),
            status: res.status
        }
    }

    let data = await res.json();
    return data
}

// Create Block Engine API
export async function createBlockEngine (edit ,token) {
    let res = await fetch(`${server ? prodURL : localURL}/library/blocks`,
    {
        method: 'POST',
        headers: new Headers({'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`}),
        body: JSON.stringify(edit)
    });

    if (!res.ok){
        throw {
            message: res,
            statusText: await res.json(),
            status: res.status
        }
    }

    let data = await res.json();
    return data
}

// Create Shelf Engine API
export async function createShelfEngine (edit ,token) {
    let res = await fetch(`${server ? prodURL : localURL}/library/shelfs`,
    {
        method: 'POST',
        headers: new Headers({'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`}),
        body: JSON.stringify(edit)
    });

    if (!res.ok){
        throw {
            message: res,
            statusText: await res.json(),
            status: res.status
        }
    }

    let data = await res.json();
    return data
}

// Create Books Engine API
export async function createBooksEngine (edit ,token) {
    let res = await fetch(`${server ? prodURL : localURL}/library/books`,
    {
        method: 'POST',
        headers: new Headers({'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`}),
        body: JSON.stringify(edit)
    });

    if (!res.ok){
        throw {
            message: res,
            statusText: await res.json(),
            status: res.status
        }
    }

    let data = await res.json();
    return data
}

// All Users Backup API
export async function allUsersBackup (token) {
    let res = await fetch(`${server ? prodURL : localURL}/library/users/UsersBackup`,
    {
        method: 'GET',
        headers: new Headers({'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`}),
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

// All Libraries Backup API
export async function allLibrariesBackup (token) {
    let res = await fetch(`${server ? prodURL : localURL}/library/librarys/LibrarysBackup`,
    {
        method: 'GET',
        headers: new Headers({'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`}),
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

// All Blocks Backup API
export async function allBlocksBackup (token) {
    let res = await fetch(`${server ? prodURL : localURL}/library/blocks/BlocksBackup`,
    {
        method: 'GET',
        headers: new Headers({'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`}),
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

// All Shelfs Backup API
export async function allShelfsBackup (token) {
    let res = await fetch(`${server ? prodURL : localURL}/library/shelfs/ShelfsBackup`,
    {
        method: 'GET',
        headers: new Headers({'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`}),
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

// All Books Backup API
export async function allBooksBackup (token) {
    let res = await fetch(`${server ? prodURL : localURL}/library/books/BooksBackup`,
    {
        method: 'GET',
        headers: new Headers({'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`}),
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

// All Backup API
export async function allBackup (token) {
    let res = await fetch(`${server ? prodURL : localURL}/library/FullBackup`,
    {
        method: 'GET',
        headers: new Headers({'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`}),
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