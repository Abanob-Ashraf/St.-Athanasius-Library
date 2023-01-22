let token = JSON.parse(sessionStorage.getItem("token"));
export function changePassword(){
    let oldPassword = document.querySelector(".profile-landing .container .profile.user .change-password .old-password input")
    let newpassword = document.querySelector(".profile-landing .container .profile.user .change-password .new-password input")
    fetch(`http://localhost:3000/library/users/me/changePassword`,
    {
        method: 'PUT',
        headers: new Headers({"Authorization": `Bearer ${token}`,'Content-Type': 'application/json'}),
        body: JSON.stringify({
            old_password: oldPassword.value.trim(),
            new_password: newpassword.value.trim()
        })
    })
    .catch(e => console.log(e))
}

let form = document.forms[1]
form.onsubmit = function(){
    changePassword()
    sessionStorage.clear()
}