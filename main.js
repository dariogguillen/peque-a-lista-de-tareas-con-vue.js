const app = new Vue({
  el: '#app',
  data: {
    titulo: 'Lista de tareas',
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
    },
    borrar(indice) {
      this.tareas.splice(indice, 1)
    }
  }
})
