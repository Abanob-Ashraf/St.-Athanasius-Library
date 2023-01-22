let token = JSON.parse(sessionStorage.getItem("token"));
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
 export function me(){
    fetch('http://localhost:3000/library/users/me',
    {
        method: 'GET',
        headers: new Headers({"Authorization": `Bearer ${token}`}),
    }).then(res => res.json())
    .then(res => {
        userInfo(res)
    })
    .catch(e => console.log(e))
}
me()