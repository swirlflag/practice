import ListView from './ListView.vue';
import bus from '../utils/bus.js';

const createListView = (name) => {
    return {
        name : "HOC_" + name,
        components : {
            ListView
        },
        created() {
            bus.$emit('start:spinner');
            setTimeout(() => {
                this.$store.dispatch('FETCH_LIST', this.$route.name)
                    .then(() => {
                        bus.$emit('end:spinner');
                    })
                    .catch((error) => {
                        console.log(error)
                    })
                ;
            },100)
        },
        render(createElement) {
            return createElement(ListView);
        }
    }
}

export default createListView;