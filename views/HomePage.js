
export default {
    template: `
        <section class="home-page">
            <h1>Home</h1>
            <div class="link-group flex align-center">
                <RouterLink to="'/keep">
                    <img src="../assets/imgs/keep.png">
                </RouterLink>
                <RouterLink to="'/mail">
                    <img src="../assets/imgs/gmail.png">
                </RouterLink>
                <RouterLink to="'/book">
                    <img src="../assets/imgs/books.png">
                </RouterLink>
            </div>

        </section>
    `,
    components: {
    }
}
