import { reactive } from 'vue';
import axios from 'axios';

export const store = reactive({
    loading: true,
    API_URL: 'https://db.ygoprodeck.com/api/v7/cardinfo.php',
    yugiohCards: null,
    generateCards(url) {
            axios.get(url)
                .then(response => {
                    console.log(response.data.data);
                    this.yugiohCards = response.data.data
                    console.log(response.data.data[2400].card_images);
                    this.loading = false
                })
                .catch(err => {
                    console.log(err);
                    
                })
        }
})