<template>
  <header>
    <p>模仿element ui 样式写的vue3 组件库</p>
    <a href="https://github.com/2889597857/my-UI.git">源码：</a>
    <a href="https://github.com/2889597857/my-UI.git"
      >https://github.com/2889597857/my-UI.git</a
    >
  </header>
  <section>
    <aside>
      <menuDemo />
    </aside>
    <main>
      <section>
        <formsDemo />
        <calendarDemo />
        <selectorDemo />
        <datepickerDemo />
      </section>
      <section>
        <tabsDemo />
        <carouselDemo />
      </section>
      <section>
        <magnifierorDemo />
      </section>
      <section>
        <starsDemo />
      </section>
    </main>
  </section>
</template>
<script setup>   
  import tabsDemo from './lib/myUI/components/tabs/demo.vue'
  import formsDemo from './lib/myUI/components/Form/demo.vue'
  import carouselDemo from './lib/myUI/components/carousel/demo.vue'
  import menuDemo from './lib/myUI/components/menu/demo.vue'
  import calendarDemo from './lib/myUI/components/calendar/demo.vue'
  import datepickerDemo from './lib/myUI/components/datepicker/demo.vue'
  import selectorDemo from './lib/myUI/components/Selector/demo.vue'
  import magnifierorDemo from './lib/myUI/components/Magnifier/demo.vue'
  import starsDemo from './lib/myUI/components/Stars/demo.vue'
</script>

<style>
  #app {
    font-family: Avenir, Hivetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  header {
    margin-top: 30px;
  }
  header a {
    color: #2c3e50;
  }
  section {
    display: flex;
  }
  aside {
    height: 100vh;
    background-color: rgb(84, 92, 100);
  }
  main {
    padding: 40px;
  }
  main section {
    display: flex;
  }
  main section > div {
    margin: 10px;
  }
  * {
    padding: 0;
    margin: 0;
  }
</style>