<template>
  <component :is="type"
             :tag="tag"
             :class="wrapperClass"
             enter-active-class="leaveInStyle-animation"
             leave-active-class="leaveInStyle-animation-reverse"
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
@keyframes leaveInStyle {

  10% {
    transform: translate3d(0px, -100px, 0px) scale(1);
  }

  12% {
    transform: translate3d(0px, 5px, 0px) scale(1);
  }

  14% {
    transform: translate3d(0px, -10px, 0px) scale(1);
  }

  16% {
    transform: translate3d(0px, 0px, 0px) scale(1);
  }

  18% {
    transform: translate3d(0px, 10px, 0px) scale(1);
  }

  25% {
    transform: translate3d(0px, 0px, 0px) skewY(10deg) scale(2);
  }

  27% {
    transform: translate3d(0px, -5px, 0px) skewY(7deg) scale(1.8);
  }

  29% {
    transform: translate3d(0px, 5px, 0px) skewY(10deg) scale(2);
  }

  60% {
    transform: translate3d(-400px, 5px, 0px) rotate(360deg) rotateY(-760deg) skewY(-10deg) scale(2);
  }

  70% {
    transform: translate3d(400px, 5px, 0px) rotate(0deg) rotateY(-360deg) skewY(10deg) scale(2);
  }

  80% {
    transform: translate3d(0px, 0px, 0px) rotateY(0deg) skewY(0deg) scale(1);
  }

  90% {
    transform: translate3d(0px, 0px, 0px) rotateY(0deg) rotateX(720deg) scale(1.5);
  }

  99% {
    transform: translate3d(0px, 0px, 0px) rotateY(0deg) rotateX(0deg) skewY(0deg) scale(.01);
  }

  100% {
    transform: translate3d(0px, 0px, 0px) rotateY(0deg) rotateX(0deg) skewY(0deg) scale(.001);
    visibility: hidden;
  }

}

.leaveInStyle-animation,
.leaveInStyle-animation-reverse {
  animation-timing-function: ease-out;
  transform-origin: bottom center;
  animation-name: leaveInStyle;
}

.leaveInStyle-animation {
  animation-direction: reverse;
}
</style>
