<template>
  <component :is="type"
             :tag="tag"
             :class="wrapperClass"
             enter-active-class="fadeIn-animation"
             leave-active-class="fadeIn-animation-reverse"
             :move-class="moveClass"
             v-bind="$attrs"
             v-on="hooks">
      <slot></slot>
  </component>
</template>
<script>
import transitionMixin from '@/mixins/transitionMixin'
import '@/assets/style.css'

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

.fadeIn-animation,
.fadeIn-animation-reverse {
  animation-timing-function: linear;
  transform-origin: bottom center;
  animation-name: fadeIn;
}

.fadeIn-animation-reverse {
  animation-direction: reverse;
}
</style>
