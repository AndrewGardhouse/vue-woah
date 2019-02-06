<template>
  <component :is="type"
             :tag="tag"
             class="woah-transition"
             :enter-active-class="`${transitionName}-animation`"
             :leave-active-class="`${transitionName}-animation-reverse`"
             move-class="smooth-move"
             v-bind="$attrs"
             v-on="hooks">
      <slot></slot>
  </component>
</template>
<script>
import 'woah.css'

export default {
  props: {
    duration: {
      type: Number,
      default: 300
    },
    transitionName: {
      type: String,
      default: 'wowzors'
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
      if (this.group && (this.transitionName !== 'blazingStar' && this.transitionName !== 'blazingStarText' && this.transitionName !== 'fadeIn')) {
        el.style.position = 'absolute';
      }
    },
  }
};
</script>

<style lang="css">
.comeInStyle-animation,
.comeInStyle-animation-reverse {
  animation-name: comeInStyle;
}

.wowzors-animation,
.wowzors-animation-reverse {
  animation-name: wowzors;
}

.leaveInStyle-animation,
.leaveInStyle-animation-reverse {
  animation-name: leaveInStyle;
}

.spin3D-animation,
.spin3D-animation-reverse {
  animation-name: spin3D;
}

.simpleEntranceExit-animation,
.simpleEntranceExit-animation-reverse {
  animation-name: simpleEntrance;
}

.starWars-animation,
.starWars-animation-reverse {
  animation-name: starWars;
}

.blazingStar-animation,
.blazingStar-animation-reverse {
  animation-name: blazingStar;
}

.blazingStarText-animation,
.blazingStarText-animation-reverse {
  animation-name: blazingStarText;
}

.fadeIn-animation,
.fadeIn-animation-reverse {
  animation-name: fadeIn;
}

.rotateComplex-animation {
  animation-name: rotateComplex;
}

.rotateComplex-animation-reverse {
  animation-name: rotateComplexOut;
}

.flyInOut-animation {
  animation-name: flyIn;
}

.flyInOut-animation-reverse {
  animation-name: flyOut;
}

.comeInStyle-animation-reverse,
.leaveInStyle-animation-reverse,
.wowzors-animation-reverse,
.spin3D-animation-reverse,
.simpleEntranceExit-animation-reverse,
.starWars-animation-reverse,
.fadeIn-animation-reverse {
  animation-direction: reverse;
}

.smooth-move {
  transition: transform 0.5s linear;
}
</style>
