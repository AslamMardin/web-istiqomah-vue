<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-8 offset-lg-2 col-sm-12">
                <div class="card pb-5 w-100 my-3 shadow-lg" v-for="(item, i) in solawats">
                    <div class="card-body">
                        <h5 class="card-title">{{ item.nama }}</h5>
                        <p class="card-text" style="text-align: right; font-size: 1.5rem;">{{ item.arab }}</p>
                        <p class="card-text text-left"><b>{{ item.latin }}</b></p>
                        <p v-if="showTranslation && activeCard === i">Artinya : {{ item.arti }}</p>
                        <button @click="toggleTranslation(i)" class="btn btn-link text-decoration-none mx-auto">
                            <i :class="['bi', showTranslation === i ? 'bi-arrow-up' : 'bi-arrow-down']"></i> Tampilkan Arti
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
// import solawatData from '@/assets/solawat.json'
import { ref, onMounted } from 'vue';
const solawats = ref([])
const showTranslation = ref(false);
const activeCard = ref(null);

const toggleTranslation = (index) => {
    showTranslation.value = !showTranslation.value;

    if (activeCard === index) {
        showTranslation.value = !showTranslation.value;
    } else {
        // Jika kartu yang berbeda diklik, perbarui activeCard dan set showTranslation menjadi true
        activeCard.value = index;
        showTranslation.value = true;
    }
};
const getSolawat = async () => {
    try {
        let response = await fetch('/src/assets/sholawat.json');
        let data = await response.json();
        console.log(data)
        solawats.value = data
    } catch (error) {
        console.error('Error fetching solawat data:', error);
    }
}

onMounted(() => {
    getSolawat()
})
</script>

<style scoped>
.card {
    transition: all .5s;
}

.btn-link {
    position: absolute;
    bottom: 1rem;
    left: 50%;
    transform: translateX(-50%);

}

.card {
    transition: all 0.5s;
}
</style>