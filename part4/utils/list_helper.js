const lodash = require('lodash')

const dummy = (blogs) => {
    return 1
}

const totalLikes = (blogs) => {
    const reducer  = (total, item) => {
        return total + item.likes
    }

    return blogs.reduce(reducer, 0)
}

const favoriteBlog = (blogs) => {
    const mostFav = blogs.reduce((acc, current) => current.likes > acc.likes ? current : acc)
    return {title: mostFav.title, author: mostFav.author, likes: mostFav.likes}
}

const mostBlogs = (blogs) => {
    const authorCounts = lodash.countBy(blogs, 'author')
    const maxAuthor = lodash.maxBy(lodash.keys(authorCounts), (author) => authorCounts[author])
    return {author: maxAuthor, blogs: authorCounts[maxAuthor]}
}

const mostLikes = (blogs) => {
    const authorlikes = {}
    blogs.forEach((blog) => {
        if (authorlikes[blog.author]) {
            authorlikes[blog.author] += blog.likes
        } else {
            authorlikes[blog.author] = blog.likes
        }
    })
    const maxAuthor = Object.keys(authorlikes).reduce((a, b) => 
    authorlikes[a] > authorlikes[b] ? a : b)    

    return {author: maxAuthor, likes: authorlikes[maxAuthor]}
}

module.exports = {
    dummy,
    totalLikes,
    favoriteBlog,
    mostBlogs,
    mostLikes
}