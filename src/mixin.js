import {mapState, mapGetters} from 'vuex';

export default {
    data() {
        return {};
    },
    methods: {},
    computed: {
        ...mapState([
          'isInitiated'
        ]),
        ...mapGetters(['something'])
    }
};
