<template>
	<div class="parent">
		<div>
			<h1>Achats</h1>
		</div>
		<div class="btn_panier">
			<button type="button" class="btn btn-primary btn-rounded">Achèter</button>
		</div>
		<div class="table">
			<StockTable/>
		</div>
	</div>
</template>
<script>
import StockTable from '../components/Achat_records_table';
export default {
  components:{ StockTable},
  name: 'Achat', 
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