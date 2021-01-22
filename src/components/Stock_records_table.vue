<template>
  <mdb-tbl btn responsive striped>
    <mdb-tbl-head>
      <tr>
        <th>#</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Username</th>
      </tr>
    </mdb-tbl-head>
    <mdb-tbl-body>
      <tr>
        <th scope="row">1</th>
        <td>
          <button type="button" class="btn btn-indigo btn-sm m-0">Button</button>
        </td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Jacob</td>
        <td>
          <button type="button" class="btn btn-indigo btn-sm m-0">Button</button>
        </td>
        <td>@fat</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>Larry</td>
        <td>the Bird</td>
        <td>
          <button type="button" class="btn btn-indigo btn-sm m-0">Button</button>
        </td>
      </tr>
    </mdb-tbl-body>
  </mdb-tbl>
</template>

<script>
  import { mdbTbl, mdbTblHead, mdbTblBody } from 'mdbvue';
  export default {
    name: 'TableAdditionalPage',
    components: {
      mdbTbl,
      mdbTblHead,
      mdbTblBody
    }
  }
</script>

<style lang="scss" scoped></style>
