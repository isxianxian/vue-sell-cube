<template>
    <span :class="['ico1',iconCls]"></span>
</template>

<script>
export default {
    name:'support-ico',
    props:{
        size:{
            type:Number
        },
        type:{
            type:Number
        }
    },
    data(){
        return {
            name:'图标'
        }
    },
    computed:{
        iconCls(){
            const classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
            return `ico${this.size} ${classMap[this.type]}`;
        }
    }
}
</script>

<style lang="stylus" scoped>
    @import '~assets/stylus/mixin.styl'
    span
        display:inline-block
        background-repeat:no-repeat
        background-size : 100% 100%
        &.ico1
            width :12px
            height :12px
            &.decrease
                bg-image('decrease_1')
            &.discount
                bg-image('discount_1')
            &.guarantee
                bg-image('guarantee_1')
            &.invoice
                bg-image('invoice_1')
            &.special
                bg-image('special_1')
        &.ico2
            width :16px
            height :16px
            &.decrease
                bg-image('decrease_2')
            &.discount
                bg-image('discount_2')
            &.guarantee
                bg-image('guarantee_2')
            &.invoice
                bg-image('invoice_2')
            &.special
                bg-image('special_2')
        &.ico3
            width :12px
            height :12px
            &.decrease
                bg-image('decrease_3')
            &.discount
                bg-image('discount_3')
            &.guarantee
                bg-image('guarantee_3')
            &.invoice
                bg-image('invoice_3')
            &.special
                bg-image('special_3')
        &.ico4
            width :12px
            height :12px
            &.decrease
                bg-image('decrease_4')
            &.discount
                bg-image('discount_4')
            &.guarantee
                bg-image('guarantee_4')
            &.invoice
                bg-image('invoice_4')
            &.special
                bg-image('special_4')
</style>>
