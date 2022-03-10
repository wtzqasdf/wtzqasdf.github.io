<template>
    <div class="row mt-1x">
        <div class="col-4">
            <h4>{{ langName }}</h4>
            <div class="freq-bar">
                <div class="freq-block" :class="freqClasses[0]">{{ freqTexts[0] }}</div>
                <div class="freq-block" :class="freqClasses[1]">{{ freqTexts[1] }}</div>
                <div class="freq-block" :class="freqClasses[2]">{{ freqTexts[2] }}</div>
                <div class="freq-block" :class="freqClasses[3]">{{ freqTexts[3] }}</div>
                <div class="freq-block" :class="freqClasses[4]">{{ freqTexts[4] }}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'usefrequency',
    props: {
        langName: '',
        freqLevel: 1, //頻率等級, 1 - 5
    },
    created() {
        if (this.freqLevel <= this.freqClasses.length && this.freqLevel >= 1) {
            //取得顏色class
            let color = this.colorLevels[this.freqLevel - 1];
            //取得並指派對應的等級文字
            this.freqTexts[this.freqLevel - 1] = this.freqLevels[this.freqLevel - 1];
            //依照頻率等級填充顏色
            for (let i = 0; i < this.freqClasses.length; i++) {
                if (i < this.freqLevel) {
                    this.freqClasses[i] = color;
                }
            }
        }
    },
    data() {
        return {
            freqLevel: 1,
            colorLevels: ['freq-block-gray', 'freq-block-red', 'freq-block-orange', 'freq-block-yellow', 'freq-block-green'],
            freqLevels: ['很少', '偶爾', '普通', '較常', '經常'],
            freqClasses: ['', '', '', '', ''],
            freqTexts: ['', '', '', '', ''],
        };
    },
    methods: {},
};
</script>

<style scoped>
h4 {
    font-size: 20px;
    margin-bottom: 3px;
}
.freq-bar {
    width: 100%;
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    font-size: 16px;
}
.freq-block {
    width: 19%;
    text-align: center;
    margin: 0 0.1rem;
    border: 2px solid black;
    background-color: white;
    padding: 0.2rem;
    animation-iteration-count: infinite;
    animation-duration: 5s;
    color: white;
}
.freq-block-gray {
    animation-name: prog-gray;
}
.freq-block-red {
    animation-name: prog-red;
}
.freq-block-orange {
    animation-name: prog-orange;
}
.freq-block-yellow {
    animation-name: prog-yellow;
}
.freq-block-green {
    animation-name: prog-green;
}
</style>