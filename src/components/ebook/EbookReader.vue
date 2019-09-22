<template>
  <div class="ebook-reader">
    <div id="read"></div>
  </div>
</template>

<script>
import Epub from 'epubjs';
import ebookMixin from '../../utils/mixin';


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
      }
      this.setMenuVisible(!this.menuVisible);
    },
    hedeTitleAndMenu() {
      // this.$store.dispatch('setMenuVisible', false);
      this.setMenuVisible(false);
      this.setSettingVisible(-1);
    },
    initEpub() {
      console.log(this.fileName);
      const baseUrl = `http://192.168.1.8:9091/epub/${this.fileName}.epub`;
      this.book = new Epub(baseUrl);
      this.setCurrentBook(this.book);
      this.rendition = this.book.renderTo('read', {
        // eslint-disable-next-line no-restricted-globals
        width: innerWidth,
        // eslint-disable-next-line no-restricted-globals
        height: innerHeight,
        method: 'default',
      });
      this.rendition.display();
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
    },
  },
  mounted() {
    const fileName = this.$route.params.fileName.split('|').join('/');
    // fileName在很多地方要使用所以要使用Vuex

    // this.$store.dispatch('setFileName', fileName).then(() => {
    //   this.initEpub();
    // });
    console.log(fileName);
    this.setFileName(fileName).then(() => {
      this.initEpub();
    });
  },
};
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
@import "../../assets/styles/global";
</style>
