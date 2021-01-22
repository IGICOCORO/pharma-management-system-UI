<template>
	<div class="parent">
		<div>
			<h1>Mutualite</h1>
		</div>
		<div class="btn_panier">
			<button type="button" class="btn btn-primary btn-rounded">Ajouter</button>
		</div>
		<div class="table">
			<MutualiteTable/>
		</div>
	</div>
</template>
<script>
import MutualiteTable from '../components/mutualite_records_table';
export default {
  components:{ MutualiteTable},
  name: 'Mutualite', 
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