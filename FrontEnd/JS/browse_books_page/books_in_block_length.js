let token = JSON.parse(sessionStorage.getItem("token"));
let blockID = document.getElementsByName("block_num_one")[0]

// books_in_bLock_length Fetch Function (To Get Information)
function books_in_bLock_length(){
    blockID.addEventListener("input",()=>{
        fetch(`http://localhost:3000/library/books/countBooksInThisBlock?block_number=${blockID.value.toString()}`,
        {
            method: 'GET',
            headers: new Headers({"Authorization": `Bearer ${token}`}),
        }).then(res => res.json())
        .then(res => {
            let block_books_Length = document.querySelector(".browseBooks.block-books .block-book .count")
            if (res == "عدد الكتب undefined"){
                block_books_Length.textContent = ""
            }else{
                block_books_Length.textContent = res
            }
        })
        .catch(e => console.log(e))
    })

}
books_in_bLock_length()