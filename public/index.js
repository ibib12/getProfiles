function handleClick(e){
    console.log('get profiles')

    fetch('/get-profile')
    .then(r=>r.json())
    .then(data=>{
        console.log('then')
        // renderUsers(data)
    })
    console.log('after fetch')
}

// function renderUsers(users){
//     let html = '';
//     users.forEach(user=>{
//         html += `<p>Name: ${user.name}</p>`
//     }) 

//     root.innerHTML = html
// }

// function saveData(e){
//     e.preventDefault();
//     console.log(e)
// }