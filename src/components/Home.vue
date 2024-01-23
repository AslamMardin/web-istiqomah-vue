<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container">
            <a class="navbar-brand" href="#">
                <img :src="imgDoa" style="width: 2rem;" alt="">
                ISTIQOMAH
            </a>
            <!-- <button class="navbar-toggler" style="color: white;" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button> -->
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <div class="me-auto"></div>
                <!-- <ul class="navbar-nav menu">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/" :class="{ 'active': menuActive == 'beranda' }"
                            @click="menuActive = 'beranda'">Bacaan</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/musik" :class="{ 'active': menuActive == 'musik' }"
                            @click="menuActive = 'musik'">Musik</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/kisah" :class="{ 'active': menuActive == 'kisah' }"
                            @click="menuActive = 'kisah'">Kisah</router-link>
                    </li>

                </ul> -->
            </div>
        </div>
    </nav>
</template>
<script setup>
import { ref } from 'vue'
import imgDoa from '../../public/img/ceramah.png'
// const menuActive = ref('beranda')
</script>

<style scoped>
span {
    color: #fff !important;
}

nav {
    background-color: #294B29 !important;
}

nav a {
    color: #fff !important;
}
</style>