<template>
  <div>
    <div
      class="arrow">
      <svg @click="reset" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M17.0144 3.53126C16.4843 2.8946 15.5385 2.80818 14.9019 3.33823L7.73399 9.3058C6.05399 10.7045 6.05304 13.2839 7.73201 14.6838L14.9217 20.6785C15.558 21.209 16.5038 21.1233 17.0344 20.487C17.5649 19.8508 17.4791 18.9049 16.8429 18.3744L10.034 12.3796C9.79414 12.1796 9.79428 11.8112 10.0343 11.6114L16.8213 5.64378C17.458 5.11373 17.5444 4.16793 17.0144 3.53126Z" fill="#004DE7"/>
      </svg>
      <p @click="reset">Назад</p>
    </div>
    <div class="test">
      <div
        class="test_block"
        v-for="(item, index) in test"
        :key="index">
        <p class="medium_bold_m">{{index + 1}}. {{item.q}}</p>
        <ul class="medium_m">
          <li class="border_t">{{item.a1}}</li>
          <li class="border_t">{{item.a2}}</li>
          <li class="border_t">{{item.a3}}</li>
          <li class="border_t">{{item.a4}}</li>
        </ul>
      </div>
      <button
        class="medium_s">
        Закончить тест
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FourthTest',
  data () {
    return {
      test: [{
        q: `${this.$t('tests_71')}`,
        a1: `${this.$t('tests_72')}`,
        a2: `${this.$t('tests_73')}`,
        a3: `${this.$t('tests_74')}`,
        a4: `${this.$t('tests_75')}`
      },
      {
        q: `${this.$t('tests_76')}`,
        a1: `${this.$t('tests_77')}`,
        a2: `${this.$t('tests_78')}`,
        a3: `${this.$t('tests_79')}`,
        a4: `${this.$t('tests_80')}`
      },
      {
        q: `${this.$t('tests_66')}`,
        a1: `${this.$t('tests_67')}`,
        a2: `${this.$t('tests_68')}`,
        a3: `${this.$t('tests_69')}`,
        a4: `${this.$t('tests_70')}`
      },
      {
        q: `${this.$t('tests_56')}`,
        a1: `${this.$t('tests_57')}`,
        a2: `${this.$t('tests_58')}`,
        a3: `${this.$t('tests_59')}`,
        a4: `${this.$t('tests_60')}`
      },
      {
        q: `${this.$t('tests_46')}`,
        a1: `${this.$t('tests_47')}`,
        a2: `${this.$t('tests_48')}`,
        a3: `${this.$t('tests_49')}`,
        a4: `${this.$t('tests_50')}`
      }]
    }
  },
  methods: {
    reset: function () {
      this.$emit('reset-test')
    }
  }
}
</script>
