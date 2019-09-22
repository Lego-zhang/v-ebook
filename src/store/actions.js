const actions = {
  setFontFamilyVisible: ({ commit }, visible) => commit('SET_FONT_FAMILY_VISIBLE', visible),
  setDefaultFontFamily: ({ commit }, font) => commit('SET_DEFAULT_FONT_FAMILY', font),
  setDefaultFontSize: ({ commit }, fontSize) => commit('SET_DEFAULT_FONT_SIZE', fontSize),
  setSettingVisible: ({ commit }, visible) => commit('SET_SETTING_VISIBLE', visible),
  setMenuVisible: ({ commit }, visible) => commit('SET_MENU_VISIBLE', visible),
  setFileName: ({ commit }, fileName) => commit('SET_FILENAME', fileName),
  setDefaultTheme: ({ commit }, theme) => commit('SET_DEFAULT_THEME', theme),
  setBookAvailable: ({ commit }, bookAvailable) => commit('SET_BOOK_AVAILABLE', bookAvailable),
  setProgress: ({ commit }, progress) => commit('SET_PROGRESS', progress),
  setSection: ({ commit }, section) => commit('SET_SECTION', section),
  setIsPaginating: ({ commit }, isPaginating) => commit('SET_IS_PAGINATING', isPaginating),
  setCurrentBook: ({ commit }, book) => commit('SET_CURRENT_BOOK', book),
  setNavigation: ({ commit }, navigation) => commit('SET_NAVIGATION', navigation),
  setCover: ({ commit }, cover) => commit('SET_COVER', cover),
  setMetadata: ({ commit }, metadata) => commit('SET_METADATA', metadata),
  setPaginate: ({ commit }, paginate) => commit('SET_PAGINATE', paginate),
  setPagelist: ({ commit }, pagelist) => commit('SET_PAGELIST', pagelist),
  setIsBookmark({ commit }, isBookmark) {
    return commit('SET_IS_BOOKMARK', isBookmark);
  },
  setOffsetY({ commit }, offsetY) {
    return commit('SET_OFFSETY', offsetY);
  },
  setHotSearchOffsetY({ commit }, offsetY) {
    return commit('SET_HOT_SEARCH_OFFSETY', offsetY);
  },
  setFlapCardVisible({ commit }, flapCardVisible) {
    return commit('SET_FLAP_CARD_VISIBLE', flapCardVisible);
  },
  setIsEditMode({ commit }, isEditMode) {
    return commit('SET_IS_EDIT_MODE', isEditMode);
  },
  setShelfList({ commit }, list) {
    return commit('SET_SHELF_LIST', list);
  },
  setShelfSelected({ commit }, selected) {
    return commit('SET_SHELF_SELECTED', selected);
  },
  setShelfTitleVisible({ commit }, visible) {
    return commit('SET_SHELF_TITLE_VISIBLE', visible);
  },
  setShelfCategory({ commit }, category) {
    return commit('SET_SHELF_CATEGORY', category);
  },
  setCurrentType({ commit }, type) {
    return commit('SET_CURRENT_TYPE', type);
  },
};

export default actions;
