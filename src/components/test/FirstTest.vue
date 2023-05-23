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
      <div class="test_block">
        <p class="medium_bold_m">1. {{$t('tests_1')}}</p>
        <ul class="medium_m">
          <li
            :class="[isResultShow ? 'border_success' : 'border_t', !isResultShow && studentsAnswer1 === 1 ? 'border_active' : 'border_t']"
            @click="selectTest(1)">{{$t('tests_2')}}</li>
          <li
            :class="[isResultShow && studentsAnswer1 === 2 ? 'border_fail' : 'border_t', !isResultShow && studentsAnswer1 === 2 ? 'border_active' : 'border_t']"
            @click="selectTest(2)">{{$t('tests_3')}}</li>
          <li
            :class="[isResultShow && studentsAnswer1 === 3 ? 'border_fail' : 'border_t', !isResultShow && studentsAnswer1 === 3 ? 'border_active' : 'border_t']"
            @click="selectTest(3)">{{$t('tests_4')}}</li>
          <li
            :class="[isResultShow && studentsAnswer1 === 4 ? 'border_fail' : 'border_t', !isResultShow && studentsAnswer1 === 4 ? 'border_active' : 'border_t']"
            @click="selectTest(4)">{{$t('tests_5')}}</li>
        </ul>
      </div>
      <div class="test_block">
        <p class="medium_bold_m">2. {{$t('tests_6')}}</p>
        <ul class="medium_m">
          <li
            :class="[isResultShow && studentsAnswer2 === 5 ? 'border_fail' : 'border_t', !isResultShow && studentsAnswer2 === 5 ? 'border_active' : 'border_t']"
            @click="selectTest(5)">{{$t('tests_7')}}</li>
          <li
            :class="[isResultShow ? 'border_success' : 'border_t', !isResultShow && studentsAnswer2 === 6 ? 'border_active' : 'border_t']"
            @click="selectTest(6)">{{$t('tests_8')}}</li>
          <li
            :class="[isResultShow && studentsAnswer2 === 7 ? 'border_fail' : 'border_t', !isResultShow && studentsAnswer2 === 7 ? 'border_active' : 'border_t']"
            @click="selectTest(7)">{{$t('tests_9')}}</li>
          <li
            :class="[isResultShow && studentsAnswer2 === 8 ? 'border_fail' : 'border_t', !isResultShow && studentsAnswer2 === 8 ? 'border_active' : 'border_t']"
            @click="selectTest(8)">{{$t('tests_10')}}</li>
        </ul>
      </div>
      <div class="test_block">
        <p class="medium_bold_m">3. {{$t('tests_21')}}</p>
        <ul class="medium_m">
          <li
            :class="[isResultShow && studentsAnswer3 === 9 ? 'border_fail' : 'border_t', !isResultShow && studentsAnswer3 === 9 ? 'border_active' : 'border_t']"
            @click="selectTest(9)">{{$t('tests_24')}}</li>
          <li
            :class="[isResultShow && studentsAnswer3 === 10 ? 'border_fail' : 'border_t', !isResultShow && studentsAnswer3 === 10 ? 'border_active' : 'border_t']"
            @click="selectTest(10)">{{$t('tests_23')}}</li>
          <li
            :class="[isResultShow ? 'border_success' : 'border_t', !isResultShow && studentsAnswer3 === 11 ? 'border_active' : 'border_t']"
            @click="selectTest(11)">{{$t('tests_22')}}</li>
          <li
            :class="[isResultShow && studentsAnswer3 === 12 ? 'border_fail' : 'border_t', !isResultShow && studentsAnswer3 === 12 ? 'border_active' : 'border_t']"
            @click="selectTest(12)">{{$t('tests_25')}}</li>
        </ul>
      </div>
      <div class="test_block">
        <p class="medium_bold_m">4. {{$t('tests_26')}}</p>
        <ul class="medium_m">
          <li
            :class="[isResultShow && studentsAnswer4 === 13 ? 'border_fail' : 'border_t', !isResultShow && studentsAnswer4 === 13 ? 'border_active' : 'border_t']"
            @click="selectTest(13)">{{$t('tests_27')}}</li>
          <li
            :class="[isResultShow && studentsAnswer4 === 14 ? 'border_fail' : 'border_t', !isResultShow && studentsAnswer4 === 14 ? 'border_active' : 'border_t']"
            @click="selectTest(14)">{{$t('tests_28')}}</li>
          <li
            :class="[isResultShow ? 'border_success' : 'border_t', !isResultShow && studentsAnswer4 === 15 ? 'border_active' : 'border_t']"
            @click="selectTest(15)">{{$t('tests_30')}}</li>
          <li
            :class="[isResultShow && studentsAnswer4 === 16 ? 'border_fail' : 'border_t', !isResultShow && studentsAnswer4 === 16 ? 'border_active' : 'border_t']"
            @click="selectTest(16)">{{$t('tests_29')}}</li>
        </ul>
      </div>
      <div class="test_block">
        <p class="medium_bold_m">5. {{$t('tests_31')}}</p>
        <ul class="medium_m">
          <li
            :class="[isResultShow ? 'border_success' : 'border_t', !isResultShow && studentsAnswer5 === 17 ? 'border_active' : 'border_t']"
            @click="selectTest(17)">{{$t('tests_34')}}</li>
          <li
            :class="[isResultShow && studentsAnswer5 === 18 ? 'border_fail' : 'border_t', !isResultShow && studentsAnswer5 === 18 ? 'border_active' : 'border_t']"
            @click="selectTest(18)">{{$t('tests_32')}}</li>
          <li
            :class="[isResultShow && studentsAnswer5 === 19 ? 'border_fail' : 'border_t', !isResultShow && studentsAnswer5 === 19 ? 'border_active' : 'border_t']"
            @click="selectTest(19)">{{$t('tests_33')}}</li>
          <li
            :class="[isResultShow && studentsAnswer5 === 20 ? 'border_fail' : 'border_t', !isResultShow && studentsAnswer5 === 20 ? 'border_active' : 'border_t']"
            @click="selectTest(20)">{{$t('tests_35')}}</li>
        </ul>
      </div>
      <button
        @click="finishTest"
        v-if="!isResultShow"
        class="medium_s">
        Закончить тест
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FirstTest',
  data () {
    return {
      isResultShow: false,
      studentsAnswer1: '',
      studentsAnswer2: '',
      studentsAnswer3: '',
      studentsAnswer4: '',
      studentsAnswer5: ''
    }
  },
  methods: {
    reset: function () {
      this.$emit('reset-test')
    },
    selectTest: function (index) {
      if (index === 1 || index === 2 || index === 3 || index === 4) {
        this.studentsAnswer1 = index
      } else if (index === 5 || index === 6 || index === 7 || index === 8) {
        this.studentsAnswer2 = index
      } else if (index === 9 || index === 10 || index === 11 || index === 12) {
        this.studentsAnswer3 = index
      } else if (index === 13 || index === 14 || index === 15 || index === 16) {
        this.studentsAnswer4 = index
      } else if (index === 17 || index === 18 || index === 19 || index === 20) {
        this.studentsAnswer5 = index
      }
    },
    finishTest: function () {
      this.isResultShow = true
    }
  }
}
</script>
