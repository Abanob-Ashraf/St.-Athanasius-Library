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


// Latest Books
function latestBook(){
    function AuthorizationThree(data){
        for (let i = 0 ; i <= data.length; i++){
            let booksName = document.querySelectorAll(".profile-landing .container .profile.latest-books .latest-book div p");
            let booksCreatedTime = document.querySelectorAll(".profile-landing .container .profile.latest-books .latest-book div span");
            booksName[i].textContent = data[i].book_name
            booksCreatedTime[i].textContent = data[i].created_date
        }
    }

    function userI() {
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
    userI()




    let latestBook = document.querySelector(".profile-landing .container .profile.latest-books .latest-book");
    let latestBookCLick = document.querySelectorAll(".profile-landing .container .profile.latest-books .latest-book div p");
    let latestBookInfo = document.querySelector(".profile-landing .container .profile.latest-books .latest-book-info");
    let userEditBack = document.querySelector(".profile-landing .container .profile.latest-books .latest-book-info .back")

    userEditBack.addEventListener("click",()=>{
        latestBook.style.display = "block"
        latestBookInfo.style.display = "none"
    })

    latestBookCLick.forEach((e)=>{
        e.addEventListener("click",()=>{
            latestBook.style.display = "none"
            latestBookInfo.style.display = "block"
        })
    })
}





userInfo()
userGeneral()
latestBook()
header()
