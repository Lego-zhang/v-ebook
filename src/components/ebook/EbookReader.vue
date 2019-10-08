<template>
  <div class="ebook-reader">
    <div id="read"></div>
  </div>
</template>

<script>
import Epub from 'epubjs';
import ebookMixin from '../../utils/mixin';
import {
  saveFontFamily,
  getFontFamily,
  saveFontSize,
  getFontSize,
  getTheme,
  saveTheme,
} from '../../utils/loaclStorage';

import { addCss } from '../../utils/book';

global.ePub = Epub;
export default {
  mixins: [ebookMixin],
  methods: {
    prevPage() {
      if (this.rendition) {
        this.rendition.prev();
        this.hedeTitleAndMenu();
      }
    },
    nextPage() {
      if (this.rendition) {
        this.rendition.next();
        this.hedeTitleAndMenu();
      }
    },
    toggleTitleAndMenu() {
      // this.$store.dispatch('setMenuVisible', !this.menuVisible);

      if (this.menuVisible) {
        this.setSettingVisible(-1);
        this.setFontFamilyVisible(false);
      }
      this.setMenuVisible(!this.menuVisible);
    },
    hedeTitleAndMenu() {
      // this.$store.dispatch('setMenuVisible', false);
      this.setMenuVisible(false);
      this.setSettingVisible(-1);
      this.setFontFamilyVisible(false);
    },
    initFontSize() {
      const fontSize = getFontSize(this.fileName);
      if (!fontSize) {
        saveFontSize(this.fileName, this.defaultFontSize);
      } else {
        this.rendition.themes.fontSize(fontSize);
        this.setDefaultFontSize(fontSize);
      }
    },
    initFontFamily() {
      const font = getFontFamily(this.fileName);
      if (!font) {
        saveFontFamily(this.fileName, this.defaultFontFamily);
      } else {
        this.rendition.themes.font(font);
        this.setDefaultFontFamily(font);
      }
    },
    initTheme() {
      let defaultTheme = getTheme(this.flieName);
      if (!defaultTheme) {
        defaultTheme = this.themeList[0].name;
        this.setDefaultTheme(defaultTheme);
        saveTheme(this.fileName, defaultTheme);
      }
      this.themeList.forEach((theme) => {
        this.rendition.themes.register(theme.name, theme.style);
      });
      this.rendition.themes.select(defaultTheme);
    },
    initGlobalStyle() {
      addCss(`${process.env.VUE_APP_RES_URL}theme/theme_default.css`);
    },
    initEpub() {
      const baseUrl = `${process.env.VUE_APP_RES_URL}/epub/${this.fileName}.epub`;
      this.book = new Epub(baseUrl);
      this.setCurrentBook(this.book);
      this.rendition = this.book.renderTo('read', {
        // eslint-disable-next-line no-restricted-globals
        width: innerWidth,
        // eslint-disable-next-line no-restricted-globals
        height: innerHeight,
        method: 'default',
      });
      this.rendition.display().then(() => {
        this.initTheme();
        this.initFontFamily();
        this.initFontSize();
        this.initGlobalStyle();
      });
      // 绑定事件
      this.rendition.on('touchstart', (event) => {
        // 获取手指触碰的X轴的位置
        this.touchStartX = event.changedTouches[0].clientX;
        // 获取手指触碰时间
        this.touchStartTime = event.timeStamp;
      });

      this.rendition.on('touchend', (event) => {
        const offsetX = event.changedTouches[0].clientX - this.touchStartX;
        const time = event.timeStamp - this.touchStartTime;
        if (time < 500 && offsetX > 40) {
          // 进入下一页
          this.prevPage();
        } else if (time < 500 && offsetX < -40) {
          // 进入上一页
          this.nextPage();
        } else {
          // 显示边框
          this.toggleTitleAndMenu();
        }
        event.preventDefault();
        event.stopPropagation();
      });

      this.rendition.hooks.content.register((contents) => {
        contents.addStylesheet(`${process.env.VUE_APP_RES_URL}/fonts/cabin.css`);
        contents.addStylesheet(`${process.env.VUE_APP_RES_URL}/fonts/daysOne.css`);
        contents.addStylesheet(`${process.env.VUE_APP_RES_URL}/fonts/montserrat.css`);
        contents.addStylesheet(`${process.env.VUE_APP_RES_URL}/fonts/tangerine.css`);
      });
    },
  },
  mounted() {
    const fileName = this.$route.params.fileName.split('|').join('/');
    // fileName在很多地方要使用所以要使用Vuex

    // this.$store.dispatch('setFileName', fileName).then(() => {
    //   this.initEpub();
    // });
    this.setFileName(fileName).then(() => {
      this.initEpub();
    });
  },
};
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
@import "../../assets/styles/global";
</style>
