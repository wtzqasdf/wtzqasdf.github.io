<template>
    <div id="works" class="container">
        <detail-block :title="'物品進出管理系統'" :images="imsImages" :progressBars="imsPLUsage" :helpTexts="imsHelpTexts"></detail-block>
        <underline></underline>
        <detail-block :title="'即時生產狀態系統'" :images="pmsImages" :progressBars="pmsPLUsage" :helpTexts="pmsHelpTexts"></detail-block>
        <underline></underline>
        <detail-block :title="'滅火器檢核記錄表系統'" :images="checktableImages" :progressBars="checktablePLUsage" :helpTexts="checktableHelpTexts"></detail-block>
        <underline></underline>
        <detail-block :title="'靜電檢核記錄表系統'" :images="esdtableImages" :progressBars="esdtablePLUsage" :helpTexts="esdtableHelpTexts"></detail-block>
        <underline></underline>
        <detail-block :title="'工單資料尋找系統'" :images="searcherImages" :progressBars="searcherPLUsage" :helpTexts="searcherHelpTexts"></detail-block>
        <underline></underline>
        <detail-block :title="'RFID工單輸入系統'" :images="rfidImages" :progressBars="rfidPLUsage" :helpTexts="rfidHelpTexts"></detail-block>
        <underline></underline>
        <detail-block :title="'即時出貨通知圖表'" :images="shipmentNotifyImages" :progressBars="shipmentNotifyPLUsage" :helpTexts="shipmentNotifyHelpTexts"></detail-block>
        <underline></underline>
        <detail-block :title="'報表數據彙整系統'" :images="ReportingServerImages" :progressBars="ReportingServerPLUsage" :helpTexts="ReportingServerHelpTexts"></detail-block>
    </div>
</template>

<script>
import DetailBlock from '../components/detail-block.vue';
import Underline from '../components/underline.vue';

export default {
    name: 'works',
    mounted() {
        setTimeout(this.initPLUsages, 500);
    },
    components: {
        DetailBlock,
        Underline,
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
            imsHelpTexts: [
                '1. 前端使用JS(Vue)進行畫面渲染及互動',
                '2. 後端使用PHP(Codeigniter)製作',
                '3. 資料庫部分使用MySQL(MariaDB)',
                '4. 系統類型為常見的"倉儲管理系統"，也包含了人員領料、扣帳、維修等互動',
                '3. 特殊功能包括自動送信功能, 透過Mail方式通知是否有數量不足的物品，其功能使用C#開發',
            ],
            imsPLUsage: [
                { title: 'HTML,CSS,JS(Vue)', width: '0%', targetWidth: '35%', styleClass: 'prog-green' },
                { title: 'PHP(CodeIgniter)', width: '0%', targetWidth: '35%', styleClass: 'prog-blue' },
                { title: 'MySQL(MariaDB)', width: '0%', targetWidth: '25%', styleClass: 'prog-orange' },
                { title: 'C#', width: '0%', targetWidth: '5%', styleClass: 'prog-violet' },
            ],
            //--------
            pmsImages: [
                { link: '/img/pms0.jpg', alt: 'pms0' },
                { link: '/img/pms2.jpg', alt: 'pms2' },
                { link: '/img/pms3.jpg', alt: 'pms3' },
            ],
            pmsHelpTexts: [
                '1. 前端使用JS(Vue)與Canvas開發',
                '2. 伺服器端使用C#處理來自所有機台終端的資料',
                '3. 機台終端使用C#抓取及過濾待分析的資料',
                '4. 呈現資料包括"機台運作狀態", "工單號"',
                '5. 前端畫面使用WebSocket做資料顯示, 後端使用Http做資料傳輸, 伺服器每秒負載量為(終端機台 * 25)(前端 * 1 ~ 5), 24小時運行',
                '6. 地圖呈現方式參考自廠內平面設計圖, 繪製方式則使用SVG向量圖形製作',
                '7. 上方額外包含了時間以及天氣狀況(內部與外部)'
            ],
            pmsPLUsage: [
                { title: 'HTML,CSS,JS(Canvas, Vue)', width: '0%', targetWidth: '25%', styleClass: 'prog-green' },
                { title: 'SVG', width: '0%', targetWidth: '25%', styleClass: 'prog-blue' },
                { title: 'C#', width: '0%', targetWidth: '50%', styleClass: 'prog-orange' },
            ],
            //--------
            checktableImages: [
                { link: '/img/checktable1.jpg', alt: 'checktable1' },
                { link: '/img/checktable2.jpg', alt: 'checktable2' },
                { link: '/img/checktable3.jpg', alt: 'checktable3' },
                { link: '/img/checktable4.jpg', alt: 'checktable4' },
                { link: '/img/checktable5.jpg', alt: 'checktable5' },
                { link: '/img/checktable6.jpg', alt: 'checktable6' },
                { link: '/img/checktable7.jpg', alt: 'checktable7' },
            ],
            checktableHelpTexts: [
                '1. 前端使用JS(Vue), Canvas開發',
                '2. 地圖呈現方式參考自廠內平面設計圖, 繪製方式則使用SVG向量圖形製作',
                '3. 後端使用PHP(CodeIgniter)與MySQL(MariaDB)開發',
                '4. 此系統將傳統的紙張手寫方式轉移到網站上作業, 大幅簡化處理流程',
                '5. 所有已記錄的資料可儲存為PDF檔, 以便供給其他客戶檢視',
                '6. 搭配QRCode, 客戶可使用手機掃描, 快速追蹤指定的資料, 並且可指定要使用"PDF"或是"地圖"方式開啟',
            ],
            checktablePLUsage: [
                { title: 'HTML,CSS,JS(Canvas, Vue)', width: '0%', targetWidth: '30%', styleClass: 'prog-green' },
                { title: 'SVG', width: '0%', targetWidth: '20%', styleClass: 'prog-blue' },
                { title: 'PHP(CodeIgniter)', width: '0%', targetWidth: '35%', styleClass: 'prog-orange' },
                { title: 'MariaDB', width: '0%', targetWidth: '15%', styleClass: 'prog-violet' },
            ],
            //--------
            esdtableImages: [
                { link: '/img/esd1.JPG', alt: 'esd1' },
                { link: '/img/esd2.JPG', alt: 'esd2' },
                { link: '/img/esd3.JPG', alt: 'esd3' },
                { link: '/img/esd4.JPG', alt: 'esd4' },
                { link: '/img/esd5.JPG', alt: 'esd5' },
                { link: '/img/esd6.JPG', alt: 'esd6' },
            ],
            esdtableHelpTexts: [
                '1. 前端使用JS(Vue)開發',
                '2. 後端使用C#(ASP.NET Core)與MySQL(MariaDB)開發',
                '3. 系統提供了高度客製化內容, 讓使用者可自定義表格以及PDF的內容如何產生',
                '4. 檢核的資料可儲存為PDF檔案, 以便供給客戶檢視',
                '5. 搭配QRCode, 客戶可使用手機掃描, 快速追蹤指定的資料',
            ],
            esdtablePLUsage: [
                { title: 'HTML,CSS,JS(Vue)', width: '0%', targetWidth: '30%', styleClass: 'prog-green' },
                { title: 'C#(ASP.NET Core)', width: '0%', targetWidth: '40%', styleClass: 'prog-blue' },
                { title: 'MariaDB', width: '0%', targetWidth: '30%', styleClass: 'prog-violet' },
            ],
            //--------
            searcherImages: [
                { link: '/img/wosearcher1.jpg', alt: 'wosearcher1' },
                { link: '/img/wosearcher2.jpg', alt: 'wosearcher2' },
                { link: '/img/wosearcher3.jpg', alt: 'wosearcher3' },
            ],
            searcherHelpTexts: [
                '1. 此程式用於追蹤某個產品的問題詳細資料',
                '2. 因一天產生的資料記錄檔約有數萬筆(全為文字檔), 在追蹤上較不方便, 故使用自動搜尋解決人工搜尋作業',
                '3. 每次程式查詢的處理量約為數千筆到數十萬筆, 這會依照查詢範圍以及工單號碼而定',
            ],
            searcherPLUsage: [{ title: 'C#', width: '0%', targetWidth: '100%', styleClass: 'prog-green' }],
            //--------
            rfidImages: [
                { link: '/img/rfid1.jpg', alt: 'rfid1' },
                { link: '/img/rfid2.jpg', alt: 'rfid2' },
                { link: '/img/rfid3.jpg', alt: 'rfid3' },
                { link: '/img/rfid4.jpg', alt: 'rfid4' },
            ],
            rfidHelpTexts: [
                '1. 主要以Arduino搭配RFID進行作業',
                '2. 系統分為"輸入資料端"與"輸出資料端"',
                '3. 輸入資料端是由電腦與RFID(Arduino)互相連線, 由使用者輸入資料後, 再將卡片靠近RFID裝置即可完成寫入',
                '4. 輸出資料端則會"模擬鍵盤訊號", 將卡片資料讀入RFID(Arduino)後, 轉換為對應的鍵盤訊號命令, 以指定間隔(毫秒)發送, 直到所有命令發送完畢',
                '5. 輸入資料端部分是運行在Ubuntu系統，使用C#開發，程式則是使用Mono框架運行',
                '6. 輸出資料端為Arduino獨立運行，使用C++進行開發，其主板上面也包含了各種元件(RFID Sensor, Speaker, LED, Button, PS/2)'
            ],
            rfidPLUsage: [
                { title: 'C#', width: '0%', targetWidth: '30%', styleClass: 'prog-green' },
                { title: 'C++', width: '0%', targetWidth: '70%', styleClass: 'prog-blue' },
            ],
            //--------
            shipmentNotifyImages: [{ link: '/img/shipment1.jpg', alt: 'shipment1' }],
            shipmentNotifyHelpTexts: [
                '1. 前端使用Vue3 + TS開發',
                '2. 後端使用C#(ASP.NET Core)開發',
                '3. 資料來源部分為"鼎新ERP"資料庫',
                '4. 前端所呈現的資料為"當日出貨統計", "出貨明細", "出貨明細(客戶端)"',
                '5. 後端採用非同步讀取模式，即使讀取資料庫時間過久，也不會造成AJAX等候',
                '6. 只有當AJAX有請求時才會開始讀取+解析ERP資料，以節省系統資源',
            ],
            shipmentNotifyPLUsage: [
                { title: 'HTML,CSS,TS(Vue)', width: '0%', targetWidth: '40%', styleClass: 'prog-green' },
                { title: 'C#(ASP.NET Core)', width: '0%', targetWidth: '60%', styleClass: 'prog-blue' },
            ],
            //--------
            ReportingServerImages: [
                { link: '/img/RS1.jpg', alt: 'RS1' },
                { link: '/img/RS2.jpg', alt: 'RS2' },
                { link: '/img/RS3.jpg', alt: 'RS3' },
                { link: '/img/RS4.jpg', alt: 'RS4' },
                { link: '/img/RS5.jpg', alt: 'RS5' },
                { link: '/img/RS6.jpg', alt: 'RS6' },
                { link: '/img/RS7.jpg', alt: 'RS7' },
                { link: '/img/RS8.jpg', alt: 'RS8' },
                { link: '/img/RS9.jpg', alt: 'RS9' },
                { link: '/img/RS10.jpg', alt: 'RS10' },
            ],
            ReportingServerHelpTexts: [
                '1. 報表核心使用SSRS(SQL Server Reporting Services)進行資料渲染，報表格式則使用RDL(報表定義語言)進行製作',
                '2. 報表資料全程使用SQL進行操作，故需要因應報表需求撰寫不同的SQL指令',
                '3. 報表核心使用NTLM驗證，結合Active Directory，以方便管理每個使用者的瀏覽權限',
                '4. 資料都來自不同的資料庫，包含"公司內部私有"資料庫，也包含"鼎新ERP"資料庫',
                '5. 製作RS模組功能，以自訂RS前端UI介面，給使用者較好的視覺效果',
            ],
            ReportingServerPLUsage: [
                { title: 'HTML, CSS, JS', width: '0%', targetWidth: '5%', styleClass: 'prog-green' },
                { title: 'C#', width: '0%', targetWidth: '5%', styleClass: 'prog-blue' },
                { title: 'MSSQL', width: '0%', targetWidth: '90%', styleClass: 'prog-violet' },
            ],
        };
    },
    methods: {
        initPLUsages() {
            this.updateWidthOfArray(this.imsPLUsage);
            this.updateWidthOfArray(this.pmsPLUsage);
            this.updateWidthOfArray(this.checktablePLUsage);
            this.updateWidthOfArray(this.esdtablePLUsage);
            this.updateWidthOfArray(this.searcherPLUsage);
            this.updateWidthOfArray(this.rfidPLUsage);
            this.updateWidthOfArray(this.shipmentNotifyPLUsage);
            this.updateWidthOfArray(this.ReportingServerPLUsage);
        },
        updateWidthOfArray(arr) {
            for (let i = 0; i < arr.length; i++) {
                arr[i].width = arr[i].targetWidth;
            }
        },
    },
};
</script>