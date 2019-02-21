<template>
  <component :is="type"
             :tag="tag"
             :class="wrapperClass"
             enter-active-class="simpleEntrance-animation"
             leave-active-class="simpleEntrance-animation-reverse"
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
@keyframes simpleEntrance {
  0% {
    opacity: 0%;
    transform: translate3d(-2000px,500px,0) scale(10);
  }
  1% {
    opacity: 100%
  }
  40% {
    transform: translate3d(2000px,0px,0) scale(5);
  }
  50% {
    transform: translate3d(-2000px,-100px,0) scale(3);
  }
  60% {
    transform: translate3d(2000px,100px,0) scale(2);
  }
  70% {
    transform: translate3d(-2000px,400px,0) scale(.1);
  }
  75% {
    transform: translate3d(0px,0px,0) scale(.1);
  }
  80% {
    transform:  rotate(360deg) translateX(150px) rotate(-360deg)
  }
}

.simpleEntrance-animation,
.simpleEntrance-animation-reverse {
  animation-timing-function: linear;
  transform-origin: bottom center;
  animation-name: simpleEntrance;
}

.simpleEntrance-animation-reverse {
  animation-direction: reverse;
}
</style>
