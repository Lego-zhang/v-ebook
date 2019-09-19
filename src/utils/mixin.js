import { mapGetters } from 'vuex';

const ebookMixin = {
  computed: {
    ...mapGetters(['fileName', 'menuVisible']),
  },
};

export default ebookMixin;
