Vue.component('categories', {
    data(){
        return {
            categories: [],
            filtered: [],
            visible: false,
            userSearch: '',
        }
    },
    methods: {
        filter(value){
            this.filtered = this.categories.filter(el => el.active);
        },
        clickHandler(id) {
            parent.categoryFilter = id;
            parent.showProducts = true;
            this.$root.$refs.products.filter(this.userSearch);
        }
    },
    mounted(){
        this.$parent.getJson('/api/categories')
            .then(data => {
                for(let el of data){
                    this.categories.push(el);
//                    console.log(el);
                };
                this.filter();
            });
    },
    template: `
        <div class="categories" v-show="visible">
            <div class="links clearfix">
                <div>
                    <ul class="links-menu">
                        <li id="0" @click="clickHandler(0)"><a>Все</a></li>
                        <li v-for="item of filtered" :id="item.id" @click="clickHandler(item.id)"><a>{{ item.name }}</a></li>
                    </ul>
                </div>
                <div class="search-form">
                   <form action="#" @submit.prevent="$root.$refs.products.filter(userSearch)">
                    <a>Поиск: </a>
                    <input type="text" class="search-field" v-model="userSearch">
                    <button class="btn-search" type="submit">
                        <i class="fas fa-search"></i>
                    </button>
                </div>
            </form>
         </div>
       </div>
    `
});
