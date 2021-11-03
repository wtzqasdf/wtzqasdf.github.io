<template>
    <div id="person" class="container">
        <!-- ChatBot聊天室 -->
        <div class="row">
            <div class="col-full text-center">
                <h1>ChatBot聊天室</h1>
            </div>
        </div>
        <div class="row">
            <div class="col-full text-center">
                <a v-for="(data,index) in chatbotImages" :key="index" :href="data.link" target="_blank">
                    <img :src="data.link" :alt="data.alt" />
                </a>
            </div>
        </div>
        <div class="row">
            <div class="col-6">
                <ul>
                    <li>1. 網站使用ASP.NET Core與SignalR製作</li>
                    <li>2. 前端使用JS(Vue)製作</li>
                    <li>3. 聊天訊息會依照使用者ID來區別訊息要放在左邊(對方)還是右邊(自己)</li>
                    <li>4. 使用者可手動教導聊天機器人如何說話，由多個中文單詞合成一組到對應的回答</li>
                    <li>5. 聊天機器人會依照使用者輸入的語句判斷資料庫中單詞的相符順序，找出最適合的答案</li>
                    <li>5. 聊天機器人使用的演算法有"多元樹"與"遞迴分析"</li>
                </ul>
            </div>
        </div>
        <div class="row">
            <div class="col-6">
                <h4>HTML,CSS,JS(Vue)使用率</h4>
                <div class="progress-bar">
                    <div class="prog-ani prog-green" :style="{ 'width': chatbotPLUsage.frontend }">{{ chatbotPLUsage.frontend }}</div>
                </div>
            </div>
        </div>
        <div class="row mt-1x">
            <div class="col-6">
                <h4>C#(ASP.NET Core)使用率</h4>
                <div class="progress-bar">
                    <div class="prog-ani prog-blue" :style="{ 'width': chatbotPLUsage.csharp }">{{ chatbotPLUsage.csharp }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'person',
    mounted() {
        setTimeout(this.initPLUsages, 500);
    },
    data() {
        return {
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
