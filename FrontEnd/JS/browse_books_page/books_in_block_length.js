let token = JSON.parse(sessionStorage.getItem("token"));
let blockID = document.getElementsByName("select_block")[0]

// books_in_bLock_length Fetch Function (To Get Information)
function books_in_bLock_length(){
    blockID.addEventListener("input",()=>{
        fetch(`https://st-athanasius-library.com.up.railway.app/library/books/countBooksInThisBlock?block_id=${blockID.value}`,
        {
            method: 'GET',
            headers: new Headers({"Authorization": `Bearer ${token}`}),
        }).then(res => res.json())
        .then(res => {
            let block_books_Length = document.querySelector(".book-in-block .block-books .count")
            if (blockID.value == ""){
                block_books_Length.style.display = "none"
                block_books_Length.textContent = ""
            }else if (res == "عدد الكتب undefined"){
                block_books_Length.style.display = "block"
                block_books_Length.textContent = "لا يوجد كتب"
            }else{
                block_books_Length.style.display = "block"
                block_books_Length.textContent = res
            }
        })
        .catch(e => console.log(e))
    })

}
books_in_bLock_length()