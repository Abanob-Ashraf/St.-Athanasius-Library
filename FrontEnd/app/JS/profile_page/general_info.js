let token = JSON.parse(sessionStorage.getItem("token"));
let admin_flag = document.querySelector(".profile.general-info .admin-flag");
let profile_pic = document.querySelector(".profile.general-info .pic img")
let name = document.querySelector(".profile.general-info .name");
let job = document.querySelector(".profile.general-info .job");

// Admin Flag Status
JSON.parse(sessionStorage.getItem("admin")) == true ?  admin_flag.textContent = `مدير` : admin_flag.textContent = `مستخدم`

// Profile Img
profile_pic.src = `https://api.dicebear.com/5.x/initials/svg?seed=${JSON.parse(sessionStorage.getItem("first_name"))} ${JSON.parse(sessionStorage.getItem("last_name"))}&scale=80`

// User Name
name.textContent = `${JSON.parse(sessionStorage.getItem("first_name"))} ${JSON.parse(sessionStorage.getItem("last_name"))}`

// User Role
job.textContent = JSON.parse(sessionStorage.getItem("job"))