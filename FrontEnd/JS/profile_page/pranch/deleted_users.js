let first_name = JSON.parse(sessionStorage.getItem("first_name"));
let last_name = JSON.parse(sessionStorage.getItem("last_name"));
let token = JSON.parse(sessionStorage.getItem("token"));
let id = JSON.parse(sessionStorage.getItem("id"));
let admin = JSON.parse(sessionStorage.getItem("admin"));
let job = JSON.parse(sessionStorage.getItem("job"));
let email = JSON.parse(sessionStorage.getItem("email"));
let phone_number = JSON.parse(sessionStorage.getItem("phone_number"))
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
export function deleted(){
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