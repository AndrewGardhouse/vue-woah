<template>
  <component :is="type"
             :tag="tag"
             :enter-active-class="`${transitionName}`"
             :leave-active-class="`${transitionName}-reverse`"
             move-class="smooth-move"
             v-bind="$attrs"
             v-on="hooks">
      <slot></slot>
  </component>
</template>
<script>
import 'woah.css'

export default {
  props: {
    duration: {
      type: Number,
      default: 300
    },
    transitionName: {
      type: String,
      default: 'wowzors'
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
        leave: this.setAbsolutePosition,
        ...this.$listeners,
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
    setAbsolutePosition(el) {
      if (this.group) {
        el.style.position = "absolute";
      }
    },
  }
};
</script>

<style lang="css">
.comeInStyle {
  animation-name: comeInStyle;
}
.comeInStyle-reverse {
  animation-name: comeInStyle;
  animation-direction: reverse;
}

.wowzors {
  animation-name: wowzors;
}

.wowzors-reverse {
  animation-name: wowzors;
  animation-direction: reverse;
}

.smooth-move {
  transition: transform 0.3s ease-out;
}
</style>
