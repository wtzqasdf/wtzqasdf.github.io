<template>
    <nav id="navbar">
        <ul>
            <li>
                <a href="/" target="_self">主頁</a>
            </li>
            <li>
                <a href="/workexp.html" target="_self">工作經驗</a>
            </li>
            <li>
                <a href="/works.html" target="_self">工作作品集</a>
            </li>
            <li>
                <a href="/person.html" target="_self">個人作品集</a>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'navbar',
    data() {
        return {};
    }
};
</script>

<style scoped>
nav {
    display: flex;
    justify-content: space-between;
    width: inherit;
    height: auto;
    background-color: rgba(0, 0, 0, 0.8);
}
ul {
    display: flex;
    flex-direction: row;
}
li {
    background-color: transparent;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
    padding: 0.5rem;
}
li:hover {
    background-color: rgba(0, 255, 0, 0.5);
}
li:active {
    background-color: rgba(0, 150, 0, 0.6);
}
a {
    text-decoration: none;
    color: white;
    padding: 0.5rem 0;
}
</style>
