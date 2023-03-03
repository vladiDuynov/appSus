export default {
    props: ['review'],
    template: `
    <article class="review-preview flex">
        <h2><span>Name: </span>{{review.userName}}</h2>
        <h2 class="rating"><span>Rated: </span>{{review.rating}}</h2>
        <h2 class="date"><span>Read on: </span>{{review.date}}</h2>
    </article>
    `
}