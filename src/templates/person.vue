<template>
    <div id="person" class="container">
        <detail-block :title="'NumberGo'" :images="numbergoImages" :progressBars="numbergoPLUsage" :helpTexts="numbergoHelpTexts"></detail-block>
        <detail-block :title="'Joy You-I-He 蘭花園'" :images="steamGameImages" :progressBars="steamGamePLUsage" :helpTexts="steamGameHelpTexts"></detail-block>
    </div>
</template>

<script>
import DetailBlock from '../components/detail-block.vue';
import Underline from '../components/underline.vue';

export default {
    name: 'person',
    mounted() {
        setTimeout(this.initPLUsages, 500);
    },
    components: {
        DetailBlock,
        Underline,
    },
    data() {
        return {
            numbergoImages: [
                { link: '/img/numbergo1.jpg', alt: 'numbergo1' },
                { link: '/img/numbergo2.jpg', alt: 'numbergo2' },
                { link: '/img/numbergo3.jpg', alt: 'numbergo3' },
                { link: '/img/numbergo4.jpg', alt: 'numbergo4' },
                { link: '/img/numbergo5.jpg', alt: 'numbergo5' },
                { link: '/img/numbergo6.jpg', alt: 'numbergo6' },
                { link: '/img/numbergo7.jpg', alt: 'numbergo7' },
            ],
            numbergoPLUsage: [
                { title: 'HTML,CSS,JS(Vue)', width: '0%', targetWidth: '50%', styleClass: 'prog-green' },
                { title: 'C#(ASP.NET Core)', width: '0%', targetWidth: '35%', styleClass: 'prog-orange' },
                { title: 'MariaDB', width: '0%', targetWidth: '15%', styleClass: 'prog-violet' },
            ],
            numbergoHelpTexts: [
                '1. 基於HTML的益智單人小遊戲',
                '2. 遊戲語言包含中文與英文',
                '3. 後端與資料庫位於Oracle cloud vm，以獲得較多的效能以及權限管理',
                '4. 可分享遊戲分數連結，當Crawler在抓取連結資料時，也能順利取得相關資料(包含暱稱、分數、通關時間)',
                '5. 遊戲網址: numbergo.me'
            ],
            steamGameImages: [{ link: '/img/steam1.jpg', alt: 'steam1' }],
            steamGamePLUsage: [{ title: 'C#', width: '0%', targetWidth: '100%', styleClass: 'prog-orange' }],
            steamGameHelpTexts: ['1. AVG單人電腦遊戲，使用C#與MonoGame開發', '2. 程式串接了Steam API，這包含了Steam啟動器、Steam成就、Steam存檔等等'],
        };
    },
    methods: {
        initPLUsages() {
            this.updateWidthOfArray(this.numbergoPLUsage);
            this.updateWidthOfArray(this.steamGamePLUsage);
        },
        updateWidthOfArray(arr) {
            for (let i = 0; i < arr.length; i++) {
                arr[i].width = arr[i].targetWidth;
            }
        },
    },
};
</script>