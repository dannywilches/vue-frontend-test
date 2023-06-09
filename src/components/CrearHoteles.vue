<template>
  <div>
    <div class="card shadow-card  mt-3 mb-3">
      <div class="card-header">
        <b>Nuevo Hotel</b>
      </div>
      <div class="card-body">
          <div class="row">
              <div class="col-sm-12">
                <form>
                  <div class="form-group mt-2 mb-2">
                    <label for="title">Nombre del Hotel: </label>
                    <input type="text" v-model="nombre" @input="v$.nombre.$touch()" class="form-control form-control-sm">
                    <span v-if="v$.nombre.$invalid && v$.nombre.$dirty" class="" style="font-size: 12px; color:red;">
                      Este campo es requerido
                    </span>
                  </div>
                  <div class="form-group mt-2 mb-2">
                    <label for="title">Dirección: </label>
                    <input type="text" v-model="direccion" @input="v$.direccion.$touch()" class="form-control form-control-sm">
                    <span v-if="v$.direccion.$invalid && v$.direccion.$dirty" class="" style="font-size: 12px; color:red;">
                      Este campo es requerido
                    </span>
                  </div>
                  <div class="form-group mt-2 mb-2">
                    <label for="title">Ciudad: </label>
                    <input type="text" v-model="ciudad" @input="v$.ciudad.$touch()" class="form-control form-control-sm">
                    <span v-if="v$.ciudad.$invalid && v$.ciudad.$dirty" class="" style="font-size: 12px; color:red;">
                      Este campo es requerido
                    </span>
                  </div>
                  <div class="form-group mt-2 mb-2">
                    <label for="title">Nit: </label>
                    <input type="text" v-model="nit" @input="v$.nit.$touch()" class="form-control form-control-sm">
                    <span v-if="v$.nit.$invalid && v$.nit.$dirty" class="" style="font-size: 12px; color:red;">
                      Este campo es requerido
                    </span>
                  </div>
                  <div class="form-group mt-2 mb-2">
                    <label for="title">Número de habitaciones: </label>
                    <input type="number" v-model="num_habs" @input="v$.num_habs.$touch()" class="form-control form-control-sm">
                    <span v-if="v$.num_habs.$invalid && v$.num_habs.$dirty" class="" style="font-size: 12px; color:red;">
                      Este campo es requerido y debe ser mayor a cero
                    </span>
                  </div>
                </form>
              </div>
          </div>
      </div>
      <div class="card-footer">
        <div class="row">
          <div class="col-sm-12 text-center">
            <button class="btn btn-sm btn-success mx-auto" v-on:click="guardarHotel">Registrar Hotel</button>
            <router-link class="btn btn-sm btn-danger" tag="button" to="/hoteles">Cancelar</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { useVuelidate } from '@vuelidate/core'
import { minValue, required } from '@vuelidate/validators'

export default {
  name: 'CrearHoteles',
  setup() {
    return {
      v$: useVuelidate()
    }
  },
  data(){
    /**
     * Data modelo para los inputs del formulario
     */
    return {
      nombre: '',
      direccion: '',
      ciudad: '',
      nit: '',
      num_habs: '',
    }
  },
  methods:{
    /**
     * Función que recolecta la información del Hotel para crear el Hotel
     */
    guardarHotel(){
      let hotel = {
        nombre: this.nombre,
        direccion: this.direccion,
        ciudad: this.ciudad,
        nit: this.nit,
        num_habs: this.num_habs,
      }
      console.log(hotel);
      this.axios.post('http://127.0.0.1:8000/api/hoteles/new', hotel).then((response) => {
        console.log(response);
        if (response.data.status == 201) {
          this.$swal.fire(
            'Notificación',
            response.data.mensaje,
            'success'
          ).then((result) => {
            this.$router.push('hoteles');
          });
        }
        else {
          this.$swal.fire(
            'Notificación',
            response.data.mensaje,
            'error'
          ).then((result) => {

          });
        }
      })
    }
  },
  /**
   * Validaciones del formulario
   */
  validations() {
    return {
      nombre: {
        required
      },
      direccion: {
        required
      },
      ciudad: {
        required
      },
      nit: {
        required
      },
      num_habs: {
        minValue: minValue(1),
        required
      },
    }

  },

}
</script>
<style scoped>
  .nonRegister {
    opacity: 0.5;
    font-style: italic;
  }
</style>
