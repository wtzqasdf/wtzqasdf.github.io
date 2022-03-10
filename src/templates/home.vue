<template>
    <div id="home" class="container">
        <!-- 自我簡介 -->
        <div class="row">
            <div class="col-full text-center">
                <h1>自我簡介</h1>
            </div>
        </div>
        <div class="row">
            <div class="col-4 text-center mt-1x">
                <div>
                    <img src="/img/jin.jpg" alt="個人圖片" />
                </div>
                <div class="text-big font-bold mt-1x">楊靖仁(Jin)</div>
            </div>
            <div class="about-help text-center col-4 mt-1x">
                非本科生的軟體工程師
                <br />能在多個程式語言間交互使用
                <br />
                <br />面對客戶需求可以利用現有知識及經驗
                <br />想出一或多個解決方案或流程架構
                <br />
                <br />學習能力偏中上
                <br />曾在獨立製作專案時
                <br />從學習新的程式語言、Coding到測試
                <br />在一星期內做出初版Demo
            </div>
        </div>
        <!-- 個人相關連結 -->
        <div class="row mt-1x">
            <div class="col-full text-center">
                <h1>個人相關連結</h1>
            </div>
        </div>
        <div class="row">
            <div class="col-4">
                <div class="link-block">
                    <a href="https://leetcode-cn.com/u/jin_man/" target="_blank">LeetCode</a>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-4">
                <div class="link-block">
                    <a href="https://github.com/wtzqasdf" target="_blank">Github</a>
                </div>
            </div>
        </div>
        <!-- 語言熟練度 -->
        <div class="row mt-1x">
            <div class="col-full text-center">
                <h1>語言使用頻率</h1>
            </div>
        </div>
        <use-frequency langName="C#" :freqLevel="5"></use-frequency>
        <use-frequency langName="HTML" :freqLevel="5"></use-frequency>
        <use-frequency langName="CSS" :freqLevel="5"></use-frequency>
        <use-frequency langName="TypeScript" :freqLevel="5"></use-frequency>
        <use-frequency langName="MSSQL" :freqLevel="4"></use-frequency>
        <use-frequency langName="MySQL(MariaDB)" :freqLevel="3"></use-frequency>
        <use-frequency langName="JavaScript" :freqLevel="3"></use-frequency>
        <use-frequency langName="PHP" :freqLevel="3"></use-frequency>
        <use-frequency langName="C++" :freqLevel="2"></use-frequency>
        <!-- 框架/工具熟練度 -->
        <div class="row mt-1x">
            <div class="col-full text-center">
                <h1>框架/工具使用頻率</h1>
            </div>
        </div>
        <use-frequency langName="Vue" :freqLevel="4"></use-frequency>
        <use-frequency langName="ASP.NET(Core)" :freqLevel="3"></use-frequency>
        <use-frequency langName="Git" :freqLevel="2"></use-frequency>
        <use-frequency langName="Codeigniter" :freqLevel="1"></use-frequency>
        <!-- 常用技術/工具 -->
        <div class="row mt-1x">
            <div class="col-full text-center">
                <h1>使用技術/工具</h1>
            </div>
        </div>
        <div class="row">
            <div class="col-1" v-for="(data,index) in techList" :key="index">
                <div class="box">{{ data }}</div>
            </div>
        </div>
    </div>
</template>

<script>
import UseFrequency from '../components/usefrequency.vue';
export default {
    name: 'home',
    components: {
        UseFrequency,
    },
    data() {
        return {
            techList: ['AJAX', 'WebSocket', 'TCP/IP', 'UDP', 'JSON', 'SVG', 'Canvas', 'Gogs(Git)', 'JQuery', 'Bootstrap', 'Regex', 'Arduino'],
        };
    },
};
</script>

<style scoped>
img {
    width: 128px;
    height: auto;
    border-radius: 60px;
}
.about-help {
    font-size: 18px;
    line-height: 25px;
}
.text-big {
    font-size: 24px;
}
.col-1 {
    margin: 0.5rem;
}
.box {
    padding: 1rem 0.5rem;
    box-shadow: 2px 2px 4px 0px black;
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    cursor: default;
    word-break: break-all;
}
.link-block {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    font-size: 24px;
}
.link-block a {
    color: darkred;
    text-decoration: none;
}
.link-block a:hover {
    color: red;
}
</style>
