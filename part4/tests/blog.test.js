const listHelper = require('../utils/list_helper')

const listWithOneBlog = [
    {
      _id: '5a422aa71b54a676234d17f8',
      title: 'Go To Statement Considered Harmful',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 5,
      __v: 0
    },
    {
      _id: "5a422aa71b54a676234d17f8",
      title: "Go To Statement Considered Harmful",
      author: "Edsger W. Dijkstra",
      url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
      likes: 5,
      __v: 0
    },
    {
      _id: "5a422b3a1b54a676234d17f9",
      title: "Canonical string reduction",
      author: "Wai Chee",
      url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
      likes: 12,
      __v: 0
    }
]

test('dummy returns one ', () => {
    const blogs = []

    const result = listHelper.dummy(blogs)
    expect(result).toBe(1)
})

describe('total likes', () => {

    test('Equals all the blog total likes', () => {
      const result = listHelper.totalLikes(listWithOneBlog)
      expect(result).toBe(22)
    })
  })

describe('favourite blog', () => {

    test('Favourite blog out of list', () => {
        const result = listHelper.favoriteBlog(listWithOneBlog)
        expect(result).toEqual({
            title: "Canonical string reduction",
            author: "Wai Chee",
            likes: 12
        })
    })
})

describe('Most Blogs', () => {

    test('Have the most blogs out of the list', () => {
        const result = listHelper.mostBlogs(listWithOneBlog)
        expect(result).toEqual({
            author: "Edsger W. Dijkstra",
            blogs: 2
        })
    })
})

describe('Most Likes', () => {

    test('Have the most likes author out of the list', () => {
        const result = listHelper.mostLikes(listWithOneBlog)
        expect(result).toEqual({
            author: "Wai Chee",
            likes: 12
        })
    })
})