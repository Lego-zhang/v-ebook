import { mapGetters, mapActions } from 'vuex';

const ebookMixin = {
  computed: {
    ...mapGetters(['fileName', 'menuVisible']),
  },
  methods: {
    ...mapActions(['setMenuVisible', 'setFileName']),
  },

};

export default ebookMixin;
