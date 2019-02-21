<template>
  <component :is="type"
             :tag="tag"
             :class="wrapperClass"
             enter-active-class="starWars-animation"
             leave-active-class="starWars-animation-reverse"
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
      default: 10000,
    },
  },
};
</script>

<style lang="css">
@keyframes starWars {
  0% {
    transform: translate3d(0,500px,0) rotateX(-60deg) scale(2);
  }
  99.9% {
    transform: translate3d(0, -1000px, 0) rotateX(60deg) scale(.19);
  }
}

.starWars-animation,
.starWars-animation-reverse {
  animation-timing-function: ease-out;
  transform-origin: bottom center;
  animation-name: starWars;
}

.starWars-animation-reverse {
  animation-direction: reverse;
}
</style>
