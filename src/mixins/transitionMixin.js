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
    },
    wrapperClass: {
      type: String,
      default: 'woah-transition-group'
    },
    moveClass: {
      type: String,
      default: 'smooth-move'
    },
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
  },
}
