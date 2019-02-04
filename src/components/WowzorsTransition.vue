<template>
  <component :is="type"
             :tag="tag"
             enter-active-class="wowzors"
             leave-active-class="wowzors-reverse"
             v-bind="$attrs"
             v-on="hooks">
      <slot></slot>
  </component>
</template>
<script>
export default {
  props: {
    duration: {
      type: Number,
      default: 300
    },
    group: {
      type: Boolean,
      default: false
    },
    tag: {
      type: String,
      default: "div"
    }
  },
  computed: {
    type() {
      return this.group ? "transition-group" : "transition";
    },
    hooks() {
      return {
        beforeEnter: this.setDuration,
        afterEnter: this.cleanUpDuration,
        beforeLeave: this.setDuration,
        afterLeave: this.cleanUpDuration,
        ...this.$listeners
      };
    }
  },
  methods: {
    setDuration(el) {
      el.style.animationDuration = `${this.duration}ms`;
    },
    cleanUpDuration(el) {
      el.style.animationDuration = "";
    },
  }
};
</script>

<style lang="css">
.wowzors {
  animation-name: wowzors;
}
.wowzors-reverse {
  animation-name: wowzors !important;
  animation-direction: reverse !important;
}
</style>
