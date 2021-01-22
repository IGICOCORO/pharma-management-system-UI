<template>
	<div class="parent">
		<div>
			<h1>Ventes</h1>
		</div>
		<div class="btn_panier">
			<button type="button" class="btn btn-primary btn-rounded">Vendre</button>
		</div>
		<div class="table">
			<SellsTable/>
		</div>
	</div>
</template>
<script>
import SellsTable from '../components/Sells_records_table';
export default {
  components:{ SellsTable},
  name: 'Vente', 
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