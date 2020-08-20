Vue.component('top_menu', {
    data() {
        return {}
    },
    methods: {},
    mounted() {},
    template: `
    <div class="header">
        <a class="logo" href="#"><img src="img/logo.png" alt="logo"></a>
        <nav>
            <ul class="menu">
                <li class="menu-list"><a href="#" class="menu-link menu-link-active">HOME</a></li>
                <li class="menu-list"><a href="#" class="menu-link">PRODUCTS</a></li>
                <li class="menu-list"><a href="#" class="menu-link">HISTORY</a></li>
                <li class="menu-list"><a href="#" class="menu-link">SHOWROOM</a></li>
                <li class="menu-list"><a href="http://ya.ru" class="menu-link">CONTACT</a></li>
                <li class="search"><img src="img/search%20(5).svg" alt="search"></li>
            </ul>
        </nav>
    </div>
    `
})