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
            <div class="col-2">
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
                        <small>(程式設計師)</small>
                    </li>
                    <li>
                        <ul>
                            <li>1. 開發物品進出管理系統</li>
                            <li>2. 開發實時產線運作狀態系統</li>
                            <li>3. 開發檢核記錄表系統</li>
                            <li>4. 開發簡易自動爬蟲系統</li>
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
