<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <button type="button" name="button" @click="toggleShow">Toggle</button>
    <button type="button" name="button" @click="addItem">Add</button>
    <div class="bow-wrapper">
      <woah-transition group :duration="5000" transitionName="comeInStyle">
        <div class="box"
              v-for="(item, index) in list"
              @click="remove(index)"
              :key="item">
        </div>
      </woah-transition>
    </div>
  </div>
</template>

<script>
import WoahTransition from '@/components/WoahTransition'

export default {
  name: 'app',
  components: {
    WoahTransition,
  },
  data() {
    return {
      show: true,
      list: [1, 2, 3, 4, 5]
    };
  },
  methods: {
    toggleShow() {
      this.show = !this.show;
    },
    remove(index) {
      this.list.splice(index, 1);
    },
    addItem() {
      let randomIndex = Math.floor(Math.random() * this.list.length);
      this.list.splice(randomIndex, 0, Math.random());
    },
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.box-wrapper {
  display: flex;
  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;
}
.box {
  display: inline-block;
  width: 50px;
  height: 50px;
  margin-top: 20px;
  margin-right: 10px;
  background-color: rgb(108, 141, 213);
  box-shadow: rgba(108, 141, 213, 0.5) 0px 6px 20px;
  border-radius: 10px;
}
</style>
