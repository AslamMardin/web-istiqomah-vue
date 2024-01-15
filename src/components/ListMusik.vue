<script setup>
import { ref, onMounted } from 'vue';
import BeatLoader from 'vue-spinner/src/BeatLoader.vue'
const isLoading = ref(true);

import { useMusik } from '../store/useMusik'
const musik = useMusik();
const _getMusik = async () => {
    try {
        return await musik.getMusik();
    } catch (error) {
        alert(error);
    } finally {
        isLoading.value = false;
    }
}

const currentAudioSrc = ref(null)
const currentId = ref(null);
const audioElement = ref(null);
const _play = (i, a) => {
    currentAudioSrc.value = a
    if (currentAudioSrc.value != null) {
        audioElement.play();
    }
    // listAudio[i] = new Audio(a);
    // listAudio[i].play();


}


onMounted(() => {
    _getMusik()
})
</script>

<template>
    <audio ref="audioElement" :src="currentAudioSrc"></audio>
    <section id="list">
        <div class="d-block" style="max-height: 40rem; overflow-y: scroll;">


            <div v-if="isLoading" class="d-flex justify-content-between align-items-center">
                <BeatLoader color="#638889" :style="{ 'margin': '0rem auto' }" />
            </div>
            <ol v-else class="list-group ">
                <li v-for="(item, i) in musik.musiks" :key="i"
                    class="list-group-item d-flex justify-content-between align-items-start">
                    <div class="ms-2 me-auto">
                        <div class="fw-bold">{{ item.nama }}</div>
                        <i>
                            {{ item.arti }}
                        </i>
                    </div>
                    <a href="#" @click.prevent="_play(i, item.audio)">
                        <i class="bi play" :class="(currentId == i) ? 'bi-pause-fill' : 'bi-play-fill'"></i>
                    </a>
                </li>

            </ol>
        </div>
    </section>
</template>

<style scoped>
#list {
    padding: 3rem 0;
}

ol {
    list-style: none;
}

i {
    font-weight: 200;
}

.fw-bold {
    color: #638889 !important;
}

.play {
    font-size: 2rem;
    color: #9DBC98;
}

@media (max-width: 768px) {

    #list {
        box-shadow: 2px -5px 40px rgba(0, 0, 0, .2);
        padding: 3rem 0;
        border-radius: 2rem 2rem 0 0;
    }

    /* Tambahkan perubahan gaya CSS lainnya sesuai kebutuhan */
}
</style>