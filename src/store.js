import { reactive } from 'vue';
import axios from 'axios';

export const store = reactive({
    loading: true,
    API_URL: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=10&offset=10243',
    yugiohCards: null,
    generateCards(url) {
        axios.get(url)
            .then(response => {
                console.log(response.data.data);
                this.yugiohCards = response.data.data
                this.loading = false
            })
            .catch(err => {
                console.log(err);

            })
    }
})