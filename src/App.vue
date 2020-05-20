<template>
  <div id="app">
    <IdaTable />
  </div>
</template>

<script>
import IdaTable from "./components/IdaTable.vue";

export default {
  name: "App",
  components: {
    IdaTable
  }
};
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
