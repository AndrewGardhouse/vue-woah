<template>
  <component :is="type"
             :tag="tag"
             :class="wrapperClass"
             enter-active-class="wowzors-animation"
             leave-active-class="wowzors-animation-reverse"
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
@keyframes wowzors {
  1% {
    opacity: 0;
  }

  10% {
    opacity: 1;
    transform: rotate(360deg) translateX(150px) translateY(400px) rotate(-360deg) rotateY(360deg);
  }

  20% {
    transform: rotate(720deg) translateX(150px) translateY(350px) rotate(-720deg) rotateY(720deg) ;
  }

  30% {
    transform: rotate(1080deg) translateX(150px) translateY(300px) rotate(-1080deg) rotateY(1080deg) ;
  }

  40% {
    transform: rotate(1440deg) translateX(150px) translateY(250px) rotate(-1440deg) rotateY(1440deg) ;
  }

  50% {
    transform: rotate(1800deg) translateX(150px) translateY(200px) rotate(-1800deg) rotateY(1800deg) ;
  }

  60% {
    transform: rotate(1440deg) translateX(150px) translateY(150px) rotate(-1440deg) rotateY(1440deg) ;
  }

  70% {
    transform: rotate(1080deg) translateX(150px) translateY(0px) rotate(1080deg) rotateX(180deg);
  }
}

.wowzors-animation,
.wowzors-animation-reverse {
  animation-name: wowzors;
  animation-timing-function: linear;
  transform-origin: bottom center;
}

.wowzors-animation-reverse {
  animation-direction: reverse;
}
</style>
