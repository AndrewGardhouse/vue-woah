<template>
  <component :is="type"
             :tag="tag"
             :class="wrapperClass"
             enter-active-class="rotateComplex-animation"
             leave-active-class="rotateComplex-animation-reverse"
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
@keyframes rotateComplex {
  1% {
    opacity: 90%;
    transform: translate3d(0,0,0) rotate(0deg);
  }
  10% {
    transform: translate3d(200px, -140px, 0) rotate(1080deg);
  }
  20% {
    transform: translate3d(-200px, 140px, 0) rotate(-160deg);
  }
  30% {
    transform: translate3d(-200px, -140px, 0) rotate(340deg);
  }
  40% {
    transform: translate3d(-200px, 140px, 0) rotate(-720deg);
  }
  50% {
    transform: translate3d(200px, 140px, 0) rotate(120deg) scale(1.2);
  }
  60% {
    transform: translate3d(0px, 0px, 100px) rotate(1080deg) scale(1.5);
  }
  65% {
    transform: translate3d(0px, 0px, 200px) rotate(-1080deg) scale(2.0);
  }
  90% {
    transform: translate3d(0px, 0px, 600px) rotate(6080deg) scale(5.0);
  }
  100% {
    transform: translate3d(0px, 0px, 0px) rotate(0deg) scale(1.0);
  }
}

@keyframes rotateComplexOut {
  1% {
    opacity: 90%;
    transform: translate3d(0,0,0) rotate(0deg);
  }
  10% {
    transform: translate3d(200px, -140px, 0) rotate(1080deg);
  }
  20% {
    transform: translate3d(-200px, 140px, 0) rotate(-160deg);
  }
  30% {
    transform: translate3d(-200px, -140px, 0) rotate(340deg);
  }
  40% {
    transform: translate3d(-200px, 140px, 0) rotate(-720deg);
  }
  50% {
    transform: translate3d(200px, 140px, 0) rotate(120deg) scale(1.2);
  }
  60% {
    transform: translate3d(0px, 0px, 100px) rotate(1080deg) scale(1.5);
  }
  65% {
    transform: translate3d(0px, 0px, 200px) rotate(-1080deg) scale(2.0);
  }
  90% {
    transform: translate3d(0px, 0px, 600px) rotate(6080deg) scale(5.0);
  }
  99% {
    transform: translate3d(0px, 0px, 0px) rotate(0deg) scale(.01);
    opacity: 100%
  }
  100% {
    display: none;
    transform: translate3d(0px, 0px, 0px) rotate(0deg) scale(0);
    opacity: 0%;
  }
}

.woah {
  animation-fill-mode: both;
}

.rotateComplex-animation,
.rotateComplex-animation-reverse {
  animation-timing-function: ease-out;
  transform-origin: bottom center;
  animation-name: rotateComplex;
}

/* .rotateComplex-animation {
  animation-name: rotateComplex;
} */

.rotateComplex-animation {
  animation-direction: reverse;
}

.smooth-move {
  transition: transform 1s linear;
}
</style>
