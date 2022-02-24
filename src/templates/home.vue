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
                <div class="text-big font-bold">楊靖仁(Jin)</div>
            </div>
            <div class="about-help text-center col-4 mt-1x">
                非本科生的軟體工程師
                <br>能在多個程式語言間交互使用
                <br><br>面對客戶需求可以利用現有知識及經驗
                <br>想出一或多個解決方案或流程架構
                <br><br>學習能力偏中上
                <br>曾在獨立製作專案時
                <br>從學習新的程式語言、Coding到測試
                <br>在一星期內做出初版Demo
            </div>
        </div>
        <!-- 個人相關連結 -->
        <div class="row mt-2x">
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
        <div class="row mt-2x">
            <div class="col-full text-center">
                <h1>語言熟練度</h1>
            </div>
        </div>
        <div class="row">
            <div class="col-4">
                <h4>C#</h4>
                <div class="progress-bar">
                    <div class="prog-ani prog-green" :style="{ 'width': progressValues.csharp }">{{ progressValues.csharp }}</div>
                </div>
            </div>
        </div>
        <div class="row mt-1x">
            <div class="col-4">
                <h4>PHP</h4>
                <div class="progress-bar">
                    <div class="prog-ani prog-blue" :style="{ 'width': progressValues.php }">{{ progressValues.php }}</div>
                </div>
            </div>
        </div>
        <div class="row mt-1x">
            <div class="col-4">
                <h4>HTML</h4>
                <div class="progress-bar">
                    <div class="prog-ani prog-violet" :style="{ 'width': progressValues.html }">{{ progressValues.html }}</div>
                </div>
            </div>
        </div>
        <div class="row mt-1x">
            <div class="col-4">
                <h4>CSS</h4>
                <div class="progress-bar">
                    <div class="prog-ani prog-violet" :style="{ 'width': progressValues.css }">{{ progressValues.css }}</div>
                </div>
            </div>
        </div>
        <div class="row mt-1x">
            <div class="col-4">
                <h4>JavaScript</h4>
                <div class="progress-bar">
                    <div class="prog-ani prog-violet" :style="{ 'width': progressValues.js }">{{ progressValues.js }}</div>
                </div>
            </div>
        </div>
        <div class="row mt-1x">
            <div class="col-4">
                <h4>TypeScript</h4>
                <div class="progress-bar">
                    <div class="prog-ani prog-yellow" :style="{ 'width': progressValues.typescript }">{{ progressValues.typescript }}</div>
                </div>
            </div>
        </div>
        <div class="row mt-1x">
            <div class="col-4">
                <h4>MySQL(MariaDB)</h4>
                <div class="progress-bar">
                    <div class="prog-ani prog-red" :style="{ 'width': progressValues.mysql }">{{ progressValues.mysql }}</div>
                </div>
            </div>
        </div>
        <div class="row mt-1x">
            <div class="col-4">
                <h4>MSSQL</h4>
                <div class="progress-bar">
                    <div class="prog-ani prog-red" :style="{ 'width': progressValues.mssql }">{{ progressValues.mssql }}</div>
                </div>
            </div>
        </div>
        <div class="row mt-1x">
            <div class="col-4">
                <h4>C++</h4>
                <div class="progress-bar">
                    <div class="prog-ani prog-orange" :style="{ 'width': progressValues.cplusplus }">{{ progressValues.cplusplus }}</div>
                </div>
            </div>
        </div>
        <!-- 框架/工具熟練度 -->
        <div class="row mt-2x">
            <div class="col-full text-center">
                <h1>框架/工具熟練度</h1>
            </div>
        </div>
        <div class="row">
            <div class="col-4">
                <h4>Vue</h4>
                <div class="progress-bar">
                    <div class="prog-ani prog-green" :style="{ 'width': progressValues.vue }">{{ progressValues.vue }}</div>
                </div>
            </div>
        </div>
        <div class="row mt-1x">
            <div class="col-4">
                <h4>CodeIgniter</h4>
                <div class="progress-bar">
                    <div class="prog-ani prog-blue" :style="{ 'width': progressValues.codeigniter }">{{ progressValues.codeigniter }}</div>
                </div>
            </div>
        </div>
        <div class="row mt-1x">
            <div class="col-4">
                <h4>ASP.NET(含Core)</h4>
                <div class="progress-bar">
                    <div class="prog-ani prog-red" :style="{ 'width': progressValues.aspnet }">{{ progressValues.aspnet }}</div>
                </div>
            </div>
        </div>
        <div class="row mt-1x">
            <div class="col-4">
                <h4>Git</h4>
                <div class="progress-bar">
                    <div class="prog-ani prog-gray" :style="{ 'width': progressValues.git }">{{ progressValues.git }}</div>
                </div>
            </div>
        </div>
        <!-- 常用技術/工具 -->
        <div class="row mt-2x">
            <div class="col-full text-center">
                <h1>常用技術/工具</h1>
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
export default {
    name: 'home',
    mounted() {
        setTimeout(() => {
            this.initProgressValues();
        }, 500);
    },
    data() {
        return {
            progressValues: {
                csharp: '0%',
                php: '0%',
                js: '0%',
                html: '0%',
                css: '0%',
                mysql: '0%',
                mssql: '0%',
                cplusplus: '0%',
                typescript: '0%',
                vue: '0%',
                codeigniter: '0%',
                aspnet: '0%',
                git: '0%',
            },
            techList: ['AJAX', 'WebSocket', 'TCP/IP', 'UDP', 'JSON', 'SVG', 'Canvas', 'Gogs(Git)', 'JQuery', 'Bootstrap', 'Regex'],
        };
    },
    methods: {
        initProgressValues() {
            this.progressValues.csharp = '70%';
            this.progressValues.php = '55%';
            this.progressValues.html = '40%';
            this.progressValues.css = '60%';
            this.progressValues.js = '55%';
            this.progressValues.vue = '60%';
            this.progressValues.mysql = '50%';
            this.progressValues.mssql = '45%';
            this.progressValues.cplusplus = '20%';
            this.progressValues.typescript = '45%';
            this.progressValues.codeigniter = '35%';
            this.progressValues.aspnet = '50%';
            this.progressValues.git = '30%';
        },
    },
};
</script>

<style scoped>
h4 {
    font-size: 20px;
    margin-bottom: 3px;
}
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
.mt-2x {
    margin-top: 2rem;
}
.mt-1x {
    margin-top: 1rem;
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
