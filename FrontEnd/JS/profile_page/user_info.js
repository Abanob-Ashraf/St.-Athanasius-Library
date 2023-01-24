let token = JSON.parse(sessionStorage.getItem("token"));

// user_info Response Function
function response(data){
    // Redirect Inputs
    function directs(){
        let userInfo = document.querySelector(".profile.user .user-info")
        let userEdit = document.querySelector(".profile.user .edit-info")
        let userChangePassword = document.querySelector(".profile.user .change-password")
        let userInfoEdit = document.querySelector(".profile.user .user-info .edit")
        let userEditBack = document.querySelector(".profile.user .edit-info .back")
        let userEditGo = document.querySelector(".profile.user .edit-info .go")
        let userChangePasswordBack = document.querySelector(".profile.user .change-password .back")

        // Redirect To User Edit From User Information
        userInfoEdit.addEventListener("click",()=>{
            userInfo.style.display = "none"
            userEdit.style.display = "block"
            userChangePassword.style.display = "none"
        })

        // Redirect To Change Password From User Edit
        userEditGo.addEventListener("click",()=>{
            userInfo.style.display = "none"
            userEdit.style.display = "none"
            userChangePassword.style.display = "block"
        })

        // Redirect To User Information From User Edit
        userEditBack.addEventListener("click",()=>{
            userInfo.style.display = "block"
            userEdit.style.display = "none"
            userChangePassword.style.display = "none"
        })

        // Redirect To User Edit From Change Password
        userChangePasswordBack.addEventListener("click",()=>{
            userInfo.style.display = "none"
            userEdit.style.display = "block"
            userChangePassword.style.display = "none"
        })    
    }

    // Show User Information
    function user_information(){
        let fullName = document.querySelector(".profile.user .user-info .full-name span");
        let email = document.querySelector(".profile.user .user-info .email span");
        let job = document.querySelector(".profile.user .user-info .job span");
        let phone = document.querySelector(".profile.user .user-info .phone span");
        let created = document.querySelector(".profile.user .user-info .created-time span");
        let createdDate = new Date(data.created_date)

        // Full Name
        fullName.textContent = data.full_name

        // Role
        job.textContent = data.job

        // Email
        email.textContent = data.email

        // Phone Number
        data.phone_number == null ? phone.textContent = `لا يوجد` : phone.textContent = data.phone_number

        // Created Date
        created.textContent = `${createdDate.getDate()}/${createdDate.getMonth()+1}/${createdDate.getFullYear()}`
    }

    // Show User Information On Edit Input Field
    function user_information_in_edit_input(){
        let firstName = document.querySelector(".profile.user .edit-info .first-name input");
        let lastName = document.querySelector(".profile.user .edit-info .last-name input");
        let email = document.querySelector(".profile.user .edit-info .email input");
        let phone = document.querySelector(".profile.user .edit-info .phone input");

        // First Name
        firstName.setAttribute("placeholder", data.first_name)

        // Last Name
        lastName.setAttribute("placeholder", data.last_name)

        // Email
        email.setAttribute("placeholder", data.email)

        // Phone Number
        data.phone_number == null ? phone.setAttribute("placeholder", "لا يوجد") : phone.setAttribute("placeholder", data.phone_number)
    }

    directs()
    user_information()
    user_information_in_edit_input()
}

// user_info Fetch Function (To Get Information)
function user_info(){
    fetch('http://localhost:3000/library/users/me',
    {
        method: 'GET',
        headers: new Headers({"Authorization": `Bearer ${token}`}),
    }).then(res => res.json())
    .then(res => {
        response(res)
    })
    .catch(e => console.log(e))
}
user_info()