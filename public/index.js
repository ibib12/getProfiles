function addImage(e) {
    let src = document.querySelector('.image-src');
    if (!src) {
        return;
    }
    src=src.value;
    console.log(src);
    fetch('/addImage', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }, body: JSON.stringify({src})
    }).then(r => r.json())
        // .then(data => {
        //     console.log(data)
        // })
}


// function addImage(e) {
//     console.log('get users')

//     fetch('/get-users')
//         .then(r => r.json())
//         .then(users => {
//             console.log('then')
//             console.log(users)
//         })
//     console.log('after fetch')
// }


function getUsers() {
    console.log('get users')

    fetch('/get-users')
        .then(r => r.json())
        .then(users => {
            console.log('then')
            renderUsers(users)
        })
    console.log('after fetch')
}

function renderUsers(users) {
    const root = document.querySelector('#root');
    let html = '';
    users.forEach(user => {
        html += `<p onclick="getPassword('${user.name}')">Name: ${user.name}</p>`
    })

    root.innerHTML = html
}




// function handleSubmit(e) {
//     e.preventDefault();



//     let { name, password } = e.target.elements;

//     name = name.value;
//     password = password.value;
//     console.log(name, password);


// }
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