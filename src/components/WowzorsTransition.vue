<template>
  <component :is="type"
             :tag="tag"
             class="woah-transition-group"
             enter-active-class="wowzors-animation"
             leave-active-class="wowzors-animation-reverse"
             move-class="smooth-move"
             v-bind="$attrs"
             v-on="hooks">
      <slot></slot>
  </component>
</template>
<script>
export default {
  props: {
    duration: {
      type: Number,
      default: 5000
    },
    group: {
      type: Boolean,
      default: false
    },
    tag: {
      type: String,
      default: 'div'
    }
  },
  computed: {
    type() {
      return this.group ? 'transition-group' : 'transition';
    },
    hooks() {
      return {
        beforeEnter: this.setDuration,
        afterEnter: this.cleanUpDuration,
        beforeLeave: this.setDuration,
        afterLeave: this.cleanUpDuration,
        leave: this.setAbsolutePosition,
        ...this.$listeners,
      };
    }
  },
  methods: {
    setDuration(el) {
      el.style.animationDuration = `${this.duration}ms`;
    },
    cleanUpDuration(el) {
      el.style.animationDuration = '';
    },
    setAbsolutePosition(el) {
      if (this.group) {
        el.style.position = 'absolute';
      }
    },
  }
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

.woah {
  animation-fill-mode: both;
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

.smooth-move {
  transition: transform 1s linear;
}
</style>
