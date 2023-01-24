let token = JSON.parse(sessionStorage.getItem("token"));
let form = document.forms[2]
let search_partion = document.querySelector(".profile.search-user .search")
let edit_info_partion = document.querySelector(".profile.search-user .edit-info")
let user_info_partion = document.querySelector(".profile.search-user .user-info")

// Search Response
function response(data){
    let Search_for_a_user = document.querySelector(".profile.search-user .search .search-form .search-for-a-user").value
    if (Search_for_a_user == data[0].first_name || Search_for_a_user == data[0].last_name || Search_for_a_user == data[0].full_name || Search_for_a_user == data[0].email || Search_for_a_user == data[0].job){
        edit_info_partion.style.display = "none"
        search_partion.style.display = "none"
        user_info_partion.style.display = "block"
        for (let i = 0 ; i < data.length ; i++){
            // Divs
            let userInfo = document.querySelector(".profile.search-user .user-info .scroll-container")
            let doubleDiv = document.createElement("div")
            let edit = document.createElement("button")
            let del = document.createElement("button")
            let infoGroup = document.createElement("div");
            let id = document.createElement("div")
            let fullName = document.createElement("div")
            let job = document.createElement("div")
            let email = document.createElement("div")
            let phone = document.createElement("div")
            let adminFlag = document.createElement("div")
            let status = document.createElement("div")
            let created = document.createElement("div")

            // P 
            let idP = document.createElement("p")
            let fullNameP = document.createElement("p")
            let jobP = document.createElement("p")
            let emailP = document.createElement("p")
            let phoneP = document.createElement("p")
            let adminFlagP = document.createElement("p")
            let statusP = document.createElement("p")
            let createdP = document.createElement("p")

            // span
            let idSpan = document.createElement("span")
            let fullNameSpan = document.createElement("span")
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
            let fullNamePText = document.createTextNode("الاسم :")
            let jobPText = document.createTextNode("دور الخادم :")
            let emailPText = document.createTextNode("البريد الالكتروني :")
            let phonePText = document.createTextNode("رقم الهاتف :")
            let adminFlagPText = document.createTextNode("هل هو مدير :")
            let statusPText = document.createTextNode("حاله المستخدم :")
            let createdPText = document.createTextNode("تاريخ الانشاء :")
    

            // spanTexts
            let idSpanText = document.createTextNode(data[i].id)
            let fullNameSpanText = document.createTextNode(data[i].full_name)
            let jobSpanText = document.createTextNode(data[i].job)
            let emailSpanText = document.createTextNode(data[i].email)
            let phoneSpanText = document.createTextNode(data[i].phone_number == null ? "لا يوجد" : data[i].phone_number)
            let adminFlagSpanText = document.createTextNode(data[i].admin_flag == true ? "نعم" : "لا")
            let statusSpanText = document.createTextNode(data[i].user_status == "AVILABLE" ? "متاح" : "غير متاح")
            let createdSpanText = document.createTextNode(`${new Date(data[i].created_date).getDate()}/${new Date(data[i].created_date).getMonth()+1}/${new Date(data[i].created_date).getFullYear()}`)

            // Classes
            infoGroup.className = "info-group"
            doubleDiv.className = "flex"
            edit.className = "edit"
            del.className = "delete"
            id.className = "id"
            fullName.className = "full-name"
            job.className = "job"
            email.className = "email"
            phone.className = "phone"
            adminFlag.className = "flag-admin"
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

            // Full Name
            infoGroup.appendChild(fullName)
            fullName.appendChild(fullNameP)
            fullNameP.appendChild(fullNamePText)
            fullName.appendChild(fullNameSpan)
            fullNameSpan.appendChild(fullNameSpanText)

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

            // Redirect To Search From User Information
            let user_info_back = document.querySelector(".profile.search-user .user-info .back")
            user_info_back.addEventListener("click",()=>{
                user_info_partion.style.display = "none"
                search_partion.style.display = "block"
                edit_info_partion.style.display = "none"
                infoGroup.remove()
            })
            
            // Redirect To User Edit From User Information
            edit.addEventListener("click",()=>{
                user_info_partion.style.display = "none"
                search_partion.style.display = "none"
                edit_info_partion.style.display = "block"
                let form = document.forms[3]
                let firstName = document.querySelector(".profile.search-user .edit-info .first-name .input");
                firstName.setAttribute("placeholder",data[i].first_name)
                let lastName = document.querySelector(".profile.search-user .edit-info .last-name .input");
                lastName.setAttribute("placeholder",data[i].last_name)
                let email = document.querySelector(".profile.search-user .edit-info .email .input");
                email.setAttribute("placeholder",data[i].email)
                let phone = document.querySelector(".profile.search-user .edit-info .phone .input");
                phone.setAttribute("placeholder",data[i].phone_number)
                // Edit Current User On Submit (Fetch Function (To Edit Information))
                form.addEventListener("submit",(e)=>{
                    let firstName = document.querySelector(".profile.search-user .edit-info .first-name .input");
                    let lastName = document.querySelector(".profile.search-user .edit-info .last-name .input");
                    let email = document.querySelector(".profile.search-user .edit-info .email .input");
                    let job = document.querySelector(".profile.search-user .edit-info .job .input");
                    let admin = document.querySelector(".profile.search-user .edit-info #admin-flag");
                    let phone = document.querySelector(".profile.search-user .edit-info .phone .input");
                    fetch(`http://localhost:3000/library/users/${data[i].id}`,
                    {
                        method: 'PUT',
                        headers: new Headers({"Authorization": `Bearer ${token}`,'Content-Type': 'application/json'}),
                        body: JSON.stringify({
                            first_name: firstName.value.trim() == "" ? data[i].first_name : firstName.value.trim() ,
                            last_name: lastName.value.trim() == "" ? data[i].last_name : lastName.value.trim(),
                            email: email.value.trim() == "" ? data[i].email : email.value.trim(),
                            phone_number: phone.value.trim() == "" ? data[i].phone_number : phone.value.trim(),
                            job: job.value,
                            admin_flag: admin.checked
                        })
                    }).then(res => res.json())
                    .catch(e => console.log(e))    
                })
            })

            // Redirect To Search From User Edit
            let edit_info_back = document.querySelector(".profile.search-user .edit-info .back")
            edit_info_back.addEventListener("click",()=>{
                user_info_partion.style.display = "none"
                search_partion.style.display = "block"
                edit_info_partion.style.display = "none"
                infoGroup.remove()
            })

            // Delete Current User On Click (Fetch Function (To Delete Information))
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
    }else if(data == "user not found"){
        let errorMsg = document.querySelector(".profile.search-user .search-form  small")
        errorMsg.textContent = "لا يوجد هذا المستخدم"
        setTimeout(()=>{
            errorMsg.textContent = ""
        },4000)
    }

    // Scroll Between Users
    function browse(){
        let all_info_group = document.querySelectorAll(".profile.search-user .user-info .info-group");
        let right_arrow = document.querySelector(".profile.search-user .user-info .right");
        let left_arrow = document.querySelector(".profile.search-user .user-info .left");

        // Consts
        for (let i = 0 ; i < all_info_group.length ; i++){
            all_info_group[i].style.display = "none"
        }
        let indexValue = 1;
        all_info_group[indexValue-1].style.display = "block"
        if (all_info_group.length == 1){
            right_arrow.style.visibility = "hidden";
            left_arrow.style.visibility = "hidden";
        }else{
            right_arrow.style.visibility = "visible";
            left_arrow.style.visibility = "visible";
        }

        // Move Right
        right_arrow.addEventListener("click",()=>{
            indexValue++
            all_info_group[indexValue-1].style.display = "block"
            all_info_group[indexValue-1].previousElementSibling.style.display = "none"
            if (indexValue > 1){
                left_arrow.style.visibility = "visible";
                if (indexValue == all_info_group.length){
                    right_arrow.style.visibility = "hidden";
                    left_arrow.style.visibility = "visible";
                }
            }
        })

        // Move Left
        left_arrow.addEventListener("click",()=>{
            indexValue--
            all_info_group[indexValue-1].style.display = "block"
            all_info_group[indexValue-1].nextElementSibling.style.display = "none"
            if (indexValue < all_info_group.length){
                right_arrow.style.visibility = "visible";
                if (indexValue == 1){
                    left_arrow.style.visibility = "hidden";
                    right_arrow.style.visibility = "visible";
                }
            }
        })
        left_arrow.style.visibility = "hidden";
    }
    browse()
}

// search Fetch With Params Function (To Get Information)
function search(){
    let Search_for_a_user = document.querySelector(".profile.search-user .search .search-form .search-for-a-user").value
    let params = new URLSearchParams({
        email: Search_for_a_user,
        full_name: Search_for_a_user,
        first_name: Search_for_a_user,
        last_name: Search_for_a_user,
        job: Search_for_a_user
    })
    fetch(`http://localhost:3000/library/users/search?${params.toString()}`,
        {
            method: 'GET',
            headers: new Headers({"Authorization": `Bearer ${token}`,'Content-Type': 'application/json'}),
        }).then(res => res.json())
        .then(res => {
            response(res)
        })
        .catch(e => console.log(e))
}
form.onsubmit = function(e){
    e.preventDefault()
    search()    
}