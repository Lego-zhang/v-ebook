const store = {
  state: {
    hotSearchOffsetY: 0,
    flapCardVisible: false,
    isEditMode: false,
    shelfList: [],
    shelfSelected: [],
    shelfTitleVisible: true,
    shelfCategory: [], // 书架分类列表数据
    currentType: 1, // 书架列表为1，书架分类列表为2
  },
  mutations: {
    SET_HOT_SEARCH_OFFSETY(state, y) {
      // eslint-disable-next-line no-param-reassign
      state.hotSearchOffsetY = y;
    },
    SET_FLAP_CARD_VISIBLE(state, visible) {
      // eslint-disable-next-line no-param-reassign
      state.flapCardVisible = visible;
    },
    SET_IS_EDIT_MODE(state, isEditMode) {
      // eslint-disable-next-line no-param-reassign
      state.isEditMode = isEditMode;
    },
    SET_SHELF_LIST(state, list) {
      // eslint-disable-next-line no-param-reassign
      state.shelfList = list;
    },
    SET_SHELF_SELECTED(state, selected) {
      // eslint-disable-next-line no-param-reassign
      state.shelfSelected = selected;
    },
    SET_SHELF_TITLE_VISIBLE(state, visible) {
      // eslint-disable-next-line no-param-reassign
      state.shelfTitleVisible = visible;
    },
    SET_SHELF_CATEGORY(state, category) {
      // eslint-disable-next-line no-param-reassign
      state.shelfCategory = category;
    },
    SET_CURRENT_TYPE(state, type) {
      // eslint-disable-next-line no-param-reassign
      state.currentType = type;
    },
  },
};

export default store;
