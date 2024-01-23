<template>
    <div class="container-sm ">
        <div class="row">
            <div class="col-lg-6 col-md-6 col-12">
                <SectionHeader />
            </div>
            <div class="col-lg-6 col-md-6 col-12">
                <ListMusik></ListMusik>
            </div>

        </div>
    </div>
</template>
<script setup>
import SectionHeader from '../components/SectionHeader.vue'
import ListMusik from '../components/ListMusik.vue';
</script>