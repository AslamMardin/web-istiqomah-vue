
<template>
    <div class="container">
        <div class="row mt-3">

            <center>
                <img :src="kisah.showDetail.image_url" width="100" height="100" alt="">

                <p>gambar</p>
                <p>{{ kisah.showDetail.name }}</p>
            </center>
            <p style="text-align: justify;" v-html="kisah.showDetail.description"></p>
        </div>
    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useKisah } from '../store/useKisah'
const kisah = useKisah()
const id = ref(0);
const _getShowKisah = async () => {
    await kisah.showKisah(id.value)
}

const router = useRoute();


onMounted(() => {
    id.value = router.params.id;
    _getShowKisah()
})
</script>