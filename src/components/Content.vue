
<template>
      <div class="container-fluid">
        <!--inner_container starts here -->
        <div class="container-fluid">
          <div class="row user_dashboard_count">
            <div class="col">
              <div class="count_view red">
                <div class="count_list">
                  <h2>Stock</h2>
                  <p></p>
                </div>
                <div class="detail_list_icon">
                  <i class="fas fa-inventory"></i>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="count_view blue">
                <div class="count_list">
                  <h2>Vente</h2>
                  <p></p>
                </div>
                <div class="detail_list_icon">
                  <i class="fa fa-dollar" style="font-size:30px;color:blue"></i>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="count_view orange">
                <div class="count_list">
                  <h2>Mutualité</h2>
                  <p></p>
                </div>
                <div class="detail_list_icon">
                  <i class="fa fa-users yellow"></i>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="count_view green">
                <div class="count_list">
                  <h2>Rapports</h2>
                  <p></p>
                </div>
                <div class="detail_list_icon">
                 <i class="fa fa-file" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
</template>

<script>
export default {
  name: 'Content',
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
}
</script>

<style>
.count_view {
  height: 80px;
  margin-top: 7px;
  border-radius: 5px; }
  .count_view.red {
    background-color: rgba(255, 0, 0, 0.21); }
  .count_view.blue {
    background-color: rgba(0, 123, 255, 0.18); }
  .count_view.yellow {
    background-color: rgba(255, 255, 0, 0.23); }
  .count_view.orange {
    background-color: rgba(255, 165, 0, 0.19); }
  .count_view.green {
    background-color: rgba(49, 212, 133, 0.23); }
  .count_view .count_list {
    width: 79%;
    float: left; }
    .count_view .count_list h2 {
      font-size: 15px;
      padding-top: 15px;
      font-weight: 700;
      margin-bottom: 0px;
      text-align: center; }
    .count_view .count_list p {
      font-size: 25px;
      font-weight: 600;
      margin: 0px;
      text-align: center; }
  .count_view .detail_list_icon i {
    font-size: 30px;
    padding-top: 25px; }
    .count_view .detail_list_icon i.pink {
      color: #ff6565; }
    .count_view .detail_list_icon i.blue {
      color: #519cef; }
    .count_view .detail_list_icon i.yellow {
      color: #f7b743; }
    .count_view .detail_list_icon i.green {
      color: #25b725; }
</style>

