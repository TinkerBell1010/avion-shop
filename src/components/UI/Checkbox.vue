<template>
    <div class="checks">
        <h4 class="checks__title">{{ title }}</h4>
        <div class="check">
            <label class="check__label" v-for="(option, i) of options" :key="i">
                <span :for="option">{{ option }}</span>
                <input class="check__checkbox" type="checkbox" :id="option" v-model="checked[filterType]" :value="option" @change="onChange()">
                <span class="check__checkmark"></span>
            </label>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    options: {
        type: Array,
        required: true,
        default: () => []
    },
    filterType: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    }
});

const checked = {
    type: [],
    price: [],
    designer: []
};

const onChange = () => {
    
}
</script>

<style lang="sass">
.checks
    display: flex
    flex-direction: column
    align-items: flex-start
    margin-top: 48px
    color: var(--dark)
    &__title
        font-family: var(--clash)
        line-height: 1.4
        margin-bottom: 20px

.check
    display: flex
    flex-direction: column
    align-items: left
    width: 100%
    &__label
        display: block
        position: relative
        padding-left: 35px
        cursor: pointer
        height: 24px
        -webkit-user-select: none
        -moz-user-select: none
        -ms-user-select: none
        user-select: none
        display: flex
        align-items: center
        line-height: 1.5
        &:not(:last-of-type)
            margin-bottom: 12px

    &__checkbox
        position: absolute
        opacity: 0
        cursor: pointer
        height: 0
        width: 0

    &__checkmark
        position: absolute
        top: 0
        left: 0
        bottom: 0
        margin: auto
        height: 16px
        width: 16px
        background-color: #fff
        border: 1px solid #DCDCDC
        border-radius: 2px

    &__label:hover &__checkbox ~ &__checkmark
        background-color: #4E4D93

    &__label &__checkbox:checked ~ &__checkmark
        background-color: #4E4D93

    &__checkmark:after
        content: ""
        position: absolute
        display: none

    &__checkbox:checked ~ &__checkmark:after
        display: block

    &__label &__checkmark:after
        left: 4px
        top: 1px
        width: 4px
        height: 7px
        border: solid white
        border-width: 0 2px 2px 0
        -webkit-transform: rotate(45deg)
        -ms-transform: rotate(45deg)
        transform: rotate(45deg)
</style>