const home_page = {
    data() {
        return {
            "visible": true,
        }
    },
    methods: {},
    mounted() {},
    template: `
    <div class="container" v-show="visible">
        <main>
            <section class="featured padding-site">
               <div class="hidden"><h2>Products</h2></div>
               <div class="ft-header">
                    <ul class="ft-menu">
                        <li class="ft-menu-list"><a href="#" class="ft-menu-link ft-menu-link-active">Популярные</a></li>
                        <li class="ft-menu-list"><a href="#" class="ft-menu-link">Новые</a></li>
                    </ul>
                    <a href="#" class="explore-link">Показать все &gt;</a>
               </div>
               <div class="ft-pics">
                   <article class="ft-box">
                       <img src="img/product-2.jpg" alt="product 1" class="ft-img">
                       <div class="ft-img-text">
                           <a href="#" class="ft-button">&gt;</a>
                           <h2 class="ft-h2">Fishnet Chair</h2>
                           <p class="ft-p">Seat and back with upholstery made of&nbsp;cold cure foam</p>
                       </div>
                   </article>
                   <article class="ft-box">
                       <img src="img/product-2.jpg" alt="product 2" class="ft-img">
                       <div class="ft-img-text">
                           <a href="#" class="ft-button">&gt;</a>
                           <h2 class="ft-h2">Fishnet Chair</h2>
                           <p class="ft-p">Seat and back with upholstery made of&nbsp;cold cure foam</p>
                       </div>
                   </article>
                   <article class="ft-box">
                       <img src="img/product-3.jpg" alt="product 3" class="ft-img">
                       <div class="ft-img-text">
                           <a href="#" class="ft-button">&gt;</a>
                           <h2 class="ft-h2">Fishnet Chair</h2>
                           <p class="ft-p">Seat and back with upholstery made of&nbsp;cold cure foam</p>
                       </div>
                   </article>
                   <article class="ft-box">
                       <img src="img/product-4.jpg" alt="product 4" class="ft-img">
                       <div class="ft-img-text">
                           <a href="#" class="ft-button">&gt;</a>
                           <h2 class="ft-h2">Fishnet Chair</h2>
                           <p class="ft-p">Seat and back with upholstery made of&nbsp;cold cure foam</p>
                       </div>
                   </article>
                </div>
            </section>
            <section class="mobile padding-site">
                <h2 class="mob-h2">mobile app</h2>
                <h3 class="mob-h3">Find. Follow. Favorite.</h3>
                <p class="mod-text">Save your favorites and share your style.</p>
                <div class="mob-shops">
                    <a href="#" class="mob-img-link"><img src="img/app-store.jpg" alt="Store" class="mob-img"></a>
                    <a href="#" class="mob-img-link"><img src="img/google-play.jpg" alt="Store" class="mob-img"></a>
                </div>
            </section>
        </main>
    </div>
    `
};

export default home_page;