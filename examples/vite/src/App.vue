<template>
  <div class="container">
    <h1>Custom theme example (on demand)</h1>

    <bv-button @click="onClick">Default</bv-button>
    <bv-button type="primary" @click="onClick">Primary</bv-button>
    <bv-button type="success" @click="onClick">Success</bv-button>
    <bv-button type="info" @click="onClick">Info</bv-button>
    <bv-button type="warning" @click="onClick">Warning</bv-button>
    <bv-button type="danger" @click="onClick">Danger</bv-button>

    <!--    <el-radio-group v-model="radioVal">-->
    <!--      <el-radio-button label="New York"></el-radio-button>-->
    <!--      <el-radio-button label="Washington"></el-radio-button>-->
    <!--      <el-radio-button label="Los Angeles"></el-radio-button>-->
    <!--      <el-radio-button label="Chicago"></el-radio-button>-->
    <!--    </el-radio-group>-->

    <!--    <div>-->
    <!--      <el-switch v-model="switchVal"></el-switch>&nbsp;-->
    <!--      <el-switch-->
    <!--        v-model="switchVal"-->
    <!--        active-color="#13ce66"-->
    <!--        inactive-color="#ff4949"-->
    <!--      />-->
    <!--    </div>-->

    <!--    <div>-->
    <!--      <el-select>-->
    <!--        <el-option value="test">test</el-option>-->
    <!--      </el-select>-->
    <!--      &nbsp;-->
    <!--      <el-date-picker></el-date-picker>-->
    <!--    </div>-->

    <!--    <el-slider v-model="sliderVal"></el-slider>-->

    <p>
      It is a example built by vite.&nbsp; More info see
      <a
        href="https://github.com/bootstrap-vue-plus/unplugin-bootstrap-vue-plus"
        target="_blank"
        >unplugin-bootstrap-vue-plus</a
      >.
    </p>
  </div>
</template>

<script setup lang="ts">
// import { ref } from 'vue'
import { BvButton } from 'bootstrap-vue-plus'

// const radioVal = ref('New York')
// const switchVal = ref(true)
// const sliderVal = ref(50)

function onClick() {
  // ElNotification({
  //   type: 'success',
  //   title: '已成功发送邮件',
  //   message: '验证码区分大小写，有效期5分钟',
  //   duration: 3000,
  // })
}
</script>
