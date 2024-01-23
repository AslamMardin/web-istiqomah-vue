import { defineStore } from "pinia";
import http from '../apiIslamic';

export const useKisah = defineStore('kisah', {
    state: () => ({
        kisah: [],
        showDetail: []
    }),
    actions: {
        getKisah,
        showKisah
    }
});


function getKisah() {

    return new Promise(async (resolve, reject) => {
        try {
            let response = await http.get("kisahnabi");
            // Mengasumsikan file JSON berisi sebuah array, perbarui state
            this.kisah = response.data;
            resolve(response.data)
        } catch (e) {
            reject(e);
        }
    });

}

function showKisah(index = 0) {

    return new Promise(async (resolve, reject) => {
        try {
            let response = await http.get("kisahnabi");
            // Mengasumsikan file JSON berisi sebuah array, perbarui state
            this.showDetail = response.data[index]
            return response.data;
        } catch (e) {
            reject(e);
        }
    });

}