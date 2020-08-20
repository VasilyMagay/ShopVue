const top_menu = {
    data() {
        return {
            currentPage: 0,
            mainAPI: this.$root.$refs,
        }
    },
    methods: {
        clickMenuItem(id) {

            this.currentPage = id;

            this.mainAPI.product_info.product = {};
            this.mainAPI.product_info.img = '';
            this.mainAPI.product_info.visible = false;

            this.mainAPI.home_page.visible = id === 0;

            this.mainAPI.products.visible = id === 1;
            this.mainAPI.categories.visible = id === 1;

            this.mainAPI.cart.visible = id === 2;

        },
        isCurrentPage(id) {
            return id===this.currentPage;
        },
    },
    mounted() {
//        setActiveItem();
    },
    template: `
    <div class="header">
        <a class="logo" href="#"><img src="img/logo.png" alt="logo"></a>
        <nav>
            <ul class="menu">
                <li @click="clickMenuItem(0)" class="menu-list">
                    <a :class="['menu-link', {'menu-link-active': isCurrentPage(0)}]">
                        ДОМОЙ
                    </a>
                </li>
                <li @click="clickMenuItem(1)" class="menu-list">
                    <a :class="['menu-link', {'menu-link-active': isCurrentPage(1)}]">
                        ТОВАРЫ
                    </a>
                </li>
                <li @click="clickMenuItem(2)" class="menu-list">
                    <a :class="['menu-link', {'menu-link-active': isCurrentPage(2)}]">
                        КОРЗИНА
                    </a>
                </li>
            </ul>
        </nav>
    </div>
    `
};

export default top_menu;
