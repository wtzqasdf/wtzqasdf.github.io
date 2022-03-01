<template>
    <div class="row">
        <div class="col-full text-center">
            <h1>{{ title }}</h1>
        </div>
        <div class="col-full text-center">
            <a v-for="(data,index) in images" :key="index" :href="data.link" target="_blank">
                <img :src="data.link" :alt="data.alt" />
            </a>
        </div>
        <div class="col-8 mb-1">
            <ul>
                <li v-for="(data,index) in helpTexts" :key="index">{{ data }}</li>
            </ul>
        </div>
        <div class="col-8 text-center">
            <h3>語言使用率</h3>
        </div>
        <div class="col-8" v-for="(data,index) in progressBars" :key="index">
            <h4>{{ data.title }}</h4>
            <div class="progress-bar">
                <div class="prog-ani" :class="[data.styleClass]" :style="{ 'width': data.width }">{{ data.width }}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: '',
        images: [],
        progressBars: [],
        helpTexts: [],
    },
};
</script>

<style scoped>
h3 {
    font-size: 24px;
    font-weight: bold;
}
h4 {
    font-size: 20px;
    margin: 0.3rem 0;
    font-style: italic;
}
ul {
    line-height: 25px;
}
img {
    max-width: 128px;
}
.mb-1 {
    margin-bottom: 1rem;
}
</style>