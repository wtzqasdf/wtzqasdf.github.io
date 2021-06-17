<template>
    <footer id="footer" class="container mt-4x p-2x">
        <div class="row">
            <div class="col-full text-center">
                <small>
                    本站由&nbsp;
                    <span class="mark">楊靖仁(Jin)</span>&nbsp;使用HTML,CSS,JS(Vue)製作
                </small>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'footer',
    data() {
        return {};
    },
    methods: {}
};
</script>

<style scoped>
small {
    color: white;
    font-size: 14px;
}
.mark {
    font-weight: bold;
    font-size: 18px;
    text-decoration: underline;
}
.container {
    background-color: black;
}
.mt-4x {
    margin-top: 1rem;
}
.p-2x {
    padding-top: 1rem;
    padding-bottom: 0.5rem;
}
</style>
