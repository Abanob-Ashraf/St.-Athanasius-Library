let token = JSON.parse(sessionStorage.getItem("token"));
let admin = JSON.parse(sessionStorage.getItem("admin"));
export function blockBooksLength(){
    let blockID = document.getElementsByName("block_num_one")[0]
    blockID.addEventListener("input",()=>{
        fetch(`http://localhost:3000/library/books/countBooksInThisBlock?block_number=${blockID.value.toString()}`,
        {
            method: 'GET',
            headers: new Headers({"Authorization": `Bearer ${token}`}),
        }).then(res => res.json())
        .then(res => {
            let blockBooksLength = document.querySelector(".browse-books-landing .container .browseBooks.block-books .block-book .count")
            blockBooksLength.textContent = res
        })
        .catch(e => console.log(e))
    })

}
blockBooksLength()