<template>
  <div>
  	<div class="form-outline">
        <input type="text" id="formControlLg" class="form-control form-control-lg" />
        <label class="form-label" for="formControlLg">Nom du Produit</label>
    </div>
    <div class="form-outline">
        <input type="text" id="formControlLg" class="form-control form-control-lg" />
        <label class="form-label" for="formControlLg">Prix d'achat</label>
    </div>

<div class="form-outline">
  <input type="text" id="formControlDefault" class="form-control" />
  <label class="form-label" for="formControlDefault">Quantité</label>
</div>
<div class="form-outline">
  <input type="text" id="formControlDefault" class="form-control" />
  <label class="form-label" for="formControlDefault">lot</label>
</div>

<div class="form-outline">
  <input type="select" id="formControlSm" class="form-control form-control-sm" />
  <label class="form-label" for="formControlSm">Fournisseur</label>
</div>
  </div>
</template>

<script>
export default {
  name: "Add_achat_form",
  created() {},
  data() {
    return {};
  },
  props: {},
  methods: {},
};
</script>

<style lang="scss" scoped></style>