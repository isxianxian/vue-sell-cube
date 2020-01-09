<template>
    <div class="tab">
        <cube-tab-bar
            v-model="selectedLabel"
            ref='tabs'
            :data="tabs"
            @click="clickHandler"
            :useTransition="false"
            showSlider
            class="border-bottom-1px"
        ></cube-tab-bar>
        <div class="slide-wrapper">
            <cube-slide
                :initialIndex="index"
                :loop="false"
                :auto-play="false"
                :showDots="false"
                ref='slide'
                :options = 'slideOptions'
                @change="changePage"
                @scroll="scrollPage">
                <cube-slide-item v-for="(item, index) in tabs" :key="index">
                    {{item.label}}
                    <component :is='item.component' :data='item.data'></component>
                </cube-slide-item>
            </cube-slide>
        </div>
    </div>
</template>

<script>
export default {
    name: "tab",
    props:{
        tabs:{
            type:Array
        },
        initialIndex:Number
    },
    data() {
        return {
            index: this.initialIndex,
            slideOptions: {
                listenScroll: true,
                probeType: 3,
                directionLockThreshold: 0
            }
        };
    },
    methods: {
        clickHandler(e) {
            this.index = this.tabs.findIndex(item => item.label == e);
        },
        changePage(current) {
            this.index = current;
        },
        scrollPage(e){
            let tabWidth = this.$refs.tabs.$el.clientWidth,
                slideWidth = this.$refs.slide.slide.scroller.clientWidth,
                slidePos = -e.x,
                tabPos = slidePos/slideWidth*tabWidth;
            // 根据比例求位置
            // tab组件有setSliderTransform方法
            this.$refs.tabs.setSliderTransform(tabPos);
        }
    },
    computed: {
        selectedLabel: {
            get() {
                return this.tabs[this.index].label;
            },
            set() {}
        }
    }
};
</script>

<style lang="stylus" scoped>
.tab {
    display: flex;
    flex-direction: column;
    height: 100%;

    >>> .cube-tab {
        padding: 10px 0;
    }

    .slide-wrapper {
        flex: 1;
        overflow: hidden;
    }
}
</style>