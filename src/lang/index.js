import Vue from 'vue';
import VueI18N from 'vue-i18n';
import en from './en';
import cn from './cn';
import { getLocale, saveLocale } from '../utils/loaclStorage';

Vue.use(VueI18N);

let locale = getLocale();

if (!locale) {
  locale = 'cn';
  saveLocale(locale);
}

const messages = {
  en,
  cn,
};
console.log(messages);

const i18n = new VueI18N({
  locale,
  messages,
});

export default i18n;
