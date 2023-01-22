let picture = localStorage.getItem("picture");
let token = JSON.parse(sessionStorage.getItem("token"));
function userGeneral(data){
    let name = document.querySelector(".profile-landing .container .profile.general-info .name");
    let adminFlag = document.querySelector(".profile-landing .container .profile.general-info .admin-flag");
    let job = document.querySelector(".profile-landing .container .profile.general-info .job");

    name.textContent = `${data.first_name} ${data.last_name}`
    job.textContent = data.job
    if (data.admin_flag == true) {
        adminFlag.textContent = `مدير`
    } else if (data.admin_flag == false){
        adminFlag.textContent = `مستخدم`
    }
}
export function me(){
    fetch('http://localhost:3000/library/users/me',
    {
        method: 'GET',
        headers: new Headers({"Authorization": `Bearer ${token}`}),
    }).then(res => res.json())
    .then(res => {
        userGeneral(res)
    })
    .catch(e => console.log(e))
}
me()

let pic = document.querySelector(".profile-landing .container .profile.general-info .pic img")
let header_pic = document.querySelector(".header .container .profile-pic img")
let picInput = document.querySelector(".profile-landing .container .profile.general-info input")
console.log(picInput.value)

picInput.addEventListener("change",()=>{
    localStorage.setItem("picture",URL.createObjectURL(picInput.files[0]))
    pic.src = localStorage.getItem("picture")
    header_pic.src = localStorage.getItem("picture")
})
