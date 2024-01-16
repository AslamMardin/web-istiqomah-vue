<script setup>
import gambarUtama from '../../public/a.png';
</script>
<template>
    <section class="d-flex justifyd-flex justify-content-center vh-100">
        <div class="content text-center p-3">
            <img :src="gambarUtama" alt="">
            <h5>Ayo Ceriahkan Hidupmu dengan Mendengarkan Al-Qur'an</h5>
            <a href="#list">
                <i class="bi bi-play-circle-fill"></i>
            </a>
        </div>
    </section>
</template>

<style scoped>
img {
    width: 20rem;
    margin-top: 3rem;
}

h5 {
    color: #9DBC98;
    margin-bottom: 3rem;
}

a:hover {
    color: #638889;
    display: block;
}

@keyframes upDownAnimation {

    0%,
    100% {
        font-size: 2.4rem;
    }

    50% {
        font-size: 2.8rem;
        color: #EBD9B4;
    }
}

i {
    color: #9DBC98;
    animation-name: upDownAnimation;
    animation-duration: 2s;
    animation-timing-function: ease-in in;
    animation-iteration-count: infinite;
}

i:hover {
    color: #EBD9B4;
}
</style>