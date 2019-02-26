# vue-woah

> A Vue transition library based on [woah.css](http://www.joerezendes.com/projects/Woah.css/)


## Install
```
npm install --save vue-woah
```


## Component List
* ComeInStyleTransition
* FadeInTransition
* FlyInTransition
* LeaveInTransition
* RotateComplexTransition
* SimpleEntranceTransition
* Spin3DTransition
* StarWarsTransition
* WowzorsTransition


## Usage
You can add transitions globally:
```javascript
import { WowzorsTransition } from 'vue-woah'
Vue.component('WowzorsTransition', WowzorsTransition)
```

Or within individual components:
```javascript
import { WowzorsTransition } from 'vue-woah'

export default {
  components: {
    WowzorsTransition
  }
}
```

Notes:
- Make sure to add the `woah` class to elements within the transitions.


## Props
| Prop         | Description | Type | Default Value |
|:--------------:|-------------|------|---------------|
| **duration**     | Length of transition | `Number` | 5000 |
| **group**        | Is the component a `<transition-group>` | `Boolean` | `false` |
| **moveClass**    | The class which is added when items are changing positions in `<transition-group>` [(learn more)](https://vuejs.org/v2/guide/transitions.html#List-Move-Transitions) | `String` | smooth-move |
| **tag**          | What the transition tag is, if group is `true` | `String` | div |
| **wrapperClass** | The class the transition tag has | `String` | woah-transition-group |


## Special Thanks
[Creating Reusable Transitions in Vue by Cristi Jora](https://vuejsdevelopers.com/2018/02/26/vue-js-reusable-transitions/)

[Woah.css](http://www.joerezendes.com/projects/Woah.css/)
