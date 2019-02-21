<template>
  <component :is="type"
             :tag="tag"
             :class="wrapperClass"
             enter-active-class="fadeIn-animation"
             leave-active-class="fadeIn-animation-reverse"
             move-class="smooth-move"
             v-bind="$attrs"
             v-on="hooks">
      <slot></slot>
  </component>
</template>
<script>
import transitionMixin from '@/mixins/transitionMixin'

export default {
  mixins: [transitionMixin],
  props: {
    duration: {
      type: Number,
      default: 1000,
    },
  },
};
</script>

<style lang="css">
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.woah {
  animation-fill-mode: both;
}

.fadeIn-animation,
.fadeIn-animation-reverse {
  animation-timing-function: linear;
  transform-origin: bottom center;
  animation-name: fadeIn;
}

.fadeIn-animation-reverse {
  animation-direction: reverse;
}

.smooth-move {
  transition: transform 1s linear;
}
</style>
