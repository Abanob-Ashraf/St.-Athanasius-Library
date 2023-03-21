let token = JSON.parse(sessionStorage.getItem("token"));
let deleted_user_show = document.querySelector(".deleted-users .show")
let deleted_user_info = document.querySelector(".deleted-users .info-show")
let errorMsg = document.querySelector(".deleted-users .show small")
let show_deleted_users = document.querySelector(".deleted-users .show .show-deleted-users")

// deleted_users Response
function response(data){
    if (data == "NOT AVILABLE users not found"){
        errorMsg.textContent = "لا يوجد مستخدمين محذوفين"
        setTimeout(()=>{
            errorMsg.textContent = ""
        },4000)
    }else{
        deleted_user_show.style.display = "none"
        deleted_user_info.style.display = "block"
        for (let i = 0 ; i < data.length ; i++){
            // Divs
            let userInfo = document.querySelector(".deleted-users .info-show .scroll-container")
            let infoGroup = document.createElement("div");
            let fullName = document.createElement("div")
            let job = document.createElement("div")
            let email = document.createElement("div")
            let phone = document.createElement("div")

            // P 
            let fullNameP = document.createElement("p")
            let jobP = document.createElement("p")
            let emailP = document.createElement("p")
            let phoneP = document.createElement("p")
            let note = document.createElement("p")

            // span
            let fullNameSpan = document.createElement("span")
            let jobSpan = document.createElement("span")
            let emailSpan = document.createElement("span")
            let phoneSpan = document.createElement("span")

            // PTexts
            let fullNamePText = document.createTextNode("الاسم :")
            let jobPText = document.createTextNode("دور الخادم :")
            let emailPText = document.createTextNode("البريد الالكتروني :")
            let phonePText = document.createTextNode("رقم الهاتف :")
            let noteText = document.createTextNode("اذا تود استرجاع المستخدم ابحث عنه و اضغط حفظ البيانات عند التعديل")
    

            // spanTexts
            let fullNameSpanText = document.createTextNode(data[i].full_name)
            let jobSpanText = document.createTextNode(data[i].job)
            let emailSpanText = document.createTextNode(data[i].email)
            let phoneSpanText = document.createTextNode(data[i].phone_number == null ? "لا يوجد" : data[i].phone_number)

            // Classes
            infoGroup.className = "info-group"
            fullName.className = "full-name"
            job.className = "job"
            email.className = "email"
            phone.className = "phone"
            note.className = "note"
    
            // Appends
            userInfo.appendChild(infoGroup)

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

            // Note
            infoGroup.appendChild(note)
            note.appendChild(noteText)

            // Redirect To User Information From Show Partion
            let user_deleted_info_back = document.querySelector(".deleted-users .info-show .back")
            user_deleted_info_back.addEventListener("click",()=>{
                deleted_user_show.style.display = "block"
                deleted_user_info.style.display = "none"
                infoGroup.remove()
            })
        }

        // Scroll Between Users
        function browse(){
            let all_info_group = document.querySelectorAll(".deleted-users .info-show .info-group");
            let right_arrow = document.querySelector(".deleted-users .info-show .right");
            let left_arrow = document.querySelector(".deleted-users .info-show .left");

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
}

// deleted_users Fetch Function (To Get Information)
function deleted_users(){
    fetch(`https://st-athanasius-library.com.up.railway.app/library/users/unavilable`,
        {
            method: 'GET',
            headers: new Headers({"Authorization": `Bearer ${token}`,'Content-Type': 'application/json'}),
        }).then(res => res.json())
        .then(res => {
            response(res)
        })
        .catch(e => console.log(e))
}
show_deleted_users.addEventListener("click",()=>{
    deleted_users()    
})