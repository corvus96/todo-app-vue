import Vue from 'vue';
import App from './App.vue';
import '@/assets/css/tailwind.css';

import Card from './components/Card.vue';
import Task from './components/Task.vue'
import TasksList from './components/TasksList.vue'

Vue.config.productionTip = false;

Vue.component('todo-card', Card);
Vue.component('Tasks-List', TasksList);
Vue.component('Task', Task);
new Vue({
  render: h => h(App),
}).$mount('#app');
