const actions = {
  setFileName: ({ commit }, fileName) => commit('SET_FILENAME', fileName),
  setMenuVisible: ({ commit }, menuVisible) => commit('SET_MENUVISIBLE', menuVisible),
};
export default actions;
