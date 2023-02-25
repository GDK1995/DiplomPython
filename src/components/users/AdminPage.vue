<template>
  <div class="user">
    <div class="user_head">
      <p class="heading_xl_h4">{{$t('user_3')}}</p>
      <button class="medium_s">{{$t('add_admin')}}</button>
    </div>
    <div class="user_table">
      <table>
        <thead>
          <tr class="medium_bold_s">
            <th style="width: 100px;">№</th>
            <th style="width: 300px;">Ф.И.О.</th>
            <th style="width: 200px;">Email</th>
            <th style="width: 200px;">Телефон</th>
          </tr>
        </thead>
        <tbody>
          <tr
            class="medium_s"
            v-for="(item, index) in admins"
            :key="item">
            <td>{{index + 1}}</td>
            <td>{{item.fullname}}</td>
            <td>{{item.mail}}</td>
            <td>{{item.phone}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  name: 'AdminPage',
  data () {
    return {
      admins: [{
        fullname: '',
        mail: '',
        phone: ''
      },
      {
        fullname: '',
        mail: '',
        phone: ''
      },
      {
        fullname: '',
        mail: '',
        phone: ''
      },
      {
        fullname: '',
        mail: '',
        phone: ''
      },
      {
        fullname: '',
        mail: '',
        phone: ''
      },
      {
        fullname: '',
        mail: '',
        phone: ''
      },
      {
        fullname: '',
        mail: '',
        phone: ''
      }]
    }
  }
}
</script>
