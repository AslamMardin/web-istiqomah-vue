<template>
    <div class="container">
        <div v-if="isLoading" class="d-flex justify-content-between my-5 align-items-center">
            <ClipLoader color="#638889" :style="{ 'margin': '0rem auto' }" />
        </div>
        <div v-else class="row my-3">
            <div class="col-lg-8 offset-lg-2 col-sm-12">
                <div class="card shadow-sm mt-2" v-for="(item, i) in kisah.kisah">
                    <div class="card-body">
                        <h5 class="card-title">{{ item.name }}</h5>
                        <h6 class="card-subtitle mb-2 text-body-secondary">Usia {{ item.usia }} - Thn {{ item.thn_kelahiran
                        }}
                        </h6>
                        <p class="card-text" style="max-height: 10rem;">{{ item.description }}</p>
                        <router-link :to="{ name: 'kisah.show', params: { id: i } }" class="card-link">Baca
                            lengkapnya</router-link>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useKisah } from '../store/useKisah'

import ClipLoader from 'vue-spinner/src/ClipLoader.vue'
const isLoading = ref(true);
const kisah = useKisah()


onMounted(async () => {
    try {
        await kisah.getKisah();
    } catch (error) {
        console.error('Error fetching kisah data:', error);
    } finally {
        isLoading.value = false;
    }
})
</script>

<style scoped>
.card-text {
    overflow: hidden;

    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
}
</style>