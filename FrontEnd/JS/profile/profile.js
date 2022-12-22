// Header Function
function header(){
    let logout = document.querySelector(".header .container .menu #logout")
    let userLogin = document.querySelector(".header .container .user-login")
    let hiddenMenu = document.querySelector(".header .container .menu")

    function header() {
        let token = JSON.parse( sessionStorage.getItem("token"));
        fetch('http://localhost:3000/library/users/me',
            {
                method: 'GET',
                headers: new Headers({"Authorization": `Bearer ${token}`}),
            }).then(res => res.json())
            .then(res => {
                let welcome = document.querySelector(".header .container .menu .welcome")
                welcome.textContent = `${res.first_name} ${res.last_name}`
            })
            .catch(e => console.log(e))
    }
    header()

    userLogin.addEventListener("click",()=>{
        hiddenMenu.classList.toggle("clicked")
    })

    logout.addEventListener("click",()=>{
        sessionStorage.removeItem("token")
        location.href = "../../index.html"
    })
}

// UserGeneral Profile Function
function userGeneral(){
    function AuthorizationOne(data){
        let name = document.querySelector(".profile-landing .container .profile.general-info .name");
        let adminFlag = document.querySelector(".profile-landing .container .profile.general-info .admin-flag");
        let id = document.querySelector(".profile-landing .container .profile.general-info .id");

        
        name.textContent = `${data.first_name} ${data.last_name}`
        id.textContent = `#${data.id}`
        if (data.admin_flag == true) {
            adminFlag.textContent = `مدير`
        } else if (data.admin_flag == false){
            adminFlag.textContent = `مستخدم`
        }
    }

    
    function userG() {
        let token = JSON.parse( sessionStorage.getItem("token"));
        fetch('http://localhost:3000/library/users/me',
            {
                method: 'GET',
                headers: new Headers({"Authorization": `Bearer ${token}`}),
            }).then(res => res.json())
            .then(res => {
                AuthorizationOne(res)
            })
            .catch(e => console.log(e))
    }
    userG()
}


// userInfo Profile Function
function userInfo(){
    let userInfo = document.querySelector(".profile-landing .container .profile.user .user-info");
    let userInfoEdit = document.querySelector(".profile-landing .container .profile.user .user-info .edit");
    let userEdit = document.querySelector(".profile-landing .container .profile.user .edit-info");
    let userEditBack = document.querySelector(".profile-landing .container .profile.user .edit-info .back")

    userEditBack.addEventListener("click",()=>{
        userInfo.style.display = "block"
        userEdit.style.display = "none"
    })

    userInfoEdit.addEventListener("click",()=>{
        userInfo.style.display = "none"
        userEdit.style.display = "block"
    })


    function AuthorizationTwo(data){
        let firstName = document.querySelector(".profile-landing .container .profile.user .user-info .first-name span");
        let lastName = document.querySelector(".profile-landing .container .profile.user .user-info .last-name span");
        let email = document.querySelector(".profile-landing .container .profile.user .user-info .email span");
        let phone = document.querySelector(".profile-landing .container .profile.user .user-info .phone span");
        let created = document.querySelector(".profile-landing .container .profile.user .user-info .created-time span");

        firstName.textContent = data.first_name
        lastName.textContent = data.last_name
        email.textContent = data.email
        created.textContent = data.created_date
        if (data.phone_number == null) {
            phone.textContent = `لا يوجد`
        } else {
            phone.textContent = data.phone_number
        }
    }

    function userI() {
        let token = JSON.parse( sessionStorage.getItem("token"));
        fetch('http://localhost:3000/library/users/me',
            {
                method: 'GET',
                headers: new Headers({"Authorization": `Bearer ${token}`}),
            }).then(res => res.json())
            .then(res => {
                AuthorizationTwo(res)
            })
            .catch(e => console.log(e))
    }
    userI()

}

// EditInfo Profile Function
function editInfo(){

}

// Latest Books Function
function latestBook(){
    function AuthorizationThree(data){
        for (let i = 0 ; i <= data.length; i++){
            let booksName = document.querySelectorAll(".profile-landing .container .profile.latest-books .latest-book div p");
            let booksCreatedTime = document.querySelectorAll(".profile-landing .container .profile.latest-books .latest-book div span");
            let latestBook = document.querySelector(".profile-landing .container .profile.latest-books .latest-book");
            let latestBookCLick = document.querySelectorAll(".profile-landing .container .profile.latest-books .latest-book div p");
            let latestBookInfo = document.querySelector(".profile-landing .container .profile.latest-books .latest-book-info");
            let userEditBack = document.querySelector(".profile-landing .container .profile.latest-books .latest-book-info .back")
            let bookName = document.querySelector(".profile-landing .container .profile.latest-books .latest-book-info .book-name span")
            let bookAuthor = document.querySelector(".profile-landing .container .profile.latest-books .latest-book-info .book-author span")
            let bookApublisher = document.querySelector(".profile-landing .container .profile.latest-books .latest-book-info .publisher span")
            let bookCode = document.querySelector(".profile-landing .container .profile.latest-books .latest-book-info .book-code span")
            let bookCopies = document.querySelector(".profile-landing .container .profile.latest-books .latest-book-info .book-copies span")
            let bookCreated = document.querySelector(".profile-landing .container .profile.latest-books .latest-book-info .book-created span")

            booksName[i].textContent = data[i].book_name
            booksCreatedTime[i].textContent = data[i].created_date

            userEditBack.addEventListener("click",()=>{
                latestBook.style.display = "block"
                latestBookInfo.style.display = "none"
            })
        
            latestBookCLick.forEach((e)=>{
                e.addEventListener("click",()=>{
                    if (e.textContent == data[i].book_name){
                        latestBook.style.display = "none"
                        latestBookInfo.style.display = "block"
                        bookName.textContent = data[i].book_name
                        bookAuthor.textContent = data[i].author
                        bookApublisher.textContent = data[i].publisher
                        bookCode.textContent = data[i].book_code
                        bookCopies.textContent = data[i].number_of_copies
                        bookCreated.textContent = data[i].created_date

                        if (data[i].author == null){
                            bookAuthor.textContent = `لا يوجد`
                        }
                        if (data[i].publisher == null){
                            bookApublisher.textContent = `لا يوجد`
                        }
                    }
                })
            })
    
        }
    }

    function latestB() {
        let token = JSON.parse( sessionStorage.getItem("token"));
        fetch('http://localhost:3000/library/books/latestBooks',
            {
                method: 'GET',
                headers: new Headers({"Authorization": `Bearer ${token}`}),
            }).then(res => res.json())
            .then(res => {
                AuthorizationThree(res)
            })
            .catch(e => console.log(e))
    }
    latestB()
}

// Search Users Function
function searchUsers() {
    function AuthorizationFour(data){
        let userinfoBack = document.querySelector(".profile-landing .container .profile.search-user .user-info .back")
        let userEditBack = document.querySelector(".profile-landing .container .profile.search-user .edit-info .back")
        let userSearchedEdit = document.querySelector(".profile-landing .container .profile.search-user .edit-info")
        let userSearchedInfo = document.querySelector(".profile-landing .container .profile.search-user .user-info")
        let search = document.querySelector(".profile-landing .container .profile.search-user .search")
        let searchUser = document.querySelector(".profile-landing .container .profile.search-user .search .search-form #search")
        let searchUserVlidtion = document.querySelector(".profile-landing .container .profile.search-user .search .error-text small")
        let firstName = document.querySelector(".profile-landing .container .profile.user .user-info .first-name span");
        let lastName = document.querySelector(".profile-landing .container .profile.user .user-info .last-name span");
        let email = document.querySelector(".profile-landing .container .profile.user .user-info .email span");
        let phone = document.querySelector(".profile-landing .container .profile.user .user-info .phone span");
        let created = document.querySelector(".profile-landing .container .profile.user .user-info .created-time span");


        userEditBack.addEventListener("click",()=>{
            userSearchedInfo.style.display = "none"
            search.style.display = "block"
            userSearchedEdit.style.display = "none"
        })

        userinfoBack.addEventListener("click",()=>{
            userSearchedInfo.style.display = "none"
            search.style.display = "block"
            userSearchedEdit.style.display = "none"
        })

        if (searchUser.value == data.email ){
            userSearchedInfo.style.display = "block"
            search.style.display = "none"
            userSearchedEdit.style.display = "none"
        }else{
            searchUserVlidtion.textContent = "لا يوجد هذا المستخدم"
            setTimeout(()=>{
                searchUserVlidtion.textContent = ""
            },5000)
        }

        if (searchUser.value == `${data.first_name} ${data.last_name}`){
            userSearchedInfo.style.display = "block"
            search.style.display = "none"
            userSearchedEdit.style.display = "none"
        }
        
    }

    function searchU() {
        let token = JSON.parse( sessionStorage.getItem("token"));
        let searchUser = document.querySelector(".profile-landing .container .profile.search-user .search .search-form #search")
        fetch('http://localhost:3000/library/users/search',
            {
                method: 'POST',
                headers: new Headers({"Authorization": `Bearer ${token}`,'Content-Type': 'application/json'}),
                body: JSON.stringify({
                    email: searchUser.value,
                })
            }).then(res => res.json())
            .then(res => {
                AuthorizationFour(res)
            })
            .catch(e => console.log(e))
    }
    searchU()
}

let searchUserForm = document.querySelector(".profile-landing .container .profile.search-user .search form")
searchUserForm.onsubmit = function(e){
    e.preventDefault()
    searchUsers()
}


userInfo()
userGeneral()
latestBook()
header()
