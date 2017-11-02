<template>
  <div class="product-param">
    <table>
      <tr>
        <td>Diode Type</td>
        <td>Standard</td>
      </tr>
      <tr>
        <td>Voltage - DC Reverse (Vr) (Max)</td>
        <td>250V</td>
      </tr>
      <tr>
        <td>Current - Average Rectified (Io)</td>
        <td>200mA (DC)</td>
      </tr>
      <tr>
        <td>Voltage - Forward (Vf) (Max) @ If</td>
        <td>1.25V @ 200mA</td>
      </tr>
      <tr>
        <td>Speed</td>
        <td>Small Signal =< 200mA (Io), Any Speed</td>
      </tr>
      <tr>
        <td>Voltage - Forward (Vf) </td>
        <td>Diode Standard 250V 200mA (DC) Surface Mount SOD-323</td>
      </tr>
      <tr>
        <td>Reverse Recovery Time /RoHs</td>
        <td>50ns</td>
      </tr>
    </table>
  </div>
</template>

<script>
  export default {
  }
</script>

<style scoped lang="scss">
  .product-param {
    box-sizing: border-box;
    padding: 20px;

    table {
      width: 100%;
      tr {
        td {
          padding: 5px 0;
          &:first-child {
            width: 40%;
          }
        }
      }
    }
  }
</style>
