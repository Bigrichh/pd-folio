<template>
    <div class="position">
        <div class="icon-div" @click="scrollToTop">
            <Icon icon="fluent:arrow-up-16-regular" color="rgba(53, 53, 53, 0.40)" width="28" :rotate="4" />
        </div>
    </div>
</template>



<script>
import { Icon } from '@iconify/vue';
export default {
    name: 'ScrollToTop',
    components: {
        Icon,
    },
    methods: {
        scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth' // This provides a smooth scroll animation
            });
        }
    }
}
</script>


<style scoped>
.position {
    position: fixed;
    bottom: 5%;
    right: 2%;

}

.icon-div {
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    border-radius: 100%;
    border: 2px solid rgba(53, 53, 53, 0.40);
    margin-top: -8px;
    opacity: 0.4;
    transition: all 0.3s ease-in-out;
}

.icon-div:hover {
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    border-radius: 100%;
    border: 2px solid rgba(53, 53, 53, 0.40);
    margin-top: -8px;
    opacity: 1;
    cursor: pointer;
}

</style>