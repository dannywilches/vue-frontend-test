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
                    <input type="text" v-model="hotel.nombre" class="form-control form-control-sm">
                    <span v-if="hotel.nombre" class="" style="font-size: 12px; color:red;">
                        Este campo es requerido
                    </span>
                  </div>
                  <div class="form-group mt-2 mb-2">
                    <label for="title">Dirección: </label>
                    <input type="text" v-model="hotel.direccion" class="form-control form-control-sm">
                    <span v-if="hotel.direccion" class="" style="font-size: 12px; color:red;">
                        Este campo es requerido
                    </span>
                  </div>
                  <div class="form-group mt-2 mb-2">
                    <label for="title">Ciudad: </label>
                    <input type="text" v-model="hotel.ciudad" class="form-control form-control-sm">
                    <span v-if="hotel.ciudad" class="" style="font-size: 12px; color:red;">
                        Este campo es requerido
                    </span>
                  </div>
                  <div class="form-group mt-2 mb-2">
                    <label for="title">Nit: </label>
                    <input type="text" v-model="hotel.nit" class="form-control form-control-sm">
                    <span v-if="hotel.nit" class="" style="font-size: 12px; color:red;">
                        Este campo es requerido
                    </span>
                  </div>
                  <div class="form-group mt-2 mb-2">
                    <label for="title">Número de habitaciones: </label>
                    <input type="number" v-model="hotel.num_hab" class="form-control form-control-sm">
                    <span v-if="hotel.num_hab" class="" style="font-size: 12px; color:red;">
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
            <button class="btn btn-sm btn-success mx-auto" v-on:click="guardarHotel">Registrar Hotel</button>
            <router-link class="btn btn-sm btn-danger" tag="button" to="/hoteles">Cancelar</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CrearHoteles',
  data(){
    return {
      hotel: {
        nombre: '',
        direccion: '',
        ciudad: '',
        nit: '',
        num_hab: '',
      },

    }
  },
  methods:{
    guardarHotel(){
      console.log(this.hotel);
      alert('Guardar hotel');
    }
  },
  computed: {
    numHoteles() {
      const quantity = (this.listaHoteles) ? this.listaHoteles.length : 0;
      return quantity;
    }
  }
}
</script>
<style scoped>
  .nonRegister {
    opacity: 0.5;
    font-style: italic;
  }
</style>
