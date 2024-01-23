<template>
    <div class="container">
        <div class="row my-3">
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
const kisah = useKisah()
const _getKisah = async () => {
    await kisah.getKisah()
}

onMounted(() => {
    _getKisah();
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