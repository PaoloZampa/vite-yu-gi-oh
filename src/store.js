import { reactive } from 'vue';
import axios from 'axios';

export const store = reactive({
    loading: true,
    API_URL: 'https://db.ygoprodeck.com/api/v7/cardinfo.php',
    yugiohRandomCard: null,
    info: null,
    generateCards(url) {
            axios.get(url)
                .then(response => {
                    console.log(response.data);
                    this.yugiohRandomCard = response.data.results
                    this.name = response.data.name
                    this.loading = false
                })
                .catch(err => {
                    console.log(err);
                    console.error(err.messagge);
                })
        }
})