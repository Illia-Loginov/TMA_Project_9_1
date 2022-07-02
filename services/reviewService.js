export const getAll = (book) => {
    return book.reviews;
}

export const getOne = (book, id) => {
    return book.reviews.find(review => review.id === id);
}

export const add = (book, review) => {
    if(book.reviews.length === 0)
        review.id = 1;
    else
        review.id = book.reviews[book.reviews.length - 1].id + 1;
    book.reviews.push(review);

    return review;
}

export const remove = (book, id) => {
    let removedReview;
    
    book.reviews = book.reviews.filter(review => {
        if(review.id === id) {
            removedReview = review;

            return false;
        } else {
            return true;
        }
    })

    return removedReview;
}