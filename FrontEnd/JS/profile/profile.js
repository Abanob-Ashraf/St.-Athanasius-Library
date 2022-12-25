let token = JSON.parse(sessionStorage.getItem("token"));

// Header Function
function header(data){
    let logout = document.querySelector(".header .container .menu #logout")
    let userLogin = document.querySelector(".header .container .user-login")
    let hiddenMenu = document.querySelector(".header .container .menu")
    let welcome = document.querySelector(".header .container .menu .welcome")

    welcome.textContent = `${data.first_name} ${data.last_name}`

    userLogin.addEventListener("click",()=>{
        hiddenMenu.classList.toggle("clicked")
    })

    logout.addEventListener("click",()=>{
        sessionStorage.removeItem("token")
        location.href = "/login.html"
    })
}

// UserGeneral Profile Function
function userGeneral(data){
    let name = document.querySelector(".profile-landing .container .profile.general-info .name");
    let adminFlag = document.querySelector(".profile-landing .container .profile.general-info .admin-flag");
    let id = document.querySelector(".profile-landing .container .profile.general-info .id");
    let job = document.querySelector(".profile-landing .container .profile.general-info .job");

    name.textContent = `${data.first_name} ${data.last_name}`
    id.textContent = `#${data.id}`
    job.textContent = data.job
    if (data.admin_flag == true) {
        adminFlag.textContent = `مدير`
    } else if (data.admin_flag == false){
        adminFlag.textContent = `مستخدم`
    }
}


// userInfo Profile Function
function userInfo(data){
    let userInfo = document.querySelector(".profile-landing .container .profile.user .user-info");
    let userInfoEdit = document.querySelector(".profile-landing .container .profile.user .user-info .edit");
    let userEdit = document.querySelector(".profile-landing .container .profile.user .edit-info");
    let userEditBack = document.querySelector(".profile-landing .container .profile.user .edit-info .back")
    let firstName = document.querySelector(".profile-landing .container .profile.user .user-info .first-name span");
    let lastName = document.querySelector(".profile-landing .container .profile.user .user-info .last-name span");
    let email = document.querySelector(".profile-landing .container .profile.user .user-info .email span");
    let job = document.querySelector(".profile-landing .container .profile.user .user-info .job span");
    let phone = document.querySelector(".profile-landing .container .profile.user .user-info .phone span");
    let created = document.querySelector(".profile-landing .container .profile.user .user-info .created-time span");


    userEditBack.addEventListener("click",()=>{
        userInfo.style.display = "block"
        userEdit.style.display = "none"
    })

    userInfoEdit.addEventListener("click",()=>{
        userInfo.style.display = "none"
        userEdit.style.display = "block"
    })

    firstName.textContent = data.first_name
    lastName.textContent = data.last_name
    email.textContent = data.email
    job.textContent = data.job
    created.textContent = data.created_date
    if (data.phone_number == null) {
        phone.textContent = `لا يوجد`
    } else {
        phone.textContent = data.phone_number
    }
}

// Latest Books Function
function latestBook(data){
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

                    if (data[i].who_edited == null){
                        bookAuthor.textContent = `لا يوجد`
                    }
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

// Search Users Function
function searchUsers(data){
    let userinfoBack = document.querySelector(".profile-landing .container .profile.search-user .user-info .back")
    let userEditBack = document.querySelector(".profile-landing .container .profile.search-user .edit-info .back")
    let userSearchedEdit = document.querySelector(".profile-landing .container .profile.search-user .edit-info")
    let userSearchedInfo = document.querySelector(".profile-landing .container .profile.search-user .user-info")
    let search = document.querySelector(".profile-landing .container .profile.search-user .search")
    let searchUser = document.querySelector(".profile-landing .container .profile.search-user .search .search-form #search")
    let searchUserVlidtion = document.querySelector(".profile-landing .container .profile.search-user .search .error-text small")
    let id = document.querySelector(".profile-landing .container .profile.search-user .user-info .id span");
    let firstName = document.querySelector(".profile-landing .container .profile.search-user .user-info .first-name span");
    let lastName = document.querySelector(".profile-landing .container .profile.search-user .user-info .last-name span");
    let job = document.querySelector(".profile-landing .container .profile.search-user .user-info .job span");
    let email = document.querySelector(".profile-landing .container .profile.search-user .user-info .email span");
    let phone = document.querySelector(".profile-landing .container .profile.search-user .user-info .phone span");
    let adminFlag = document.querySelector(".profile-landing .container .profile.search-user .user-info .flag span");
    let status = document.querySelector(".profile-landing .container .profile.search-user .user-info .status span");
    let created = document.querySelector(".profile-landing .container .profile.search-user .user-info .created-time span");


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

    // With Email
    if (searchUser.value == data[0].email){
        userSearchedInfo.style.display = "block"
        search.style.display = "none"
        userSearchedEdit.style.display = "none"
        id.textContent = data[0].id
        firstName.textContent = data[0].first_name
        lastName.textContent = data[0].last_name
        job.textContent = data[0].job
        email.textContent = data[0].email
        phone.textContent = data[0].phone_number
        if (data[0].admin_flag == true){
            adminFlag.textContent = `نعم`
        }else{
            adminFlag.textContent = `لا`
        }
        if (data[0].user_status == "AVILABLE"){
            status.textContent = "متاح"
        }else{
            status.textContent = "غير متاح"
        }
        created.textContent = data[0].created_date
    }else{
        searchUserVlidtion.textContent = "لا يوجد هذا المستخدم"
        setTimeout(()=>{
            searchUserVlidtion.textContent = ""
        },5000)
    }
}

// Create User Function
function CreateUser(){
    function AuthorizationFive(){    
        // First Name Validation Function
        function firstName(){
            let firstName = document.querySelector(".profile-landing .container .create-user-form .input-field .first-name")
            let firstNameMsg = document.querySelector(".profile-landing .container .profile.errors .first-name-msg p")
            let firstNameValue = firstName.value.trim()
            
            if (firstNameValue ==  ""){
                firstNameMsg.textContent = 'الاسم الاول=> لا تترك الحقل فارغ'
                setError(firstNameMsg)
            }else if(firstNameValue.length < 3 || firstNameValue.length > 10){
                firstNameMsg.textContent = `الاسم الاول=> يرجي ان لا تزيد الاحرف عن 10 او اقل من 3 احرف`
                setError(firstNameMsg)
            }else {
                firstNameMsg.textContent = `الاسم الاول=> تم التاكيد`
                setSuccess(firstNameMsg)
            }
        }

        // last Name Validation Function
        function lastName(){
            let lastName = document.querySelector(".profile-landing .container .create-user-form .input-field .last-name")
            let lastNameMsg = document.querySelector(".profile-landing .container .profile.errors .last-name-msg p")
            let lastNameValue = lastName.value.trim()
            
            if (lastNameValue ==  ""){
                lastNameMsg.textContent = 'الاسم الاخير=> لا تترك الحقل فارغ'
                setError(lastNameMsg)
            }else if(lastNameValue.length < 3 || lastNameValue.length > 10){
                lastNameMsg.textContent = `الاسم الاخير=> يرجي ان لا تزيد الاحرف عن 10 او اقل من 3 احرف`
                setError(lastNameMsg)
            }else {
                lastNameMsg.textContent = `الاسم الاخير=> تم التاكيد`
                setSuccess(lastNameMsg)
            }
        }
    
        // Job Validation Function
        function job(){
            let job = document.querySelector(".profile-landing .container .create-user-form .input-field .job")
            let jobMsg = document.querySelector(".profile-landing .container .profile.errors .job-msg p")
            let jobValue = job.value.trim()

            if (jobValue == ""){
                jobMsg.textContent = 'دور الخادم=> لا تترك الحقل فارغ'
                setError(jobMsg)
            }else {
                jobMsg.textContent = 'دور الخادم=> لا توجد تلك الخدمه'
                setError(jobMsg)
            }
        }    
    
        // Email Validation Function
        function email(){
            let email = document.querySelector(".profile-landing .container .create-user-form .input-field .email")
            let emailMsg = document.querySelector(".profile-landing .container .profile.errors .email-msg p")
            let emailValue = email.value.trim()

            if (emailValue ==  ""){
                emailMsg.textContent = 'البريد الالكتروني=> لا تترك الحقل فارغ'
                setError(emailMsg)
            }else if(isEmailValid(emailValue)){
                emailMsg.textContent = `البريد الالكتروني=> تم التاكيد`
                setSuccess(emailMsg)   
            }else{
                setError(emailMsg)
            }

            // Email Regular Expretion Test (Valdition)
            function isEmailValid(e){
                const reg =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
                return reg.test(e);
            }
        }
    
        // password Validation Function
        function password(){
            let password = document.querySelector(".profile-landing .container .create-user-form .input-field .password")
            let passwordMsg = document.querySelector(".profile-landing .container .profile.errors .password-msg p")
            let passwordValue = password.value.trim()

            if (passwordValue ==  ""){
                passwordMsg.textContent = 'كلمه المرور=> لا تترك الحقل فارغ'
                setError(passwordMsg)
            }else if(passwordValue.length < 8 || passwordValue.length > 14){
                passwordMsg.textContent = `كلمه المرور=> يرجي ان لا تزيد الاحرف عن 14 او اقل من 8 احرف`
                setError(passwordMsg)
            }else {
                passwordMsg.textContent = `كلمه المرور=> تم التاكيد`
                setSuccess(passwordMsg)   
            }
        }

        // Set Error Validate
        function setError(eValue) {
            let parentOfElement = eValue.parentElement;
            if(parentOfElement.classList.contains('success')){
                parentOfElement.classList.remove('success');
            }
            parentOfElement.classList.add('error');
        }

        // Set Success Validate
        function setSuccess(eValue){
            let parentOfElement = eValue.parentElement;
            if(parentOfElement.classList.contains('error')){
                parentOfElement.classList.remove('error');
            }
            parentOfElement.classList.add('success');
        }

        firstName()
        lastName()
        job()
        email()
        password()
    }


    function createU() {
        let firstName = document.querySelector(".profile-landing .container .create-user-form .input-field .first-name")
        let lastName = document.querySelector(".profile-landing .container .create-user-form .input-field .last-name")
        let job = document.querySelector(".profile-landing .container .create-user-form .input-field .job")
        let email = document.querySelector(".profile-landing .container .create-user-form .input-field .email")
        let password = document.querySelector(".profile-landing .container .create-user-form .input-field .password")
         fetch('http://localhost:3000/library/users/createNewUser',
            {
                method: 'POST',
                headers: new Headers({"Authorization": `Bearer ${token}`,'Content-Type': 'application/json' }),
                body: JSON.stringify({
                    first_name: firstName.value,
                    last_name: lastName.value,
                    email: email.value,
                    password: password.value,
                    job: job.value,
                })
            }).then(res => res.json())
            .then(
                AuthorizationFive()
            )
            .catch(e => console.log(e))
    }
    createU()
}
let createUserForm = document.querySelector(".profile-landing .container .create-user-form");
createUserForm.onsubmit = function(e){
    e.preventDefault()
    CreateUser()
}

// Me Fetch Function
function me(){
    fetch('http://localhost:3000/library/users/me',
    {
        method: 'GET',
        headers: new Headers({"Authorization": `Bearer ${token}`}),
    }).then(res => res.json())
    .then(res => {
        header(res)
        userGeneral(res)
        userInfo(res)
    })
    .catch(e => console.log(e))
}
me()

// EditById Fetch Function
function editbyid(){
    let firstNameEI = document.querySelector(".profile-landing .container .profile.user .edit-info .first-name input");
    let lastNameEI = document.querySelector(".profile-landing .container .profile.user .edit-info .last-name input");
    let emailEI = document.querySelector(".profile-landing .container .profile.user .edit-info .email input");
    let phoneEI = document.querySelector(".profile-landing .container .profile.user .edit-info .phone input");
    let resetPasswordEI = document.querySelector(".profile-landing .container .profile.user .edit-info .reset-password input");


    fetch(`http://localhost:3000/library/users/16`,
    {
        method: 'PUT',
        headers: new Headers({"Authorization": `Bearer ${token}`}),
        body: JSON.stringify({
            first_name: firstNameEI.value,
            last_name: lastNameEI.value,
            email: emailEI.value,
            phone_number: phoneEI.value,
            password: resetPasswordEI.value
        })
    }).then(res => res.json())
    .then(res => console.log(res))
    .catch(e => console.log(e))    
}
let submit = document.querySelector(".profile-landing .container .profile.user .edit-info form");
submit.onsubmit = function(e){
    e.preventDefault()
    editbyid()
}

// LatestBooks Fetch Function
function latestBooks(){
    fetch('http://localhost:3000/library/books/latestBooks',
    {
        method: 'GET',
        headers: new Headers({"Authorization": `Bearer ${token}`}),
    }).then(res => res.json())
    .then(res => {
        latestBook(res)
    })
    .catch(e => console.log(e))
}
latestBooks()

// search Fetch Function
function search(){
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
            searchUsers(res)
        })
        .catch(e => console.log(e))
}
let searchUserForm = document.querySelector(".profile-landing .container .profile.search-user .search form")
searchUserForm.onsubmit = function(e){
    e.preventDefault()
    search()    
}