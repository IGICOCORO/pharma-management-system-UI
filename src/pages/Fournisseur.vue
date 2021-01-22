<template>
	<div class="parent">
		<div>
			<h1>Fournisseur</h1>
		</div>
		<div class="btn_panier">
			<button type="button" class="btn btn-primary btn-rounded">Ajouter</button>
		</div>
		<div class="table">
			<FournisseurTable/>
		</div>
	</div>
</template>
<script>
import FournisseurTable from '../components/Fournisseur_records_table';
export default {
  components:{ FournisseurTable},
  name: 'Fournisseur',
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