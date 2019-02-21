<template>
  <component :is="type"
             :tag="tag"
             :class="wrapperClass"
             enter-active-class="spin3D-animation"
             leave-active-class="spin3D-animation-reverse"
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
};
</script>

<style lang="css">
@keyframes spin3D {
  15% {
    transform: rotateY(180deg) scale(2);
  }
  30% {
    transform: rotateX(360deg) rotateY(180deg) skewX(50deg) scale(2);
  }
  45% {
    transform: rotateX(480deg) rotateY(360deg) skewX(-50deg) skewY(0deg)  scale(1.5);
  }
  60% {
    transform: rotateX(0deg) rotateY(0deg) skewX(0deg) skewY(0deg)  scale(2);
  }
  70% {
    transform: rotateX(0deg) rotateY(0deg) skewX(0deg) skewY(0deg)  scale(3);
  }
  80% {
    transform: rotateX(0deg) rotateY(540deg) skewX(0deg) skewY(0deg)  scale(3);
  }
  90% {
    transform: rotateX(180deg) rotateY(1080deg) skewX(0deg) skewY(0deg)  scale(.3);
  }
  97% {
    transform: rotateX(40deg) rotateY(80deg) skewX(0deg) skewY(0deg)  scale(2);
  }
}

.woah {
  animation-fill-mode: both;
}

.spin3D-animation,
.spin3D-animation-reverse {
  animation-timing-function: linear;
  transform-origin: bottom center;
  animation-name: spin3D;
}

.spin3D-animation-reverse {
  animation-direction: reverse;
}

.smooth-move {
  transition: transform 1s linear;
}
</style>
