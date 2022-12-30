let token = JSON.parse(sessionStorage.getItem("token"));
let id = JSON.parse(sessionStorage.getItem("id"));
let admin = JSON.parse(sessionStorage.getItem("admin"));
let job = JSON.parse(sessionStorage.getItem("job"));

window.onload = function(){
    if (window.sessionStorage.getItem("token") == undefined){
        location.replace("/login.html")
    }
}

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

// Search Users Function
function searchUsers(data){
    let userinfoBack = document.querySelector(".profile-landing .container .profile.search-user .user-info .back")
    let userSearchedEdit = document.querySelector(".profile-landing .container .profile.search-user .edit-info")
    let userSearchedInfo = document.querySelector(".profile-landing .container .profile.search-user .user-info")
    let search = document.querySelector(".profile-landing .container .profile.search-user .search")
    let searchUser = document.querySelector(".profile-landing .container .profile.search-user .search .search-form #search")
    let searchUserVlidtion = document.querySelector(".profile-landing .container .profile.search-user .search .error-text small")


    if (searchUser.value == data[0].first_name || searchUser.value == data[0].email){
        userSearchedInfo.style.display = "block"
        search.style.display = "none"
        userSearchedEdit.style.display = "none"
        for (let i = 0 ; i < data.length ; i++){
            // Divs
            let userInfo = document.querySelector(".profile-landing .container .profile.search-user .user-info .scroll-container")
            let infoGroup = document.createElement("div");
            let id = document.createElement("div")
            let firstName = document.createElement("div")
            let lastName = document.createElement("div")
            let job = document.createElement("div")
            let email = document.createElement("div")
            let phone = document.createElement("div")
            let adminFlag = document.createElement("div")
            let status = document.createElement("div")
            let created = document.createElement("div")

            // P 
            let idP = document.createElement("p")
            let firstNameP = document.createElement("p")
            let lastNameP = document.createElement("p")
            let jobP = document.createElement("p")
            let emailP = document.createElement("p")
            let phoneP = document.createElement("p")
            let adminFlagP = document.createElement("p")
            let statusP = document.createElement("p")
            let createdP = document.createElement("p")

            // span
            let idSpan = document.createElement("span")
            let firstNameSpan = document.createElement("span")
            let lastNameSpan = document.createElement("span")
            let jobSpan = document.createElement("span")
            let emailSpan = document.createElement("span")
            let phoneSpan = document.createElement("span")
            let adminFlagSpan = document.createElement("span")
            let statusSpan = document.createElement("span")
            let createdSpan = document.createElement("span")

            // PTexts
            let idPText = document.createTextNode("id :")
            let firstNamePText = document.createTextNode("الاسم الاول :")
            let lastNamePText = document.createTextNode("الاسم الثاني :")
            let jobPText = document.createTextNode("دور الخادم :")
            let emailPText = document.createTextNode("البريد الالكتروني :")
            let phonePText = document.createTextNode("رقم الهاتف :")
            let adminFlagPText = document.createTextNode("هل هو مدير :")
            let statusPText = document.createTextNode("حاله المستخدم :")
            let createdPText = document.createTextNode("تاريخ الانشاء :")
    

            // spanTexts
            let idSpanText = document.createTextNode(data[i].id)
            let firstNameSpanText = document.createTextNode(data[i].first_name)
            let lastNameSpanText = document.createTextNode(data[i].last_name)
            let jobSpanText = document.createTextNode(data[i].job)
            let emailSpanText = document.createTextNode(data[i].email)
            let phoneSpanText = document.createTextNode(data[i].phone_number == null ? "لا يوجد" : data[i].phone_number)
            let adminFlagSpanText = document.createTextNode(data[i].admin_flag == true ? "نعم" : "لا")
            let statusSpanText = document.createTextNode(data[i].user_status == "AVILABLE" ? "متاح" : "غير متاح")
            let createdSpanText = document.createTextNode(data[i].created_date)
    
            // Classes
            infoGroup.className = "info-group"
            id.className = "id"
            firstName.className = "first-name"
            lastName.className = "last-name"
            job.className = "job"
            email.className = "email"
            phone.className = "phone"
            adminFlag.className = "flag"
            status.className = "status"
            created.className = "created-time"
    
            // Appends
            userInfo.appendChild(infoGroup)
            // ID
            infoGroup.appendChild(id)
            id.appendChild(idP)
            idP.appendChild(idPText)
            id.appendChild(idSpan)
            idSpan.appendChild(idSpanText)

            // First Name
            infoGroup.appendChild(firstName)
            firstName.appendChild(firstNameP)
            firstNameP.appendChild(firstNamePText)
            firstName.appendChild(firstNameSpan)
            firstNameSpan.appendChild(firstNameSpanText)

            // Last Names
            infoGroup.appendChild(lastName)
            lastName.appendChild(lastNameP)
            lastNameP.appendChild(lastNamePText)
            lastName.appendChild(lastNameSpan)
            lastNameSpan.appendChild(lastNameSpanText)

            // Job
            infoGroup.appendChild(job)
            job.appendChild(jobP)
            jobP.appendChild(jobPText)
            job.appendChild(jobSpan)
            jobSpan.appendChild(jobSpanText)

            // Email
            infoGroup.appendChild(email)
            email.appendChild(emailP)
            emailP.appendChild(emailPText)
            email.appendChild(emailSpan)
            emailSpan.appendChild(emailSpanText)

            // Phone Number
            infoGroup.appendChild(phone)
            phone.appendChild(phoneP)
            phoneP.appendChild(phonePText)
            phone.appendChild(phoneSpan)
            phoneSpan.appendChild(phoneSpanText)

            // Admin Flag
            infoGroup.appendChild(adminFlag)
            adminFlag.appendChild(adminFlagP)
            adminFlagP.appendChild(adminFlagPText)
            adminFlag.appendChild(adminFlagSpan)
            adminFlagSpan.appendChild(adminFlagSpanText)

            // User Status
            infoGroup.appendChild(status)
            status.appendChild(statusP)
            statusP.appendChild(statusPText)
            status.appendChild(statusSpan)
            statusSpan.appendChild(statusSpanText)

            // Created Date
            infoGroup.appendChild(created)
            created.appendChild(createdP)
            createdP.appendChild(createdPText)
            created.appendChild(createdSpan)
            createdSpan.appendChild(createdSpanText)

            userinfoBack.addEventListener("click",()=>{
                userSearchedInfo.style.display = "none"
                search.style.display = "block"
                userSearchedEdit.style.display = "none"
                infoGroup.remove()
            })
        }
    }else if(admin == false){
        searchUserVlidtion.textContent = "ليس لديك صلاحيات المدير"
        setTimeout(()=>{
            searchUserVlidtion.textContent = ""
        },5000)
    }else{
        searchUserVlidtion.textContent = "لا يوجد هذا المستخدم"
        setTimeout(()=>{
            searchUserVlidtion.textContent = ""
        },5000)
    }

    // Browse User Information
    function browse(){
        let allInfoGroup = document.querySelectorAll(".profile-landing .container .profile.search-user .user-info .info-group");
        let rightArrow = document.querySelector(".profile-landing .container .profile.search-user .user-info .right");
        let leftArrow = document.querySelector(".profile-landing .container .profile.search-user .user-info .left");

        // Consts
        for (let i = 0 ; i < allInfoGroup.length ; i++){
            allInfoGroup[i].style.display = "none"
        }
        let indexValue = 1;
        allInfoGroup[indexValue-1].style.display = "block"

        // Move Right
        rightArrow.addEventListener("click",()=>{
            indexValue++
            allInfoGroup[indexValue-1].style.display = "block"
            allInfoGroup[indexValue-1].previousElementSibling.style.display = "none"
        })

        // Move Left
        leftArrow.addEventListener("click",()=>{
            indexValue--
            allInfoGroup[indexValue-1].style.display = "block"
            allInfoGroup[indexValue-1].nextElementSibling.style.display = "none"
        })
    }
    browse()

    // Delete User Information
    function Delete(){

    }
    Delete()
}

// // Create User Function
// function create(data){    
//     // First Name Validation Function
//     function firstName(){
//         let firstName = document.querySelector(".profile-landing .container .create-user-form .input-field .first-name")
//         let firstNameMsg = document.querySelector(".profile-landing .container .profile.errors .first-name-msg p")
//         let firstNameValue = firstName.value.trim()
        
//         if (firstNameValue ==  ""){
//             firstNameMsg.textContent = 'الاسم الاول=> لا تترك الحقل فارغ'
//             setError(firstNameMsg)
//         }else if(firstNameValue.length < 3 || firstNameValue.length > 10){
//             firstNameMsg.textContent = `الاسم الاول=> يرجي ان لا تزيد الاحرف عن 10 او اقل من 3 احرف`
//             setError(firstNameMsg)
//         }else {
//             firstNameMsg.textContent = `الاسم الاول=> تم التاكيد`
//             setSuccess(firstNameMsg)
//         }
//     }

//     // last Name Validation Function
//     function lastName(){
//         let lastName = document.querySelector(".profile-landing .container .create-user-form .input-field .last-name")
//         let lastNameMsg = document.querySelector(".profile-landing .container .profile.errors .last-name-msg p")
//         let lastNameValue = lastName.value.trim()
        
//         if (lastNameValue ==  ""){
//             lastNameMsg.textContent = 'الاسم الاخير=> لا تترك الحقل فارغ'
//             setError(lastNameMsg)
//         }else if(lastNameValue.length < 3 || lastNameValue.length > 10){
//             lastNameMsg.textContent = `الاسم الاخير=> يرجي ان لا تزيد الاحرف عن 10 او اقل من 3 احرف`
//             setError(lastNameMsg)
//         }else {
//             lastNameMsg.textContent = `الاسم الاخير=> تم التاكيد`
//             setSuccess(lastNameMsg)
//         }
//     }

//     // Job Validation Function
//     function job(){
//         let job = document.querySelector(".profile-landing .container .create-user-form .input-field .job")
//         let jobMsg = document.querySelector(".profile-landing .container .profile.errors .job-msg p")
//         let jobValue = job.value.trim()

//         if (jobValue == ""){
//             jobMsg.textContent = 'دور الخادم=> لا تترك الحقل فارغ'
//             setError(jobMsg)
//         }else {
//             jobMsg.textContent = 'دور الخادم=> تم التاكيد'
//             setSuccess(jobMsg)
//         }
//     }    

//     // Email Validation Function
//     function email(data){
//         let email = document.querySelector(".profile-landing .container .create-user-form .input-field .email")
//         let emailMsg = document.querySelector(".profile-landing .container .profile.errors .email-msg p")
//         let emailValue = email.value.trim()

//         if (emailValue ==  ""){
//             emailMsg.textContent = 'البريد الالكتروني=> لا تترك الحقل فارغ'
//             setError(emailMsg)
//         }else if (emailValue == data.email){
//             emailMsg.textContent = 'البريد الالكتروني=> هذا الحساب مستخدم بالفعل'
//             setError(emailMsg)   
//         }else if(isEmailValid(emailValue)){
//             emailMsg.textContent = `البريد الالكتروني=> تم التاكيد`
//             setSuccess(emailMsg)   
//         }
//         // Email Regular Expretion Test (Valdition)
//         function isEmailValid(e){
//             const reg =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
//             return reg.test(e);
//         }
//     }

//     // password Validation Function
//     function password(){
//         let password = document.querySelector(".profile-landing .container .create-user-form .input-field .password")
//         let passwordMsg = document.querySelector(".profile-landing .container .profile.errors .password-msg p")
//         let passwordValue = password.value.trim()

//         if (passwordValue ==  ""){
//             passwordMsg.textContent = 'كلمه المرور=> لا تترك الحقل فارغ'
//             setError(passwordMsg)
//         }else if(passwordValue.length < 8 || passwordValue.length > 14){
//             passwordMsg.textContent = `كلمه المرور=> يرجي ان لا تزيد الاحرف عن 14 او اقل من 8 احرف`
//             setError(passwordMsg)
//         }else {
//             passwordMsg.textContent = `كلمه المرور=> تم التاكيد`
//             setSuccess(passwordMsg)   
//         }
//     }

//     // Set Error Validate
//     function setError(eValue) {
//         let parentOfElement = eValue.parentElement;
//         if(parentOfElement.classList.contains('success')){
//             parentOfElement.classList.remove('success');
//         }
//         parentOfElement.classList.add('error');
//     }

//     // Set Success Validate
//     function setSuccess(eValue){
//         let parentOfElement = eValue.parentElement;
//         if(parentOfElement.classList.contains('error')){
//             parentOfElement.classList.remove('error');
//         }
//         parentOfElement.classList.add('success');
//     }

//     firstName()
//     lastName()
//     job()
//     email(data)
//     password()
// }

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

// EditByIdForMe Fetch Function
function editbyidForMe(){
    let firstNameEI = document.querySelector(".profile-landing .container .profile.user .edit-info .first-name input");
    let lastNameEI = document.querySelector(".profile-landing .container .profile.user .edit-info .last-name input");
    let emailEI = document.querySelector(".profile-landing .container .profile.user .edit-info .email input");
    let phoneEI = document.querySelector(".profile-landing .container .profile.user .edit-info .phone input");
    let resetPasswordEI = document.querySelector(".profile-landing .container .profile.user .edit-info .reset-password input");


    fetch(`http://localhost:3000/library/users/${id}`,
    {
        method: 'PUT',
        headers: new Headers({"Authorization": `Bearer ${token}`,'Content-Type': 'application/json'}),
        body: JSON.stringify({
            first_name: firstNameEI.value,
            last_name: lastNameEI.value,
            email: emailEI.value,
            password: resetPasswordEI.value,
            phone_number: phoneEI.value,
            job: job,
            admin_flag: admin
        })
    }).then(res => res.json())
    .catch(e => console.log(e))    
}
let submit = document.querySelector(".profile-landing .container .profile.user .edit-info form");
submit.onsubmit = function(){
    editbyidForMe()
}

// search Fetch Function
function search(){
    let searchUser = document.querySelector(".profile-landing .container .profile.search-user .search .search-form #search")
    let params = new URLSearchParams({
        email: searchUser.value,
        first_name: searchUser.value
    })
    fetch(`http://localhost:3000/library/users/search?${params.toString()}`,
        {
            method: 'GET',
            headers: new Headers({"Authorization": `Bearer ${token}`,'Content-Type': 'application/json'}),
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

// Create User Fetch Function
function createUser(){
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
    .then(res => {
        console.log(res.email)
        create(res)
    }
    )
    .catch(e => console.log(e))
}
let createUserForm = document.querySelector(".profile-landing .container .create-user-form");
createUserForm.onsubmit = function(e){
    e.preventDefault()
    createUser()
}
