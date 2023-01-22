let first_name = JSON.parse(sessionStorage.getItem("first_name"));
let last_name = JSON.parse(sessionStorage.getItem("last_name"));
let token = JSON.parse(sessionStorage.getItem("token"));
let id = JSON.parse(sessionStorage.getItem("id"));
let job = JSON.parse(sessionStorage.getItem("job"));
let admin = JSON.parse(sessionStorage.getItem("admin"));
let email = JSON.parse(sessionStorage.getItem("email"));
let phone_number = JSON.parse(sessionStorage.getItem("phone_number"))
export function editbyidForMe(){
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
let form = document.forms[0]
form.onsubmit = function(){
         editbyidForMe()
}