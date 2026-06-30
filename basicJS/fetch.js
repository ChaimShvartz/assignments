// 1
// fetch("https://jsonplaceholder.typicode.com/posts/12")
//     .then((res) => {
//         if(!res.ok) throw new Error(res.statusText);
//         return res.json();
//     })
//     .then((data) => console.log(data.title))
//     .catch((err) => console.error(err.message))

// 2
// fetch("https://jsonplaceholder.typicode.com/notfound")
//     .then(res => {
//         console.log(res.status, res.statusText);
//         if(!res.ok) throw new Error(res.statusText);
//         return res.json();
//     })
//     .then(console.log)
//     .catch(err => console.error(err.message));

// 3
// fetch("https://jsonplaceholder.typicode.com/poss")
//     .then(res => {
//         if(!res.ok) throw new Error(res.statusText);
//         return res.json();
//     })
//     .then(posts => posts.forEach(post => {
//         console.log(post.title);
//     }))
//     .catch(err => console.error(err.message));

// 4
// fetch("https://jsonplaceholder.typicode.com/posts/", {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//         title: "new title",
//         body: "post content",
//         userId: 1,
//     }),
// })
//     .then(res => {
//         console.log(res.status, res.statusText);
//         if(!res.ok) throw new Error(res.statusText);
//         return res.json()
//     }
// )
//     .then(console.log)
//     .catch(err => console.error(err.message));

// 5
