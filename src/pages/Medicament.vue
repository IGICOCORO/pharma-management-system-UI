<template>
	<div class="parent">
		<div>
			<h1>Medicament</h1>
		</div>
		<div class="btn_panier">
			<button type="button" class="btn btn-primary btn-rounded">Ajouter</button>
		</div>
		<div class="table">
			<MedicamentTable/>
		</div>
	</div>
</template>
<script>
import MedicamentTable from '../components/Medicament_records_table';
export default {
  components:{ MedicamentTable},
  name: 'Medicament',
  created() {

  },
  data() {
	return {
	}
  },
  props: {
   
  },
  methods: {
   
  },
};
	
</script>
<style scoped>
.table{
	margin-left: 2px;
	padding-left: 300px;
}
.btn_panier{
	margin-right: 100px;
	position: relative;
	float: right;
}
</style>