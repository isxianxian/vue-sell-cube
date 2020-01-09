<template>
    <div id="app">
        <v-header :seller="seller"></v-header>
        <div class="tab-wrapper">
            <tab :tabs='tabs' :initialIndex='initialIndex'></tab>
        </div>
    </div>
</template>

<script>
import VHeader from "./components/v-header/v-header";
import Goods from './components/goods/goods';
import Seller from './components/seller/seller';
import Ratings from './components/ratings/ratings';
import Tab from "./components/tab/tab";
import { getSeller } from "./api/index";

export default {
    name: "app",
    data() {
        return {
            seller: {},
            tabs: [
                { label: "商品" , component:Goods , data:{seller:this.seller}}, 
                { label: "评价" , component:Ratings , data:{seller:this.seller}}, 
                { label: "商家" , component:Seller , data:{seller:this.seller}}],
            initialIndex:1
        };
    },
    components: {
        VHeader,
        Tab
    },
    created() {
        getSeller().then(res => {
            this.seller = res;
        });
    }
};
</script>

<style lang="stylus">
#app {
    .tab-wrapper {
        position: fixed;
        top: 136px;
        bottom: 0;
        left: 0;
        right: 0;
    }
}
</style>
