const book = {
  state: {
    test: 1,
  },
  mutations: {
    SET_TEST: (state, newTest) => {
      // eslint-disable-next-line no-param-reassign
      state.test = newTest;
    },
  },
  actions: {
    setTest: ({ commit, state }, newTest) => {
      console.log(state);
      return commit('SET_TEST', newTest);
    },
  },
};
export default book;
