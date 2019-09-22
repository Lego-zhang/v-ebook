/**
 * @settingVisible 参数
 * -1 不显示
 * 0 字号
 * 1 主题
 * 2 进度
 * 3 目录
 * @currentBook epub对象下的book
*/

const book = {
  state: {
    fileName: '',
    menuVisible: false,
    settingVisible: -1,
    defaultFontSize: 16,
    defaultFontFamily: 'Default',
    fontFamilyVisible: false,
    defaultTheme: 'Default',
    bookAvailable: false,
    progress: 0,
    section: 0,
    isPaginating: true,
    currentBook: null,
    navigation: null,
    cover: null,
    metadata: null,
    paginate: '',
    pagelist: null,
    offsetY: 0,
    isBookmark: null,

  },
  mutations: {
    SET_FILENAME: (state, fileName) => {
      // eslint-disable-next-line no-param-reassign
      state.fileName = fileName;
    },
    SET_MENU_VISIBLE: (state, menuVisible) => {
      // eslint-disable-next-line no-param-reassign
      state.menuVisible = menuVisible;
    },
    SET_SETTING_VISIBLE: (state, settingVisible) => {
      // eslint-disable-next-line no-param-reassign
      state.settingVisible = settingVisible;
    },
    SET_DEFAULT_FONT_SIZE: (state, defaultFontSize) => {
      // eslint-disable-next-line no-param-reassign
      state.defaultFontSize = defaultFontSize;
    },
    SET_DEFAULT_FONT_FAMILY: (state, font) => {
      // eslint-disable-next-line no-param-reassign
      state.defaultFontFamily = font;
    },
    SET_FONT_FAMILY_VISIBLE: (state, visible) => {
      // eslint-disable-next-line no-param-reassign
      state.fontFamilyVisible = visible;
    },
    SET_DEFAULT_THEME: (state, theme) => {
      // eslint-disable-next-line no-param-reassign
      state.defaultTheme = theme;
    },
    SET_BOOK_AVAILABLE: (state, bookAvailable) => {
      // eslint-disable-next-line no-param-reassign
      state.bookAvailable = bookAvailable;
    },
    SET_PROGRESS: (state, progress) => {
      // eslint-disable-next-line no-param-reassign
      state.progress = progress;
    },
    SET_SECTION: (state, section) => {
      // eslint-disable-next-line no-param-reassign
      state.section = section;
    },
    SET_IS_PAGINATING: (state, isPaginating) => {
      // eslint-disable-next-line no-param-reassign
      state.isPaginating = isPaginating;
    },
    SET_CURRENT_BOOK: (state, currentBook) => {
      // eslint-disable-next-line no-param-reassign
      state.currentBook = currentBook;
    },
    SET_NAVIGATION: (state, navigation) => {
      // eslint-disable-next-line no-param-reassign
      state.navigation = navigation;
    },
    SET_COVER: (state, cover) => {
      // eslint-disable-next-line no-param-reassign
      state.cover = cover;
    },
    SET_METADATA: (state, metadata) => {
      // eslint-disable-next-line no-param-reassign
      state.metadata = metadata;
    },
    SET_PAGINATE: (state, paginate) => {
      // eslint-disable-next-line no-param-reassign
      state.paginate = paginate;
    },
    SET_PAGELIST: (state, pagelist) => {
      // eslint-disable-next-line no-param-reassign
      state.pagelist = pagelist;
    },
    SET_OFFSETY: (state, offsetY) => {
      // eslint-disable-next-line no-param-reassign
      state.offsetY = offsetY;
    },
    SET_IS_BOOKMARK: (state, isBookmark) => {
      // eslint-disable-next-line no-param-reassign
      state.isBookmark = isBookmark;
    },
  },
};
export default book;
