let first_name = JSON.parse(sessionStorage.getItem("first_name"));
let last_name = JSON.parse(sessionStorage.getItem("last_name"));
let token = JSON.parse(sessionStorage.getItem("token"));
let id = JSON.parse(sessionStorage.getItem("id"));
let admin = JSON.parse(sessionStorage.getItem("admin"));
let job = JSON.parse(sessionStorage.getItem("job"));
let email = JSON.parse(sessionStorage.getItem("email"));
let phone_number = JSON.parse(sessionStorage.getItem("phone_number"))
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
            doubleDiv.className = "flex"
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
export function search(){
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