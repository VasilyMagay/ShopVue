Vue.component('product_info', {
    data() {
      return {
        imgRow: 'img/icon-hover.png',
        product: {},
        img: '',
        visible: false,
        cartAPI: this.$root.$refs.cart,
      };
    },

    template: `
    <div class="container details-products" v-show="visible">
        <div class="details-slider">
            <div class="slider-product">
                <img :src="img" :alt="product.description">
            </div>
        </div>

        <div class="description">
            <h3 class="big-bold">{{product.product_name}}</h3>
            <br>
            <p class="price"> {{product.price}} <span>₽</span></p>
            <a @click="cartAPI.addProduct(product)" class="red-button">
                заказать
                <i class="fa fa-chevron-right" aria-hidden="true"></i>
            </a>
            <div class="description-text">
                {{product.description}}
            </div>
        </div>
    </div>
    `
});
