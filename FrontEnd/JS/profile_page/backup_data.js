let token = JSON.parse(sessionStorage.getItem("token"));
let backup_users_data = document.querySelector(".profile.backup-data .flex .backup:first-child")
let backup_books_data = document.querySelector(".profile.backup-data .flex .backup:nth-child(2)")
let backup_blocks_data = document.querySelector(".profile.backup-data .flex .backup:nth-child(3)")
let backup_shelfs_data = document.querySelector(".profile.backup-data .flex .backup:nth-child(4)")
let backup_all_data = document.querySelector(".profile.backup-data .backup.all")
let errorMsg =  document.querySelector(".profile.backup-data small")

// When Click On backup_users_data Backup This Data
backup_users_data.addEventListener("click",()=>{
    fetch(`http://localhost:3000/library/users/UsersBackup`,
    {
        method: 'GET',
        headers: new Headers({"Authorization": `Bearer ${token}`,'Content-Type': 'application/json'}),
    }).then(res => res.json())
    .then(res => {
        if (res == "backup completed"){
            errorMsg.textContent = "تمت استعاده البيانات"
        }
        setTimeout(()=>{
            errorMsg.textContent = ""
        },4000)
    })
    .catch(e => console.log(e))
})

// When Click On backup_blocks_data Backup This Data
backup_blocks_data.addEventListener("click",()=>{
    fetch(`http://localhost:3000/library/blocks/BlocksBackup`,
    {
        method: 'GET',
        headers: new Headers({"Authorization": `Bearer ${token}`,'Content-Type': 'application/json'}),
    }).then(res => res.json())
    .then(res => {
        if (res == "backup completed"){
            errorMsg.textContent = "تمت استعاده البيانات"
        }
        setTimeout(()=>{
            errorMsg.textContent =""
        },4000)
    })    
    .catch(e => console.log(e))
})

// When Click On backup_books_data Backup This Data
backup_books_data.addEventListener("click",()=>{
    fetch(`http://localhost:3000/library/books/BooksBackup`,
    {
        method: 'GET',
        headers: new Headers({"Authorization": `Bearer ${token}`,'Content-Type': 'application/json'}),
    }).then(res => res.json())
    .then(res => {
        if (res == "backup completed"){
            errorMsg.textContent = "تمت استعاده البيانات"
        }
        setTimeout(()=>{
            errorMsg.textContent = ""
        },4000)
    })    
    .catch(e => console.log(e))
})

// When Click On backup_shelfs_data Backup This Data
backup_shelfs_data.addEventListener("click",()=>{
    fetch(`http://localhost:3000/library/shelfs/ShelfsBackup`,
    {
        method: 'GET',
        headers: new Headers({"Authorization": `Bearer ${token}`,'Content-Type': 'application/json'}),
    }).then(res => res.json())
    .then(res => {
        if (res == "backup completed"){
            errorMsg.textContent = "تمت استعاده البيانات"
        }
        setTimeout(()=>{
            errorMsg.textContent = ""
        },4000)
    })    
    .catch(e => console.log(e))
})

// When Click On backup_all_data Backup This Data
backup_all_data.addEventListener("click",()=>{
    fetch(`http://localhost:3000/library/FullBackup`,
    {
        method: 'GET',
        headers: new Headers({"Authorization": `Bearer ${token}`,'Content-Type': 'application/json'}),
    }).then(res => res.json())
    .then(res => {
        if (res == "backup completed"){
            errorMsg.textContent = "تمت استعاده البيانات"
        }
        setTimeout(()=>{
            errorMsg.textContent = ""
        },4000)
    })    
    .catch(e => console.log(e))
})
