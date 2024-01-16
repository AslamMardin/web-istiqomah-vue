import { defineStore } from 'pinia'
import http from '../api';
export const useMusik = defineStore('musik', {
    state: () => ({
        musiks: [],
        audio: null

    }),
    getters: {
        getAudio: (state) => {
            return state.audio
        }
    },

    actions: {
        getMusik,
        setAudio
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

function setAudio(preload) {
    return new Promise((resolve, reject) => {
        try {
            this.audio = new Audio(preload);
        } catch (e) {
            reject(e);
        }
    })
}


