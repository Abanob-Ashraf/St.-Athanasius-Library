let token = JSON.parse(sessionStorage.getItem("token"));
let admin_flag = document.querySelector(".profile.general-info .admin-flag");
let profile_pic = document.querySelector(".profile.general-info .pic img")
let name = document.querySelector(".profile.general-info .name");
let job = document.querySelector(".profile.general-info .job");

// general_info Response Function
function response(data){
    // Admin Flag Status
    data.admin_flag == true ?  admin_flag.textContent = `مدير` : admin_flag.textContent = `مستخدم`

    // Profile Img
    profile_pic.src = `https://api.dicebear.com/5.x/initials/svg?seed=${data.first_name[0]}${data.last_name[0]}&scale=80`

    // User Name
    name.textContent = `${data.first_name} ${data.last_name}`

    // User Role
    job.textContent = data.job
}

// general_info Fetch Function (To Get Information)
function general_info(){
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
general_info()