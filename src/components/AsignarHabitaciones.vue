<template>
  <div>
    <div class="card shadow-card  mt-3 mb-3">
      <div class="card-header">
        <b>Asignación de Habitaciones</b>
      </div>
      <div class="card-body">
          <div class="row">
              <div class="col-sm-12">
                <form>
                  <div class="form-group mt-2 mb-2">
                    <label for="title">Hotel: </label>
                    <select v-model="id_hotel" @input="v$.id_hotel.$touch()" class="form-control form-control-sm">
                      <option value="">--</option>
                      <option v-for="hotel of listaHoteles" :value="hotel.id">{{ hotel.nombre }}</option>
                    </select>
                    <span v-if="v$.id_hotel.$invalid && v$.id_hotel.$dirty" class="" style="font-size: 12px; color:red;">
                      Este campo es requerido
                    </span>
                  </div>
                  <div class="form-group mt-2 mb-2">
                    <label for="title">Cantidad: </label>
                    <input type="number" v-model="num_habs" @input="v$.num_habs.$touch()" class="form-control form-control-sm">
                    <span v-if="v$.num_habs.$invalid && v$.num_habs.$dirty" class="" style="font-size: 12px; color:red;">
                      Este campo es requerido y debe ser mayor a 0
                    </span>
                  </div>
                  <div class="form-group mt-2 mb-2">
                    <label for="title">Tipo Habitación: </label>
                    <select v-model="tipo_hab" @input="v$.tipo_hab.$touch()" class="form-control form-control-sm">
                      <option value="">--</option>
                      <option value="Estandar">Estandar</option>
                      <option value="Junior">Junior</option>
                      <option value="Suite">Suite</option>
                    </select>
                    <span v-if="v$.tipo_hab.$invalid && v$.tipo_hab.$dirty" class="" style="font-size: 12px; color:red;">
                      Este campo es requerido
                    </span>
                  </div>
                  <div class="form-group mt-2 mb-2">
                    <label for="title">Acomodación: </label>
                    <select v-model="acomodacion" @input="v$.acomodacion.$touch()" class="form-control form-control-sm">
                      <option value="">--</option>
                      <option value="1">Sencilla</option>
                      <option value="2">Doble</option>
                      <option value="3">Triple</option>
                      <option value="4">Cuádruple</option>
                    </select>
                    <span v-if="v$.acomodacion.$invalid && v$.acomodacion.$dirty" class="" style="font-size: 12px; color:red;">
                      Este campo es requerido
                    </span>
                  </div>
                </form>
              </div>
          </div>
      </div>
      <div class="card-footer">
        <div class="row">
          <div class="col-sm-12 text-center">
            <button class="btn btn-sm btn-success mx-auto" v-on:click="guardarHabitacion">Registrar Habitación</button>
            <router-link class="btn btn-sm btn-danger" tag="button" to="/habitaciones">Cancelar</router-link>
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
  name: 'AsignarHabitaciones',
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
      listaHoteles: [],
      id_hotel: '',
      num_habs: '',
      tipo_hab: '',
      acomodacion: '',
    }
  },
  methods:{
    /**
     * Función que recolecta la información de la acomodación de la Habitación para crearla
     */
    guardarHabitacion(){
      let habitacion = {
        id_hotel: this.id_hotel,
        num_habs: this.num_habs,
        tipo_hab: this.tipo_hab,
        acomodacion: this.acomodacion,
      }
      console.log(habitacion);
      this.axios.post('http://127.0.0.1:8000/api/habitaciones/new', habitacion).then((response) => {
        console.log(response);
        if (response.data.status == 201) {
          this.$swal.fire(
            'Notificación',
            response.data.mensaje,
            'success'
          ).then((result) => {
            this.$router.push('habitaciones');
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
    },
    getListaHoteles(){
      this.axios.get('http://127.0.0.1:8000/api/hoteles/all').then((response) => {
        console.log(response.data);
        this.listaHoteles = response.data.hoteles;
      })
    }
  },
  created() {
    this.getListaHoteles();
  },
  /**
   * Validaciones del formulario
   */
  validations() {
    return {
      id_hotel: {
        required
      },
      num_habs: {
        required,
        minValue: minValue(1)
      },
      tipo_hab: {
        required
      },
      acomodacion: {
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
