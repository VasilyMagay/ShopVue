const cartItem = {
    props: ['cartItem', 'img'],
    template: `
    <div class="cart-item">
        <div class="block">
            <a :id="cartItem.id_product" @click="$root.$refs.product.showInfo(cartItem, img)"><img class="prod_img" :src="img" alt="some image">
                <div class="text">
                    <h4>{{cartItem.product_name}}</h4>
                    <p>Цена: {{cartItem.price}} ₽</p>
                    <p>Кол-во: {{cartItem.quantity}}</p>
                </div>
            </a>
            <p class="product-price">{{cartItem.quantity*cartItem.price}} ₽</p>
            <button class="del-btn" @click="$emit('remove', cartItem)">&times;</button>
        </div>
   </div>
    `
};

const cart = {
    components: { cartItem },
    data(){
      return {
          imgCart: 'https://placehold.it/50x100',
          cartItems: [],
          visible: false,
      }
    },
    methods: {
        addProduct(product){
            let find = this.cartItems.find(el => el.id_product === product.id_product);
            if(find){
                this.$parent.putJson(`/api/cart/${find.id_product}`, {quantity: 1});
                find.quantity++;
            } else {
                let prod = Object.assign({quantity: 1}, product);
                this.$parent.postJson('/api/cart', prod)
                  .then(data => {
                      if (data.result === 1) {
                          this.cartItems.push(prod);
                      }
                  });
            }
        },
        remove(item) {
           let find = this.cartItems.find(el => el.id_product === item.id_product);
           if(find){
                this.$parent.deleteJson(`/api/cart/${find.id_product}`, {quantity: 1});
                if(item.quantity>1){
                    item.quantity--;
                } else {
                    this.cartItems.splice(this.cartItems.indexOf(item), 1)
                }
            }
        },
    },
    mounted(){
        this.$parent.getJson('/api/cart')
            .then(data => {
                for(let el of data.contents){
                    this.cartItems.push(el);
                }
            });
    },
    template: `
        <div class="container">
            <div class="cart-block" v-show="visible">
                <p v-if="!cartItems.length">Корзина пуста</p>
                <cart-item class="cart-item" 
                v-for="item of cartItems" 
                :key="item.id_product"
                :cart-item="item" 
                :img="$root.$refs.products.setImage(item.image)"
                @remove="remove">
                </cart-item>
            </div>
        </div>`
};

export default cart;
