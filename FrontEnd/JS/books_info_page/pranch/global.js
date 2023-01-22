export function global(){
    let icon = document.querySelector(".header i")
    icon.addEventListener("click",()=>{
        sessionStorage.removeItem("book_id")
        sessionStorage.removeItem("book_name")
        sessionStorage.removeItem("book_number_in_shelf")
        sessionStorage.removeItem("created_date")
        sessionStorage.removeItem("name_of_series")
        sessionStorage.removeItem("number_of_copies")
        sessionStorage.removeItem("number_of_pages")
        sessionStorage.removeItem("number_of_parts")
        sessionStorage.removeItem("publisher")
        sessionStorage.removeItem("topic")
        sessionStorage.removeItem("conclusion")
        sessionStorage.removeItem("author")
        sessionStorage.removeItem("book_code")
    })
}
global()