<template>
  <component :is="type"
             :tag="tag"
             :class="wrapperClass"
             enter-active-class="flyIn-animation"
             leave-active-class="flyIn-animation-reverse"
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
};
</script>

<style lang="css">
@keyframes flyIn {
  0% {
    transform: translate3d(2000px,-2000px,0px);
    /* display: none; */
  }
  10%, 15% {
    transform: translate3d(-0px,-0px,0px) scale(.07);
  }
  20% {
    transform: translate3d(0,1000px,0px);
  }
  30% {
    transform: translate3d(-2000px, 2000px, 0px) rotateX(60deg) scale(5);
  }
  40% {
    transform: translate3d(2000px,-2000px,0px) rotateX(0deg) scale(2);
  }
  60% {
    transform: translate3d(-600px,-200px,0px) rotateX(0deg) scale(.3);
  }
  80% {
    transform: translate3d(0,0,0) scale(.01);
  }
  100% {
    transform: translate3d(0,0,0);
  }
}

.flyIn-animation,
.flyIn-animation-reverse {
  animation-timing-function: ease-out;
  transform-origin: bottom center;
  animation-name: flyIn;
}

.flyIn-animation-reverse {
  animation-direction: reverse;
}
</style>
