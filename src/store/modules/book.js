const book = {
  state: {
    fileName: '',
    menuVisible: false,
  },
  mutations: {
    SET_FILENAME: (state, fileName) => {
      // eslint-disable-next-line no-param-reassign
      state.fileName = fileName;
    },
    SET_MENUVISIBLE: (state, menuVisible) => {
      // eslint-disable-next-line no-param-reassign
      state.menuVisible = menuVisible;
    },
  },
  actions: {
    setFileName: ({ commit }, fileName) => commit('SET_FILENAME', fileName),
    setMenuVisible: ({ commit }, menuVisible) => commit('SET_MENUVISIBLE', menuVisible),
  },
};
export default book;
