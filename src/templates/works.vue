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
                <a v-for="(data,index) in imsImages" :key="index" :href="data.link" target="_blank">
                    <img :src="data.link" :alt="data.alt" />
                </a>
            </div>
        </div>
        <div class="row">
            <div class="col-6">
                <ul>
                    <li>1. 使用JS(Vue)與PHP(CodeIgniter)製作, 前後端溝通使用Ajax技術</li>
                    <li>2. 系統整體方向為"物品進出記錄", "人員與權限管理", "維修記錄", "人員交接記錄"</li>
                    <li>3. 特殊功能包括自動送信及警報器系統, 可手動設定信件以及發送時間參數, 自動系統處理部分使用C#開發</li>
                </ul>
            </div>
        </div>
        <div class="row mt-1x">
            <div class="col-6">
                <h4>HTML,CSS,JS(Vue)使用率</h4>
                <div class="progress-bar">
                    <div class="prog-ani prog-green" :style="{ 'width': imsPLUsage.frontend }">{{ imsPLUsage.frontend }}</div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-6">
                <h4>PHP(CodeIgniter)使用率</h4>
                <div class="progress-bar">
                    <div class="prog-ani prog-blue" :style="{ 'width': imsPLUsage.backend }">{{ imsPLUsage.backend }}</div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-6">
                <h4>MySQL(MariaDB)使用率</h4>
                <div class="progress-bar">
                    <div class="prog-ani prog-orange" :style="{ 'width': imsPLUsage.mysql }">{{ imsPLUsage.mysql }}</div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-6">
                <h4>C#使用率</h4>
                <div class="progress-bar">
                    <div class="prog-ani prog-violet" :style="{ 'width': imsPLUsage.csharp }">{{ imsPLUsage.csharp }}</div>
                </div>
            </div>
        </div>
        <div class="row m-2x">
            <div class="underline"></div>
        </div>
        <!-- 即時生產狀態系統 -->
        <div class="row">
            <div class="col-full text-center">
                <h1>即時生產狀態系統</h1>
            </div>
        </div>
        <div class="row">
            <div class="col-full text-center">
                <a v-for="(data,index) in pmsImages" :key="index" :href="data.link" target="_blank">
                    <img :src="data.link" :alt="data.alt" />
                </a>
            </div>
        </div>
        <div class="row">
            <div class="col-6">
                <ul>
                    <li>1. 前端使用JS(Vue)與Canvas開發</li>
                    <li>2. 伺服器端使用C#處理來自所有機台終端的資料</li>
                    <li>3. 機台終端使用C#抓取及過濾待分析的資料</li>
                    <li>4. 呈現資料包括"機台運作狀態", "工單號"</li>
                    <li>5. 前端畫面使用WebSocket做資料顯示, 後端使用Http做資料傳輸, 伺服器每秒負載量為(終端機台 * 25)(前端 * 1 ~ 5), 24小時運行</li>
                    <li>6. 地圖呈現方式參考自廠內平面設計圖, 繪製方式則使用SVG向量圖形製作</li>
                </ul>
            </div>
        </div>
        <div class="row mt-1x">
            <div class="col-6">
                <h4>HTML,CSS,JS(Canvas, Vue)使用率</h4>
                <div class="progress-bar">
                    <div class="prog-ani prog-green" :style="{ 'width': pmsPLUsage.frontend }">{{ pmsPLUsage.frontend }}</div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-6">
                <h4>SVG使用率</h4>
                <div class="progress-bar">
                    <div class="prog-ani prog-blue" :style="{ 'width': pmsPLUsage.svg }">{{ pmsPLUsage.svg }}</div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-6">
                <h4>C#使用率</h4>
                <div class="progress-bar">
                    <div class="prog-ani prog-orange" :style="{ 'width': pmsPLUsage.csharp }">{{ pmsPLUsage.csharp }}</div>
                </div>
            </div>
        </div>
        <div class="row m-2x">
            <div class="underline"></div>
        </div>
        <!-- 滅火器檢核記錄表系統 -->
        <div class="row">
            <div class="col-full text-center">
                <h1>滅火器檢核記錄表系統</h1>
            </div>
        </div>
        <div class="row">
            <div class="col-full text-center">
                <a v-for="(data,index) in checktableImages" :key="index" :href="data.link" target="_blank">
                    <img :src="data.link" :alt="data.alt" />
                </a>
            </div>
        </div>
        <div class="row">
            <div class="col-6">
                <ul>
                    <li>1. 前端使用JS(Vue), Canvas開發</li>
                    <li>2. 地圖呈現方式參考自廠內平面設計圖, 繪製方式則使用SVG向量圖形製作</li>
                    <li>3. 後端使用PHP(CodeIgniter)與MySQL(MariaDB)開發</li>
                    <li>4. 此系統將傳統的紙張手寫方式轉移到網站上作業, 大幅簡化處理流程</li>
                    <li>5. 所有已記錄的資料可儲存為PDF檔, 以便供給其他客戶檢視</li>
                    <li>6. 搭配QRCode, 客戶可使用手機掃描, 快速追蹤指定的資料, 並且可指定要使用"PDF"或是"地圖"方式開啟</li>
                </ul>
            </div>
        </div>
        <div class="row mt-1x">
            <div class="col-6">
                <h4>HTML,CSS,JS(Canvas, Vue)使用率</h4>
                <div class="progress-bar">
                    <div class="prog-ani prog-green" :style="{ 'width': checktablePLUsage.frontend }">{{ checktablePLUsage.frontend }}</div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-6">
                <h4>SVG使用率</h4>
                <div class="progress-bar">
                    <div class="prog-ani prog-blue" :style="{ 'width': checktablePLUsage.svg }">{{ checktablePLUsage.svg }}</div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-6">
                <h4>PHP(CodeIgniter)使用率</h4>
                <div class="progress-bar">
                    <div class="prog-ani prog-orange" :style="{ 'width': checktablePLUsage.backend }">{{ checktablePLUsage.backend }}</div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-6">
                <h4>MySQL(MariaDB)使用率</h4>
                <div class="progress-bar">
                    <div class="prog-ani prog-violet" :style="{ 'width': checktablePLUsage.mysql }">{{ checktablePLUsage.mysql }}</div>
                </div>
            </div>
        </div>
        <div class="row m-2x">
            <div class="underline"></div>
        </div>
        <!-- 靜電檢核記錄表系統 -->
        <div class="row">
            <div class="col-full text-center">
                <h1>靜電檢核記錄表系統</h1>
            </div>
        </div>
        <div class="row">
            <div class="col-full text-center">
                <a v-for="(data,index) in esdtableImages" :key="index" :href="data.link" target="_blank">
                    <img :src="data.link" :alt="data.alt" />
                </a>
            </div>
        </div>
        <div class="row">
            <div class="col-6">
                <ul>
                    <li>1. 前端使用JS(Vue)開發</li>
                    <li>2. 後端使用C#(ASP.NET Core)與MySQL(MariaDB)開發</li>
                    <li>3. 系統提供了高度客製化內容, 讓使用者可自定義表格以及PDF的內容如何產生</li>
                    <li>4. 檢核的資料可儲存為PDF檔案, 以便供給客戶檢視</li>
                    <li>5. 搭配QRCode, 客戶可使用手機掃描, 快速追蹤指定的資料</li>
                </ul>
            </div>
        </div>
        <div class="row mt-1x">
            <div class="col-6">
                <h4>HTML,CSS,JS(Vue)使用率</h4>
                <div class="progress-bar">
                    <div class="prog-ani prog-green" :style="{ 'width': esdtablePLUsage.frontend }">{{ esdtablePLUsage.frontend }}</div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-6">
                <h4>C#(ASP.NET Core)使用率</h4>
                <div class="progress-bar">
                    <div class="prog-ani prog-blue" :style="{ 'width': esdtablePLUsage.csharp }">{{ esdtablePLUsage.csharp }}</div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-6">
                <h4>MySQL(MariaDB)使用率</h4>
                <div class="progress-bar">
                    <div class="prog-ani prog-violet" :style="{ 'width': esdtablePLUsage.mysql }">{{ esdtablePLUsage.mysql }}</div>
                </div>
            </div>
        </div>
        <div class="row m-2x">
            <div class="underline"></div>
        </div>
        <!-- 工單資料尋找系統 -->
        <div class="row">
            <div class="col-full text-center">
                <h1>工單資料尋找系統</h1>
            </div>
        </div>
        <div class="row">
            <div class="col-full text-center">
                <a v-for="(data,index) in searcherImages" :key="index" :href="data.link" target="_blank">
                    <img :src="data.link" :alt="data.alt" />
                </a>
            </div>
        </div>
        <div class="row">
            <div class="col-6">
                <ul>
                    <li>1. 此程式用於追蹤某個產品的問題詳細資料</li>
                    <li>2. 因一天產生的資料記錄檔約有數萬筆, 在追蹤上較不方便, 故使用自動搜尋解決人工搜尋作業</li>
                    <li>3. 每次程式查詢的處理量約為數千筆到數十萬筆, 這會依照查詢的範圍及資料量而定</li>
                </ul>
            </div>
        </div>
        <div class="row mt-1x">
            <div class="col-6">
                <h4>C#使用率</h4>
                <div class="progress-bar">
                    <div class="prog-ani prog-green" :style="{ 'width': searcherPLUsage.csharp }">{{ searcherPLUsage.csharp }}</div>
                </div>
            </div>
        </div>
        <div class="row m-2x">
            <div class="underline"></div>
        </div>
        <!-- RFID工單輸入系統 -->
        <div class="row">
            <div class="col-full text-center">
                <h1>RFID工單輸入系統</h1>
            </div>
        </div>
        <div class="row">
            <div class="col-full text-center">
                <a v-for="(data,index) in rfidImages" :key="index" :href="data.link" target="_blank">
                    <img :src="data.link" :alt="data.alt" />
                </a>
            </div>
        </div>
        <div class="row">
            <div class="col-6">
                <ul>
                    <li>1. 主要以Arduino搭配RFID進行作業</li>
                    <li>2. 系統分為輸入資料端與輸出資料端</li>
                    <li>3. 輸入資料端是由電腦與RFID(Arduino)互相溝通, 由使用者輸入資料後, 再將卡片靠近RFID裝置即可完成寫入</li>
                    <li>4. 輸出資料端則會模擬鍵盤訊號, 將卡片資料讀入RFID(Arduino)後, 轉換為對應的鍵盤訊號命令, 以指定間隔(毫秒)發送, 直到所有命令發送完畢</li>
                </ul>
            </div>
        </div>
        <div class="row mt-1x">
            <div class="col-6">
                <h4>C#使用率</h4>
                <div class="progress-bar">
                    <div class="prog-ani prog-green" :style="{ 'width': rfidPLUsage.csharp }">{{ rfidPLUsage.csharp }}</div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-6">
                <h4>C++使用率</h4>
                <div class="progress-bar">
                    <div class="prog-ani prog-blue" :style="{ 'width': rfidPLUsage.cplusplus }">{{ rfidPLUsage.cplusplus }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'works',
    mounted() {
        setTimeout(this.initPLUsages, 500);
    },
    data() {
        return {
            imsImages: [
                { link: '/img/ims1.jpg', alt: 'ims1' },
                { link: '/img/ims2.jpg', alt: 'ims2' },
                { link: '/img/ims3.jpg', alt: 'ims3' },
                { link: '/img/ims4.jpg', alt: 'ims4' },
                { link: '/img/ims5.jpg', alt: 'ims5' },
                { link: '/img/ims6.jpg', alt: 'ims6' },
            ],
            imsPLUsage: {
                frontend: '0%',
                backend: '0%',
                mysql: '0%',
                csharp: '0%',
            },
            pmsImages: [
                { link: '/img/pms0.jpg', alt: 'pms0' },
                { link: '/img/pms2.jpg', alt: 'pms2' },
                { link: '/img/pms4.jpg', alt: 'pms4' },
            ],
            pmsPLUsage: {
                frontend: '0%',
                svg: '0%',
                csharp: '0%',
            },
            checktableImages: [
                { link: '/img/checktable1.jpg', alt: 'checktable1' },
                { link: '/img/checktable2.jpg', alt: 'checktable2' },
                { link: '/img/checktable3.jpg', alt: 'checktable3' },
                { link: '/img/checktable4.jpg', alt: 'checktable4' },
                { link: '/img/checktable5.jpg', alt: 'checktable5' },
                { link: '/img/checktable6.jpg', alt: 'checktable6' },
                { link: '/img/checktable7.jpg', alt: 'checktable7' },
            ],
            checktablePLUsage: {
                frontend: '0%',
                svg: '0%',
                backend: '0%',
                mysql: '0%',
            },
            esdtableImages: [
                { link: '/img/esd1.JPG', alt: 'esd1' },
                { link: '/img/esd2.JPG', alt: 'esd2' },
                { link: '/img/esd3.JPG', alt: 'esd3' },
                { link: '/img/esd4.JPG', alt: 'esd4' },
                { link: '/img/esd5.JPG', alt: 'esd5' },
                { link: '/img/esd6.JPG', alt: 'esd6' },
            ],
            esdtablePLUsage: {
                frontend: '0%',
                csharp: '0%',
                mysql: '0%'
            },
            searcherImages: [
                { link: '/img/wosearcher1.jpg', alt: 'wosearcher1' },
                { link: '/img/wosearcher2.jpg', alt: 'wosearcher2' },
                { link: '/img/wosearcher3.jpg', alt: 'wosearcher3' },
                { link: '/img/wosearcher4.jpg', alt: 'wosearcher4' },
            ],
            searcherPLUsage: {
                csharp: '0%',
            },
            rfidImages: [
                { link: '/img/rfid1.jpg', alt: 'rfid1' },
                { link: '/img/rfid2.jpg', alt: 'rfid2' },
                { link: '/img/rfid3.jpg', alt: 'rfid3' },
                { link: '/img/rfid4.jpg', alt: 'rfid4' },
            ],
            rfidPLUsage: {
                csharp: '0%',
                cplusplus: '0%',
            },
            chatbotImages: [
                { link: '/img/chatbot1.JPG', alt: 'chatbot1' },
                { link: '/img/chatbot2.JPG', alt: 'chatbot2' },
                { link: '/img/chatbot3.JPG', alt: 'chatbot3' },
                { link: '/img/chatbot4.JPG', alt: 'chatbot4' },
                { link: '/img/chatbot5.JPG', alt: 'chatbot5' },
            ],
            chatbotPLUsage: {
                frontend: '0%',
                csharp: '0%',
            },
        };
    },
    methods: {
        initPLUsages() {
            this.imsPLUsage.frontend = '35%';
            this.imsPLUsage.backend = '35%';
            this.imsPLUsage.mysql = '25%';
            this.imsPLUsage.csharp = '5%';

            this.pmsPLUsage.frontend = '25%';
            this.pmsPLUsage.svg = '25%';
            this.pmsPLUsage.csharp = '50%';

            this.checktablePLUsage.frontend = '30%';
            this.checktablePLUsage.svg = '20%';
            this.checktablePLUsage.backend = '35%';
            this.checktablePLUsage.mysql = '15%';

            this.esdtablePLUsage.frontend = '30%';
            this.esdtablePLUsage.csharp = '40%';
            this.esdtablePLUsage.mysql = '30%';

            this.searcherPLUsage.csharp = '100%';

            this.rfidPLUsage.csharp = '30%';
            this.rfidPLUsage.cplusplus = '70%';

            this.chatbotPLUsage.frontend = '35%';
            this.chatbotPLUsage.csharp = '65%';
        },
    },
};
</script>

<style scoped>
h4 {
    font-size: 20px;
    margin: 0.3rem 0;
    font-style: italic;
}
img {
    max-width: 128px;
}
ul {
    line-height: 25px;
}
.mt-1x {
    margin-top: 1rem;
}
.m-2x {
    margin: 2rem 0;
}
.underline {
    height: 2px;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.1);
}
</style>
