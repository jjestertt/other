let posts = [
   {
      userId: 1,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore unde distinctio consequatur blanditiis.'
   },
   {
      userId: 2,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore unde distinctio consequatur blanditiis.'
   },
   {
      userId: 3,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore unde distinctio consequatur blanditiis.'
   },
   {
      userId: 4,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore unde distinctio consequatur blanditiis.'
   },
]
let users = [
   {
      id: 1,
      name: 'John'

   },
   {
      id: 2,
      name: 'Max'

   },
   {
      id: 3,
      name: 'Dildon'

   },
   {
      id: 4,
      name: 'Ronda'

   },
]

console.log(posts, users);

let fullPosts = posts.map(post => {

   let user = users.find(item => item.id == post.userId);

   return { name: user.name, ...post };

});