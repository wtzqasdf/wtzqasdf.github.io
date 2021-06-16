<template>
    <div id="works" class="container">
        <!-- 物品進出管理系統 -->
        <div class="row">
            <div class="col-full text-center">
                <h1>物品進出管理系統</h1>
            </div>
        </div>
        <div class="row">
            <div class="col-full text-center">
                <a href="/img/ims1.jpg" target="_blank">
                    <img src="/img/ims1.jpg" alt="ims1" />
                </a>
                <a href="/img/ims2.jpg" target="_blank">
                    <img src="/img/ims2.jpg" alt="ims2" />
                </a>
                <a href="/img/ims3.jpg" target="_blank">
                    <img src="/img/ims3.jpg" alt="ims3" />
                </a>
                <a href="/img/ims4.jpg" target="_blank">
                    <img src="/img/ims4.jpg" alt="ims4" />
                </a>
                <a href="/img/ims5.jpg" target="_blank">
                    <img src="/img/ims5.jpg" alt="ims5" />
                </a>
                <a href="/img/ims6.jpg" target="_blank">
                    <img src="/img/ims6.jpg" alt="ims6" />
                </a>
            </div>
        </div>
        <div class="row">
            <div class="col-2">
                <ul>
                    <li>1. 使用Vue(JS)與CodeIgniter(PHP)製作, 前後端溝通使用Ajax技術</li>
                    <li>2. 系統整體方向為"物品進出記錄", "人員與權限管理", "維修記錄", "人員交接記錄"</li>
                    <li>3. 特殊功能包括自動送信及警報器系統, 可手動設定信件以及發送時間參數, 自動系統處理部分使用C#開發</li>
                </ul>
            </div>
        </div>
        <!-- 實時產線運作狀態系統 -->
        <div class="row mt-4x">
            <div class="col-full text-center">
                <h1>實時產線運作狀態系統</h1>
            </div>
        </div>
        <div class="row">
            <div class="col-2">
                <ul>
                    <li>1. 前端使用Vue與Canvas開發</li>
                    <li>2. 伺服器端使用C#處理來自所有機台終端的資料</li>
                    <li>3. 機台終端使用C#抓取及過濾待分析的資料</li>
                    <li>4. 全程使用WebSocket做即時資料溝通, 負載量為(終端機台 * 25)(伺服器端 * 1)(前端 * 1 ~ 5), 24小時運行</li>
                    <li>5. Canvas繪製的地圖有參考現在的設計圖, 故位置較為精準</li>
                    <li>6. 地圖圖像皆使用SVG向量繪圖製作, 容易修改</li>
                </ul>
            </div>
        </div>
        <!-- 檢核記錄表系統 -->
        <div class="row mt-4x">
            <div class="col-full text-center">
                <h1>檢核記錄表系統</h1>
            </div>
        </div>
        <!-- 簡易自動爬蟲系統 -->
        <div class="row mt-4x">
            <div class="col-full text-center">
                <h1>簡易自動爬蟲系統</h1>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'works',
    data() {
        return {};
    },
    methods: {}
};
</script>

<style scoped>
img {
    max-width: 128px;
}
ul {
    line-height: 25px;
}
.mt-4x {
    margin-top: 40px;
}

</style>
