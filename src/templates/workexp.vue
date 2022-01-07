<template>
    <div id="workexp" class="container">
        <!-- 工作經驗 -->
        <div class="row">
            <div class="col-full text-center">
                <h1>工作經驗</h1>
            </div>
        </div>
        <!-- 清單 -->
        <div class="row">
            <div class="col-4">
                <ol>
                    <li>
                        <h6>巨機電腦</h6>
                    </li>
                    <li>
                        <small>(維修工程師)</small>
                    </li>
                    <li>
                        <ul>
                            <li>1. 電腦及零組件維護</li>
                            <li>2. 基本網路故障排除</li>
                        </ul>
                    </li>
                    <li class="mt-2x">
                        <h6>品安科技</h6>
                    </li>
                    <li>
                        <small>(軟體工程師)</small>
                    </li>
                    <li>
                        <ul>
                            <li>1. 協同開發生產所需的管理或作業軟體</li>
                            <li>2. 架設與維護伺服器</li>
                        </ul>
                    </li>
                </ol>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'workexp',
    data() {
        return {};
    },
    methods: {}
};
</script>

<style scoped>
h6 {
    font-size: 24px;
    font-weight: bold;
}
small {
    font-size: 14px;
    font-weight: bold;
}
ol {
    line-height: 30px;
}
ul {
    margin-left: 5rem;
}
.mt-2x {
    margin-top: 2rem;
}
</style>
