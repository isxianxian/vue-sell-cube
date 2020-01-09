<template>
    <div class="star" :class="starType">
        <span
            v-for="(itemClass,index) in itemClasses"
            :key="index"
            :class="itemClass"
            class="star-item"
        ></span>
    </div>
</template>

<script>
const LENGTH = 5;
const CLS_ON = "on";
const CLS_HALF = "half";
const CLS_OFF = "off";

export default {
    props: {
        size: {
            type: Number
        },
        score: {
            type: Number
        }
    },
    computed: {
        starType() {
            return "star-" + this.size;
        },
        //  通过计算各个类型的星的数量，在数组中放相应的字符串
        //  通过循环字符串，设置不同的class来控制显示的图片是全星还是半星
        itemClasses() {
            let result = [];
            const score = Math.floor(this.score * 2) / 2;
            const hasDecimal = score % 1 !== 0;
            const integer = Math.floor(score);
            for (let i = 0; i < integer; i++) {
                result.push(CLS_ON);
            }
            // 判断数据有没有余数来确定有没有半星！！！
            if (hasDecimal) {
                result.push(CLS_HALF);
            }
            //  数组在添加数据的时候长度变化来控制结束！！！
            while (result.length < LENGTH) {
                result.push(CLS_OFF);
            }
            return result;
        }
    }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '~assets/stylus/mixin.styl';

.star {
    display: flex;
    align-items: center;
    justify-content: center;

    .star-item {
        background-repeat: no-repeat;
    }

    &.star-48 {
        .star-item {
            width: 20px;
            height: 20px;
            margin-right: 22px;
            background-size: 20px 20px;

            &:last-child {
                margin-right: 0;
            }

            &.on {
                bg-image('star48_on');
            }

            &.half {
                bg-image('star48_half');
            }

            &.off {
                bg-image('star48_off');
            }
        }
    }

    &.star-36 {
        .star-item {
            width: 15px;
            height: 15px;
            margin-right: 6px;
            background-size: 15px 15px;

            &:last-child {
                margin-right: 0;
            }

            &.on {
                bg-image('star36_on');
            }

            &.half {
                bg-image('star36_half');
            }

            &.off {
                bg-image('star36_off');
            }
        }
    }

    &.star-24 {
        .star-item {
            width: 10px;
            height: 10px;
            margin-right: 3px;
            background-size: 10px 10px;

            &:last-child {
                margin-right: 0;
            }

            &.on {
                bg-image('star24_on');
            }

            &.half {
                bg-image('star24_half');
            }

            &.off {
                bg-image('star24_off');
            }
        }
    }
}
</style>