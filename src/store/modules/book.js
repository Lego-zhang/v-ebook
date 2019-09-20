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
};
export default book;
