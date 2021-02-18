function getEmailList() {
    const url = "https://script.google.com/macros/s/AKfycbw7LsL3ASCbX82jmKa0K1_P66Lz8mBTqh5LLJbpxktF4GR4shm8qBLYig/exec";
    fetch(url)
        .then(d => d.json())
        .then(d => {
            document.getElementById("app").textContent = d[0].data[2].email;
        });    
}
function addRow() {
    const url = "https://script.google.com/macros/s/AKfycbw7LsL3ASCbX82jmKa0K1_P66Lz8mBTqh5LLJbpxktF4GR4shm8qBLYig/exec";
    fetch(url,{
        method: 'POST',
        cache: 'no-cache',
        mode: 'no-cors',
        headers: {
            'ContentType': 'application/json'
        },
        redirect: 'follow',
        body: JSON.stringify({name:"Jon"})
    }); 
}

document.getElementById("btn").addEventListener("click", getEmailList);