const product = {
    props: ['product', 'img'],
    data() {
      return {
        mainAPI: this.$root.$refs,
        imgRow: 'img/icon-hover.png',
      };
    },
    methods: {
        showInfo(product, img) {

            this.mainAPI.product_info.product = product;
            this.mainAPI.product_info.img = img;
            this.mainAPI.product_info.visible = true;

            this.mainAPI.products.visible = false;
        },
    },
    template: `
    <div class="block">
        <a :id="product.id_product" @click="showInfo(product, img)"><img class="prod_img" :src="img" alt="some image">
            <div class="text">
                <h4>{{product.product_name}}</h4>
                <p>{{product.price}} ₽</p>
                <img :src="imgRow" alt="img">
            </div>
        </a>
    </div>
    `
};

const products = {
    components: { product },
    data(){
        return {
            catalogUrl: '',
            products: [],
            filtered: [],
            imgCatalog: 'https://placehold.it/200x150',
            visible: false,
        }
    },
    methods: {
        filter(value){
//            console.log('categoryFilter='+parent.categoryFilter);
            let regexp = new RegExp(value, 'i');
            this.filtered = this.products.filter(
                el => regexp.test(el.product_name) && parent.categoryFilter === 0 || el.category_id === parent.categoryFilter
            );
        },
        setImage(image_file){
            if (image_file=="") {
                return this.imgCatalog;
            } else {
                return 'img/' + image_file;
            };
        }
    },
    mounted(){
        this.$parent.getJson('/api/products')
            .then(data => {
                for(let el of data){
                    this.products.push(el);
                    this.filtered.push(el);
                }
            });
    },
    template: `
        <div class="products category-products clearfix container" v-show="visible">
            <product v-for="item of filtered" :key="item.id_product" :img="setImage(item.image)" :product="item"></product>
        </div>
    `
};

export default products;