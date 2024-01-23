<template>
    <div class="container-sm">
        <div class="row p-2" id="header">
            <div class="col-lg-6 col-md-6 col-12">
                <img :src="gambarBeranda" alt="">
            </div>
            <div class="col-lg-6 col-md-6 col-12" id="content-header">
                <h2>MARI BERISTIQOMAH</h2>
                <h6>Jadikan Anak kita menjadi Soleh dan Membahagiakan Orang Tua</h6>
                <p>تَعَالَى اللَّهُ الْمَلِكُ الْحَقُّ ۗ وَلَا تَعْجَلْ بِالْقُرْآنِ مِنْ قَبْلِ أَنْ يُقْضَىٰ إِلَيْكَ
                    وَحْيُهُ ۖ وَقُلْ رَبِّ زِدْنِي عِلْمًا </p>
                <p>Artinya: Maka Maha Tinggi Allah Raja Yang sebenar-benarnya, dan janganlah kamu tergesa-gesa membaca Al
                    quran sebelum disempurnakan mewahyukannya kepadamu, dan katakanlah: “Ya Tuhanku, tambahkanlah kepadaku
                    ilmu pengetahuan” <br>(Q.S Surah At-Thaha Ayat 11).</p>
            </div>

        </div>
    </div>


    <div class="container px-4 py-5" id="featured-3">
        <h2 class="pb-2 border-bottom">Fitur yang ada</h2>
        <div class="row gap-1">
            <router-link to="/kisah" class="card text-white"
                style="text-decoration: none; color: inherit; overflow: hidden; border-radius: 10px; position: relative; background-color: #294B29;">
                <div class="d-flex align-items-center justify-content-center" style="height: 100%;">
                    <div class="d-flex justify-content-center align-items-center ">
                        <img :src="imgKisah" alt="" style="width: 3rem;">
                    </div>
                    <div class="card-body text-center">
                        <h5 class="card-title">Kisah Nabi</h5>
                    </div>
                </div>
            </router-link>

            <router-link to="/musik" class="card text-white"
                style="text-decoration: none; color: inherit; overflow: hidden; border-radius: 10px; position: relative; background-color: #294B29;">
                <div class="d-flex align-items-center justify-content-center" style="height: 100%;">
                    <div class="d-flex justify-content-center align-items-center ">
                        <img :src="imgAlquran" alt="" style="width: 3rem;">
                    </div>
                    <div class="card-body text-center">
                        <h5 class="card-title">Al-Qur'an</h5>
                    </div>
                </div>
            </router-link>

            <router-link to="/solawat" class="card text-white"
                style="text-decoration: none; color: inherit; overflow: hidden; border-radius: 10px; position: relative; background-color: #294B29;">
                <div class="d-flex align-items-center justify-content-center" style="height: 100%;">
                    <div class="d-flex justify-content-center align-items-center ">
                        <img :src="imgSolawat" alt="" style="width: 3rem;">
                    </div>
                    <div class="card-body text-center">
                        <h5 class="card-title">Solawat</h5>
                    </div>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script setup>
import gambarBeranda from '../../public/parens-club-mibs-300x300-removebg-preview.png'
import imgAlquran from '../../public/img/quran.png'
import imgKisah from '../../public/img/lighter.png'
import imgSolawat from '../../public/img/muhammad.png'
</script>

<style scoped>
#header {
    /* height: 100vh; */
}

#content-header {
    display: inline-flex;
    align-items: center;
    justify-items: center;
    flex-direction: column;
    margin: auto 0;
    font-weight: 200;
}

#step-istiqomah {
    background-color: #E1F0DA;
}

.col-4 i {
    font-size: 5rem;
    color: #BFD8AF;
}

img {
    width: 100%;
}

.card {
    width: 33%;
}

@media (max-width: 768px) {

    .card {
        width: 100%;
    }

    .col-4 i {
        font-size: 2rem;
        color: #BFD8AF;
    }

    /* Tambahkan perubahan gaya CSS lainnya sesuai kebutuhan */
}
</style>