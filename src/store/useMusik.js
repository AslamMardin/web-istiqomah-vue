import { defineStore } from 'pinia'
import http from '../api';
export const useMusik = defineStore('musik', {
    state: () => ({
        musiks: [],

    }),
    actions: {
        getMusik,
    }
})



function getMusik() {
    return new Promise(async (resolve, reject) => {
        try {
            let response = await http.get("data");
            this.musiks = response.data
            resolve(response.data)
        } catch (e) {
            reject(e);
        }
    })
}


