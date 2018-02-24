const data = {
  tareas: [
    {
      texto: 'Aprender Vue.js',
      terminada: false
    },
    {
      texto: 'Aprender Angular',
      terminada: false
    },
    {
      texto: 'Aprender React',
      terminada: false
    }
  ],
  nuevaTarea: ''
}

// componente Titilo
Vue.component('titulo', {
  template: '<h2>{{ titulo }}</h2>',
  data() {
    return { titulo: 'Lista de tareas' }
  }
})

//Componenete Nueva Tarea
Vue.component('nuevaTarea', {
  template: `
  <div class="input-group">
    <input class="form-control le" type="text" v-on:keyup.enter="agregarTarea" placeholder="Escribe una nueva Tarea" v-model="nuevaTarea">
    <span class="input-group-btn right">
      <button v-on:click="agregarTarea" class="btn btn-primary">
        Agregar Tarea
      </button>
    </span>
  </div>`,
  data() {
    return data
  },
  methods: {
    agregarTarea() {
      let texto = this.nuevaTarea.trim()
      if (texto) {
        this.tareas.push({
          texto,
          terminada: false
        })
        this.nuevaTarea = ''
      }
    }
  }
})

//Componente Agregar Tarea
Vue.component('listaTarea', {
  template: `
  <ul class=" list-group">
    <li class="list-group-item" v-for="(tarea, indice) in tareas" v-bind:class="{terminada: tarea.terminada}">
      {{tarea.texto}}
      <span class=" pull-right">
        <button type="button" class="btn btn-success btn-xs glyphicon glyphicon-ok " v-on:click="tarea.terminada = !tarea.terminada"></button>
        <button type="button" class="btn btn-danger btn-xs glyphicon glyphicon-remove " v-on:click="borrar(indice)"></button>
      </span>
    </li>
  </ul>`,
  data() {
    return data
  },
  methods: {
    borrar(indice) {
      this.tareas.splice(indice, 1)
    }
  }
})

const app = new Vue({
  el: '#app',
  data
})
