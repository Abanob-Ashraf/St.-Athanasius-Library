let token = JSON.parse(sessionStorage.getItem("token"));
let admin = JSON.parse(sessionStorage.getItem("admin"));
export function shelfkBooksLength(){
    let shelfID = document.getElementsByName("block_num_one")[0]
    let blockID = document.getElementsByName("block_num_two")[0]
    shelfID.addEventListener("input",()=>{
        fetch(`http://localhost:3000/library/books/countBooksInThisBlock?block_number=${blockID.value.toString()}&shelf_number=${shelfID.value.toString()}`,
        {
            method: 'GET',
            headers: new Headers({"Authorization": `Bearer ${token}`}),
        }).then(res => res.json())
        .then(res => {
            let shelfBooksLength = document.querySelector(".browse-books-landing .container .browseBooks.shelf-books .shelf-book .count span")
            shelfBooksLength.textContent = res
        })
        .catch(e => console.log(e))
    })

}
shelfkBooksLength()