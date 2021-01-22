<template>
	<div class="parent">
		<div>
			<h1>Ventes</h1>
		</div>
		<div class="btn_panier">
			<button type="button" class="btn btn-primary btn-rounded">Vendre</button>
		</div>
		<div class="data-table">
			
		</div>
	</div>
</template>
<script>
//import Sells from '../componnents/sells_records_table';
export default {
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
	.btn_panier{
		margin-right: 100px;
		position: relative;
		float: right;
	}
</style>