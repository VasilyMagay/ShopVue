import cart from './CartComp'
import product_info from './ProductInfoComp'
import products from './ProductsComp'
import categories from './CategoriesComp'
import home_page from './HomePageComp'
import top_menu from './TopMenuComp'
import my_footer from './FooterComp'

const app = {
    el: '#app',
     components: {
        cart,
        product_info,
        products,
        categories,
        home_page,
        top_menu,
        my_footer,
    },
    data: {
        categoryFilter: 0,
        showProducts: false,
    },
    methods: {
        getJson(url) {
            return fetch(url)
                .then(result => result.json())
                .catch(error => {
//                    this.$refs.error.setError(error);
                })
        },
        postJson(url, data) {
            return fetch(url, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            }).then(result => result.json())
                .catch(error => {
//                    this.$refs.error.setError(error);
                });
        },
        putJson(url, data) {
            return fetch(url, {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            }).then(result => result.json())
                .catch(error => {
//                    this.$refs.error.setError(error);
                });
        },
        deleteJson(url) {
            return fetch(url, {
                method: 'DELETE',
                headers: {
                    "Content-Type": "application/json"
                },
            }).then(result => result.json())
                .catch(error => {
//                    this.$refs.error.setError(error);
                });
        },
    },
};

export default app;
