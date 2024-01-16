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

const currentId = ref(null);
const audioElement = ref(null);

const isPlaying = ref(false);
const currentTime = ref(0);
const totalDuration = ref(0);
const progressBarWidth = ref('0%');

const title = ref("")
const arti = ref("")
const keterangan = ref("")
const selectedAudio = ref("http://ia802609.us.archive.org/13/items/quraninindonesia/008AlAnfaal.mp3");
const setTotalDuration = () => {
    totalDuration.value = audioElement.value.duration;
};

const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
};

const togglePlayPause = () => {
    if (isPlaying.value) {
        audioElement.value.pause();
    } else {
        audioElement.value.play();
    }
    isPlaying.value = !isPlaying.value;
};

const updateTime = () => {
    currentTime.value = audioElement.value.currentTime;

    // Pause jika sudah mencapai total durasi
    if (currentTime.value >= totalDuration.value) {
        audioElement.value.pause();
        isPlaying.value = false;
    }

    // Update lebar progress bar
    progressBarWidth.value = `${(currentTime.value / totalDuration.value) * 100}%`;

};

const changeAudioSource = () => {
    audioElement.value.pause();
    audioElement.value.currentTime = 0;
    audioElement.value.load();
    audioElement.value.play();
    isPlaying.value = true;
};
const _play = (i, item) => {
    currentId.value = i
    selectedAudio.value = item.audio
    title.value = item.nama;
    arti.value = item.arti
    keterangan.value = item.keterangan

    isPlaying.value = false
}
// http://ia802609.us.archive.org/13/items/quraninindonesia/008AlAnfaal.mp3

onMounted(() => {
    _getMusik()
})
</script>

<template>
    <audio ref="audioElement" :src="selectedAudio" @timeupdate="updateTime" @loadedmetadata="setTotalDuration"></audio>
    <div class="row row-audio m-lg-5" v-show="title != ''">
        <div class="col-3">
            <button class="btn-play" @click="togglePlayPause"><i class="bi"
                    :class="isPlaying ? 'bi-pause-fill' : 'bi-play-fill'"></i></button>
        </div>
        <div class="col-9">
            <p></p>
            <p></p>
            <h6>
                <b style="color: #638889;">{{ title != "" ? title : "" }} </b> {{ arti != "" ? " (" + arti + ")" : ""
                }}

                <a href="#" @click.prevent="" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <i class="bi bi-file-text"></i>
                </a>
            </h6>
            <p style="text-secondary"><i class="bi bi-alarm"></i> {{ formatTime(currentTime) }} - {{
                formatTime(totalDuration) }}
            </p>
            <div class="progress-bar-container">
                <div class="progress-bar" :style="{ width: progressBarWidth }"></div>
            </div>
        </div>
        <select style="visibility: hidden;" v-model="selectedAudio" @change="changeAudioSource">
            <option v-for="( audio, i ) in  musik.musiks " :key="i" :value="audio.audio">{{ audio.nama }}</option>
        </select>
    </div>


    <section id="list">
        <div class="d-block scrollable-section">


            <div v-if="isLoading" class="d-flex justify-content-between align-items-center">
                <BeatLoader color="#638889" :style="{ 'margin': '0rem auto' }" />
            </div>
            <ol v-else class="list-group ">
                <li v-for="( item, i ) in  musik.musiks " :key="i"
                    class="list-group-item d-flex justify-content-between align-items-start">
                    <div class="ms-2 me-auto">
                        <div class="fw-bold">{{ item.nama }}</div>
                        <i>
                            {{ item.arti }}
                        </i>
                    </div>
                    <a href="#" @click.prevent="_play(i, item)">
                        <i class="bi" :class="(currentId == i) ? 'bi-soundwave play-on' : 'bi-speaker play-off'"></i>
                    </a>
                </li>

            </ol>
        </div>
    </section>





    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Keterangan</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <p style="text-align: justify;" v-if="keterangan != ''" v-html="keterangan">

                    </p>
                </div>

            </div>
        </div>
    </div>
</template>

<style scoped>
.row-audio {
    background-color: #F8EDFF;
    margin-bottom: 3rem;
}

.btn-play {
    height: 4rem;
    width: 4rem;
    border-radius: 50%;
    margin: 1rem;
    background-color: #9DBC98;
    border: 0px solid #fff;
}

.btn-play i {
    font-size: 1.8rem;
}

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


.play-on {
    font-size: 2rem;
    color: #638889;
}

.play-off {
    font-size: 2rem;
    color: #9DBC98;
}

.audio-player-container {
    text-align: center;
    padding: 20px;
}

.audio-controls {
    margin-top: 10px;
}

.progress-bar-container {
    width: 100%;
    height: 10px;
    background-color: #eee;
    margin-top: 10px;
    border-radius: 1rem;
}

.progress-bar {
    height: 100%;
    background-color: #4caf50;
    transition: width 0.2s ease-in;
}

.scrollable-section {
    height: 40rem;
    /* Atur tinggi sesuai kebutuhan */
    overflow-y: auto;
    /* Menentukan bahwa scroll vertikal hanya muncul jika kontennya lebih besar dari tinggi container */
    /* Contoh: garis border untuk memberi tampilan container */
    padding: 10px;
    /* Contoh: memberikan ruang di dalam container */

    /* Gaya scroll custom */
    scrollbar-width: thin;
    /* Menentukan lebar scroll untuk browser yang mendukung */
    scrollbar-color: #4caf50 #f5f5f5;
    /* Warna scroll thumb dan track */
}

/* Gaya untuk browser yang mendukung WebKit (Chrome, Safari) */
.scrollable-section::-webkit-scrollbar {
    width: 12px;
    /* Lebar scroll */
}

.scrollable-section::-webkit-scrollbar-thumb {
    background-color: #4caf50;
    /* Warna thumb scroll */
    border-radius: 10px;
    /* Warna thumb scroll */
}

.scrollable-section::-webkit-scrollbar-track {
    background-color: #f5f5f5;
    /* Warna track scroll */
    border-radius: 10px;
}

#list {
    box-shadow: 2px -5px 40px rgba(0, 0, 0, .2);
    padding: 3rem 0;
    border-radius: 2rem 2rem 0 0;
}

@media (max-width: 768px) {



    .progress-bar-container {
        width: 14rem;

    }

    #list {
        box-shadow: 2px -5px 40px rgba(0, 0, 0, .2);
        padding: 3rem 0;
        border-radius: 2rem 2rem 0 0;
    }

    /* Tambahkan perubahan gaya CSS lainnya sesuai kebutuhan */
}
</style>

