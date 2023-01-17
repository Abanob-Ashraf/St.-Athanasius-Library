// ==================================================== Global ==================================================== //
let first_name = JSON.parse(sessionStorage.getItem("first_name"));
let last_name = JSON.parse(sessionStorage.getItem("last_name"));
let token = JSON.parse(sessionStorage.getItem("token"));
let id = JSON.parse(sessionStorage.getItem("id"));
let admin = JSON.parse(sessionStorage.getItem("admin"));
let job = JSON.parse(sessionStorage.getItem("job"));
let email = JSON.parse(sessionStorage.getItem("email"));
let phone_number = JSON.parse(sessionStorage.getItem("phone_number"))

window.onload = function(){
    if (window.sessionStorage.getItem("token") == undefined){
        location.replace("/login.html")
    }
}

let search_user = document.querySelector(".search-user")
let deleted_users = document.querySelector(".deleted-users")
let create_user = document.querySelector(".create-user")

if (admin == false){
    search_user.style.display = "none"
    deleted_users.style.display = "none"
    create_user.style.display = "none"
}
// ==================================================== End Global ==================================================== //





// ==================================================== Header & User Information & General Information Partions ==================================================== //
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
        sessionStorage.removeItem("email")
        location.href = "/login.html"
    })
}
// UserGeneral Profile Function
function userGeneral(data){
    let name = document.querySelector(".profile-landing .container .profile.general-info .name");
    let adminFlag = document.querySelector(".profile-landing .container .profile.general-info .admin-flag");
    let job = document.querySelector(".profile-landing .container .profile.general-info .job");

    name.textContent = `${data.first_name} ${data.last_name}`
    job.textContent = data.job
    if (data.admin_flag == true) {
        adminFlag.textContent = `مدير`
    } else if (data.admin_flag == false){
        adminFlag.textContent = `مستخدم`
    }
}
// userInfo Profile Function
function userInfo(data){
    let userInfo = document.querySelector(".profile-landing .container .profile.user .user-info")
    let userEdit = document.querySelector(".profile-landing .container .profile.user .edit-info")
    let userChangePassword = document.querySelector(".profile-landing .container .profile.user .change-password")
    let userInfoEdit = document.querySelector(".profile-landing .container .profile.user .user-info .edit")
    let userEditBack = document.querySelector(".profile-landing .container .profile.user .edit-info .back")
    let userEditGo = document.querySelector(".profile-landing .container .profile.user .edit-info .go")
    let userChangePasswordBack = document.querySelector(".profile-landing .container .profile.user .change-password .back")
    let firstName = document.querySelector(".profile-landing .container .profile.user .user-info .first-name span");
    let lastName = document.querySelector(".profile-landing .container .profile.user .user-info .last-name span");
    let email = document.querySelector(".profile-landing .container .profile.user .user-info .email span");
    let job = document.querySelector(".profile-landing .container .profile.user .user-info .job span");
    let phone = document.querySelector(".profile-landing .container .profile.user .user-info .phone span");
    let created = document.querySelector(".profile-landing .container .profile.user .user-info .created-time span");
    let firstNamePH = document.querySelector(".profile-landing .container .profile.user .edit-info .first-name input");
    let lastNamePH = document.querySelector(".profile-landing .container .profile.user .edit-info .last-name input");
    let emailPH = document.querySelector(".profile-landing .container .profile.user .edit-info .email input");
    let phonePH = document.querySelector(".profile-landing .container .profile.user .edit-info .phone input");

    userInfoEdit.addEventListener("click",()=>{
        userInfo.style.display = "none"
        userEdit.style.display = "block"
        userChangePassword.style.display = "none"
    })

    userEditGo.addEventListener("click",()=>{
        userInfo.style.display = "none"
        userEdit.style.display = "none"
        userChangePassword.style.display = "block"
    })

    userEditBack.addEventListener("click",()=>{
        userInfo.style.display = "block"
        userEdit.style.display = "none"
        userChangePassword.style.display = "none"
    })
    
    userChangePasswordBack.addEventListener("click",()=>{
        userInfo.style.display = "none"
        userEdit.style.display = "block"
        userChangePassword.style.display = "none"
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

    firstNamePH.setAttribute("placeholder", data.first_name)
    lastNamePH.setAttribute("placeholder", data.last_name)
    emailPH.setAttribute("placeholder", data.email)
    phonePH.setAttribute("placeholder", data.phone_number)
    if (data.phone_number == null) {
        phonePH.setAttribute("placeholder", "لا يوجد")
    } else {
        phonePH.setAttribute("placeholder", data.phone_number)
    }
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
// EditByIdForMe Fetch Function
function editbyidForMe(){
    let firstNameEI = document.querySelector(".profile-landing .container .profile.user .edit-info .first-name input");
    let lastNameEI = document.querySelector(".profile-landing .container .profile.user .edit-info .last-name input");
    let emailEI = document.querySelector(".profile-landing .container .profile.user .edit-info .email input");
    let phoneEI = document.querySelector(".profile-landing .container .profile.user .edit-info .phone input");
    
    fetch(`http://localhost:3000/library/users/${id}`,
    {
        method: 'PUT',
        headers: new Headers({"Authorization": `Bearer ${token}`,'Content-Type': 'application/json'}),
        body: JSON.stringify({
            first_name: firstNameEI.value.trim() == "" ? first_name : firstNameEI.value.trim(),
            last_name: lastNameEI.value.trim() == "" ? last_name : lastNameEI.value.trim(),
            email: emailEI.value.trim() == "" ? email : emailEI.value.trim(),
            phone_number: phoneEI.value.trim() == "" ? phone_number : phoneEI.value.trim(),
            job: job,
            admin_flag: admin
        })
    }).then(res => res.json())
    .catch(e => console.log(e))    
}
let submit_1 = document.querySelector(".profile-landing .container .profile.user .edit-info .editInfo");
submit_1.onsubmit = function(){
        editbyidForMe()
}
// ==================================================== End Header & User Information & General Information Partions ==================================================== //





// ==================================================== Change Password ==================================================== //
// Change Password Fetch Function
function changePassword(){
    let oldPassword = document.querySelector(".profile-landing .container .profile.user .change-password .password-container .old-password input")
    let newpassword = document.querySelector(".profile-landing .container .profile.user .change-password .password-container .new-password input")
    fetch(`http://localhost:3000/library/users/me/changePassword`,
    {
        method: 'PUT',
        headers: new Headers({"Authorization": `Bearer ${token}`,'Content-Type': 'application/json'}),
        body: JSON.stringify({
            old_password: oldPassword.value.trim(),
            new_password: newpassword.value.trim()
        })
    }).then(res => res.json())
    .then(res => console.log(res))
    .catch(e => console.log(e))
}

let submit = document.querySelector(".profile-landing .container .profile.user .change-password .changePassword");
submit.onsubmit = function(){
    changePassword()
    sessionStorage.removeItem("token")
    sessionStorage.removeItem("email")
    location.href = "/login.html"
}
// ==================================================== End Change Password ==================================================== //





// ==================================================== Search Partion ==================================================== //
// Search Users Function
function searchUsers(data){
    let userinfoBack = document.querySelector(".profile-landing .container .profile.search-user .user-info .back")
    let editinfoBack = document.querySelector(".profile-landing .container .profile.search-user .edit-info  .back")
    let editinfosubmit = document.querySelector(".profile-landing .container .profile.search-user .edit-info  .edit")
    let userSearchedEdit = document.querySelector(".profile-landing .container .profile.search-user .edit-info")
    let userSearchedInfo = document.querySelector(".profile-landing .container .profile.search-user .user-info")
    let search = document.querySelector(".profile-landing .container .profile.search-user .search")
    let searchUser = document.querySelector(".profile-landing .container .profile.search-user .search .search-form #search").value
    let searchUserSpride = [...searchUser]
    let searchUser_firstName = searchUserSpride.indexOf(" ") == -1 ? searchUser : searchUser.slice(0,searchUserSpride.indexOf(" "))
    let searchUser_lastName = searchUser.slice(searchUserSpride.indexOf(" ")+1)
    let searchUserVlidtion = document.querySelector(".profile-landing .container .profile.search-user .search-form  small")

    if (searchUser_firstName == data[0].first_name || searchUser_lastName == data[0].last_name || searchUser == data[0].email || searchUser == data[0].job){
        userSearchedInfo.style.display = "block"
        search.style.display = "none"
        userSearchedEdit.style.display = "none"
        for (let i = 0 ; i < data.length ; i++){
            // Divs
            let userInfo = document.querySelector(".profile-landing .container .profile.search-user .user-info .scroll-container")
            let doubleDiv = document.createElement("div")
            let edit = document.createElement("button")
            let del = document.createElement("button")
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

            // ButtonTexts
            let editText = document.createTextNode("تعديل البيانات")
            let delText = document.createTextNode("حذف المستخدم")

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
            doubleDiv.className = "double-div"
            edit.className = "edit"
            del.className = "delete"
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

            // Double Div
            infoGroup.appendChild(doubleDiv)
            doubleDiv.appendChild(edit)
            edit.appendChild(editText)
            doubleDiv.appendChild(del)
            del.appendChild(delText)

            // Show Search Partion On Click UserInfoBack
            userinfoBack.addEventListener("click",()=>{
                userSearchedInfo.style.display = "none"
                search.style.display = "block"
                userSearchedEdit.style.display = "none"
                infoGroup.remove()
            })

            // Show Search Partion On Click EditInfoBack
            editinfoBack.addEventListener("click",()=>{
                userSearchedInfo.style.display = "none"
                search.style.display = "block"
                userSearchedEdit.style.display = "none"
                infoGroup.remove()
            })

            // Show Edit Partion On Click Edit
            edit.addEventListener("click",()=>{
                userSearchedInfo.style.display = "none"
                search.style.display = "none"
                userSearchedEdit.style.display = "block"
                let firstNameEI = document.querySelector(".profile-landing .container .profile.search-user .edit-info .first-name .input");
                let lastNameEI = document.querySelector(".profile-landing .container .profile.search-user .edit-info .last-name .input");
                let emailEI = document.querySelector(".profile-landing .container .profile.search-user .edit-info .email .input");
                let phoneEI = document.querySelector(".profile-landing .container .profile.search-user .edit-info .phone .input");
                firstNameEI.setAttribute("placeholder", firstNameSpanText.textContent)
                lastNameEI.setAttribute("placeholder", lastNameSpanText.textContent)
                emailEI.setAttribute("placeholder", emailSpanText.textContent)
                phoneEI.setAttribute("placeholder", phoneSpanText.textContent)

                // EditCurrentUser On Click editinfosubmit
                editinfosubmit.addEventListener("click",()=>{
                    let firstNameEI = document.querySelector(".profile-landing .container .profile.search-user .edit-info .first-name .input");
                    let lastNameEI = document.querySelector(".profile-landing .container .profile.search-user .edit-info .last-name .input");
                    let emailEI = document.querySelector(".profile-landing .container .profile.search-user .edit-info .email .input");
                    let jobEI = document.querySelector(".profile-landing .container .profile.search-user .edit-info .job .input");
                    let adminEI = document.querySelector(".profile-landing .container .profile.search-user .edit-info #admin-flag");
                    let phoneEI = document.querySelector(".profile-landing .container .profile.search-user .edit-info .phone .input");
                
                    fetch(`http://localhost:3000/library/users/${parseInt(idSpanText.textContent)}`,
                    {
                        method: 'PUT',
                        headers: new Headers({"Authorization": `Bearer ${token}`,'Content-Type': 'application/json'}),
                        body: JSON.stringify({
                            first_name: firstNameEI.value.trim() == "" ? firstNameSpanText.textContent : firstNameEI.value.trim() ,
                            last_name: lastNameEI.value.trim() == "" ? lastNameSpanText.textContent : lastNameEI.value.trim(),
                            email: emailEI.value.trim() == "" ? emailSpanText.textContent : emailEI.value.trim(),
                            phone_number: phoneEI.value.trim() == "" ? phoneSpanText.textContent : phoneEI.value.trim(),
                            job: jobEI.value,
                            admin_flag: adminEI.checked
                        })
                    }).then(res => res.json())
                    .catch(e => console.log(e))    
                })
            })

            // delete Fetch Function On Click Del
            del.addEventListener("click",()=>{
                fetch(`http://localhost:3000/library/users/${parseInt(idSpanText.textContent)}`,
                {
                    method: 'DELETE',
                    headers: new Headers({"Authorization": `Bearer ${token}`}),
                }).then(res => res.json())
                .catch(e => console.log(e))
                window.location.reload()
            })
        }
    }else{
        searchUserVlidtion.textContent = "لا يوجد هذا المستخدم"
        setTimeout(()=>{
            searchUserVlidtion.textContent = ""
        },5000)
    }
    // Browse User Information
    function browseOne(){
        let allInfoGroup = document.querySelectorAll(".profile-landing .container .profile.search-user .user-info .info-group");
        let rightArrow = document.querySelector(".profile-landing .container .profile.search-user .user-info .right");
        let leftArrow = document.querySelector(".profile-landing .container .profile.search-user .user-info .left");

        // Consts
        for (let i = 0 ; i < allInfoGroup.length ; i++){
            allInfoGroup[i].style.display = "none"
        }
        let indexValue = 1;
        allInfoGroup[indexValue-1].style.display = "block"
        if (allInfoGroup.length == 1){
            leftArrow.style.visibility = "hidden";
            rightArrow.style.visibility = "hidden";
        }

        // Move Right
        rightArrow.addEventListener("click",()=>{
            indexValue++
            allInfoGroup[indexValue-1].style.display = "block"
            allInfoGroup[indexValue-1].previousElementSibling.style.display = "none"
            if ([indexValue] == allInfoGroup.length){
                rightArrow.style.pointerEvents = "none";
                leftArrow.style.pointerEvents = "stroke";
            }
        })

        // Move Left
        leftArrow.addEventListener("click",()=>{
            indexValue--
            allInfoGroup[indexValue-1].style.display = "block"
            allInfoGroup[indexValue-1].nextElementSibling.style.display = "none"
            if ([indexValue] == 1){
                leftArrow.style.pointerEvents = "none";
                rightArrow.style.pointerEvents = "stroke";
            }
        })
    }
    browseOne()

}
// search Fetch With Params Function
function search(){
    let searchUser = document.querySelector(".profile-landing .container .profile.search-user .search .search-form #search").value
    let searchUserSpride = [...searchUser]
    let searchUser_firstName = searchUserSpride.indexOf(" ") == -1 ? searchUser : searchUser.slice(0,searchUserSpride.indexOf(" "))
    let searchUser_lastName = searchUser.slice(searchUserSpride.indexOf(" ")+1)
    let params = new URLSearchParams({
        email: searchUser,
        first_name: searchUser_firstName,
        last_name: searchUser_lastName,
        job: searchUser
    })
    fetch(`http://localhost:3000/library/users/search?${params.toString()}`,
        {
            method: 'GET',
            headers: new Headers({"Authorization": `Bearer ${token}`,'Content-Type': 'application/json'}),
        }).then(res => res.json())
        .then(res => {
            console.log(res)
            searchUsers(res)
        })
        .catch(e => console.log(e))
}
let searchUserForm = document.querySelector(".profile-landing .container .profile.search-user .search form")
searchUserForm.onsubmit = function(e){
    e.preventDefault()
    search()    
}
// ==================================================== End Search Partion ==================================================== //





// ==================================================== Deleted User Partion ==================================================== //
// Search Users Function
function deletedUser(data){
    let deletedUser = document.querySelector(".profile-landing .container .deleted-users .show")
    let deletedUserError = document.querySelector(".profile-landing .container .deleted-users .show small")
    let userDeletedInfo = document.querySelector(".profile-landing .container .deleted-users .info-show")
    let userDeletedInfoBack = document.querySelector(".profile-landing .container .deleted-users .info-show .back")
    let ShowdeletedUser = document.querySelector(".profile-landing .container .deleted-users .show .show-deleted-users")

    ShowdeletedUser.addEventListener("click",()=>{
        if (data[0].id == undefined){
            deletedUserError.textContent = "لا يوجد مستخدمين محذوفين"
            setTimeout(()=>{
                deletedUserError.textContent = ""
            },5000)
        }else{
            deletedUser.style.display = "none"
            userDeletedInfo.style.display = "block"
            for (let i = 0 ; i < data.length ; i++){
                // Divs
                let userInfo = document.querySelector(".profile-landing .container .deleted-users .info-show .scroll-container")
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
    
    
                userDeletedInfoBack.addEventListener("click",()=>{
                    deletedUser.style.display = "block"
                    userDeletedInfo.style.display = "none"
                    infoGroup.remove()
                })
            }
            // Browse User Information
            function browseTwo(){
                let allInfoGroup = document.querySelectorAll(".profile-landing .container .deleted-users .info-show .info-group");
                let rightArrow = document.querySelector(".profile-landing .container .deleted-users .info-show .right");
                let leftArrow = document.querySelector(".profile-landing .container .deleted-users .info-show .left");
                // Consts
                for (let i = 0 ; i < allInfoGroup.length ; i++){
                    allInfoGroup[i].style.display = "none"
                }
                let indexValue = 1;
                allInfoGroup[indexValue-1].style.display = "block"
                if (allInfoGroup.length == 1){
                    leftArrow.style.visibility = "hidden";
                    rightArrow.style.visibility = "hidden";
                }

                // Move Right
                rightArrow.addEventListener("click",()=>{
                    indexValue++
                    allInfoGroup[indexValue-1].style.display = "block"
                    allInfoGroup[indexValue-1].previousElementSibling.style.display = "none"
                    if ([indexValue] == allInfoGroup.length){
                        rightArrow.style.pointerEvents = "none";
                        leftArrow.style.pointerEvents = "stroke";
                    }
                })

                // Move Left
                leftArrow.addEventListener("click",()=>{
                    indexValue--
                    allInfoGroup[indexValue-1].style.display = "block"
                    allInfoGroup[indexValue-1].nextElementSibling.style.display = "none"
                    if ([indexValue] == 1){
                        leftArrow.style.pointerEvents = "none";
                        rightArrow.style.pointerEvents = "stroke";
                    }
                })
            }
            browseTwo()
        }
    })
}
// deletedUsers Show Fetch Function
function deleted(){
    fetch(`http://localhost:3000/library/users/unavilable`,
        {
            method: 'GET',
            headers: new Headers({"Authorization": `Bearer ${token}`,'Content-Type': 'application/json'}),
        }).then(res => res.json())
        .then(res => {
            deletedUser(res)
        })
        .catch(e => console.log(e))
}
deleted()    
// ==================================================== End Deleted User Partion ==================================================== //





// ==================================================== Create User Partion ==================================================== //
function create(data){
    let email = document.querySelector(".profile-landing .container .create-user-form .input-field .email")
    let smallOne = document.querySelector(".profile-landing .container .create-user .one")
    let smallTwo = document.querySelector(".profile-landing .container .create-user .two")
    let smallThee = document.querySelector(".profile-landing .container .create-user .tree")
    let smallFour = document.querySelector(".profile-landing .container .create-user .four")

    if (isEmailValid(email.value.trim()) == false){
        smallOne.style.display = "block"
        smallOne.textContent = "يوجد خطاء في طريقه كتابه البريد الالكتروني"
        setTimeout(()=>{
            smallOne.style.display = "none"
        },5000)
    }else{
        smallOne.style.color = "#2ecc71"
        smallOne.style.display = "block"
        smallOne.textContent = "تم انشاء الحساب الرجاء التاكد من بريدك"
        setTimeout(()=>{
            smallOne.style.display = "none"
        },5000)
    }
    function isEmailValid(email){
        const reg =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        return reg.test(email);
    }
}
// Create User Fetch Function
function createUser(){
    let firstName = document.querySelector(".profile-landing .container .create-user-form .input-field .first-name")
    let lastName = document.querySelector(".profile-landing .container .create-user-form .input-field .last-name")
    let job = document.querySelector(".profile-landing .container .create-user-form .input-field .job")
    let email = document.querySelector(".profile-landing .container .create-user-form .input-field .email")
    let password = document.querySelector(".profile-landing .container .create-user-form .input-field .password")
    let admin = document.getElementById("flag-admin")

    fetch('http://localhost:3000/library/users/createNewUser',
    {
        method: 'POST',
        headers: new Headers({"Authorization": `Bearer ${token}`,'Content-Type': 'application/json' }),
        body: JSON.stringify({
            first_name: firstName.value.trim(),
            last_name: lastName.value.trim(),
            email: email.value.trim(),
            password: password.value.trim(),
            job: job.value.trim(),
            admin_flag: admin.checked
        })
    }).then(res => res.json())
    .then(res => create(res))
    .catch(e => console.log(e))
}
let createUserForm = document.querySelector(".profile-landing .container .create-user-form");
createUserForm.onsubmit = function(e){
    e.preventDefault()
    createUser()
}
// ==================================================== End Create User Partion ==================================================== //