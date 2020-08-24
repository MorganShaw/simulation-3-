module.exports = {
    getPostsByUserId: async (req, res) => {
        const {userposts, search} = req.query;
        const {id} = req.params;
        const db = req.app.get('db');
        if(userposts && search) {
            const posts = await db.get_post_by_title(search)
            res.status(200).send(posts)
        } else if(!userposts && !search) {
            const posts = await db.get_post_by_author(id)
            res.status(200).send(posts)
        } else if(!userposts && search) {
            const posts = await db.get_posts_by_author_title([id, search])
            res.status(200).send(posts)
        } else {
            const posts = await db.get_posts()
            res.status(200).send(posts)
        } 
    },
    
}




// let filteredGenre = books.filter(book => book.genre === genre)

/////?userposts=true

// return all posts where userposts is true and search is a String.

// const filterPosts = () => {
//     for(let i = 0; i < posts.length; i++){
//         if (userposts !== null && search !==  null && posts[i].title.includes(search)) {
//             return posts[i]
//         } 
//         if(!userposts && !search && posts[i].author_id !== user.author_id){
//             return posts[i]
//         }
//         if(!userposts && search !== null && posts[i].title.includes(search) && posts[i].author_id !== user.author_id) {
//             return posts[i]
//         } 
//         if(userposts !== null && !search) {
//             return posts[i]
//         }

//     }

// }

// const filteredTitle = posts.filter(post => post.title === search)

