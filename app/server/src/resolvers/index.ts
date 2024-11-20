import BookResolvers from './books'
export const resolvers =  {
    Query: {
        books: BookResolvers.QueryBooks
    }
}