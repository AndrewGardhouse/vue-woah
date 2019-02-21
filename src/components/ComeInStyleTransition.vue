<template>
  <component :is="type"
             :tag="tag"
             :class="wrapperClass"
             enter-active-class="comeInStyle-animation"
             leave-active-class="comeInStyle-animation-reverse"
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
@keyframes comeInStyle {
  0% {
    opacity: 100%;
    transform: translate3d(0px, -3000px, -2000px);
  }

  1% {
    opacity: 0%;
    transform: translate3d(0px, -3000px, -2000px);
  }

  25% {
    transform: translate3d(0px, -200px, -200px) scale(3) rotateX(0) rotateY(0);
  }

  50% {
    transform: translate3d(200px, -0px, -0px) scale(6) rotateX(180deg) rotateY(90deg);

  }


  90% {
    opacity: 0%;
    transform: translate3d(-200px, 200px, 200px) scale(3) rotateX(360deg) rotateY(180deg);
  }

  100% {
    opacity: 100%;
    transform: none;
  }

}

.comeInStyle-animation,
.comeInStyle-animation-reverse {
  animation-timing-function: ease-out;
  transform-origin: bottom center;
  animation-name: comeInStyle;
}

.comeInStyle-animation-reverse {
  animation-direction: reverse;
}

.smooth-move {
  transition: transform 1s linear;
}
</style>
