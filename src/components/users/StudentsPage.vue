<template>
  <div class="user">
    <div class="user_head">
      <p class="heading_xl_h4">{{$t('user_2')}}</p>
      <button
        v-if="!isTableVisible"
        @click="visibilityTable"
        class="medium_s">{{$t('add_student')}}</button>
    </div>
    <div
      class="user_table"
      v-if="!isTableVisible">
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
            v-for="(item, index) in userList"
            :key="item.id">
            <td>{{index + 1}}</td>
            <td>{{item.first_name}} {{item.last_name}} {{item.second_name}}</td>
            <td>{{item.email}}</td>
            <td>{{item.phone}}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <form
      class="user_create"
      v-else
      @submit.prevent="visibilityTable">
      <div class="user_create_block">
        <label for="">Имя</label>
        <input type="text" v-model="user.first_name">
      </div>
      <div class="user_create_block">
        <label for="">Фамилия</label>
        <input type="text" v-model="user.last_name">
      </div>
      <div class="user_create_block">
        <label for="">Отчество</label>
        <input type="text" v-model="user.second_name">
      </div>
      <div class="user_create_block">
        <label for="">Телефон</label>
        <input
          v-model="user.phone"
          inputmode="numeric"
          oninput="this.value = this.value.replace(/\D+/g, '')"
          maxlength="11">
      </div>
      <div class="user_create_block">
        <label for="">Email</label>
        <input type="email" v-model="user.email">
      </div>
      <div class="user_create_block">
        <label for="">Пароль</label>
        <input
          type="password"
          v-model="user.password">
      </div>
      <button
        @click="registrate"
        class="medium_bold_m">Сохранить</button>
    </form>
  </div>
</template>
<script>
export default {
  name: 'StudentPage',
  data () {
    return {
      isTableVisible: false,
      user: {
        first_name: '',
        last_name: '',
        second_name: '',
        phone: '',
        email: '',
        password: '',
        role: 2
      },
      userList: []

    }
  },
  methods: {
    visibilityTable: function () {
      this.isTableVisible = !this.isTableVisible
    },
    clear: function () {
      this.user = {
        first_name: '',
        last_name: '',
        second_name: '',
        phone: '',
        email: '',
        password: '',
        role: 2
      }
    },
    async registrate () {
      await this.$store.dispatch('registrate', this.user)
        .then(() => {
          this.getUserList()
          this.isTableVisible = false
          this.clear()
        })
        .catch(err => {
          console.log(err.response.data)
        })
    },
    async getUserList () {
      this.userList = []
      await this.$store.dispatch('getUserList')
        .then((response) => {
          response.data.map(element => {
            if (element.role === 2) {
              this.userList.push(element)
            }
          })
        })
        .catch(err => {
          console.log(err.response.data)
        })
    }
  },
  mounted () {
    this.getUserList()
  }
}
</script>
