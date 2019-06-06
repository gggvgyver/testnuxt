<template>
  <v-card>
    <v-card-title>
      안녕하세요
    </v-card-title>
    <v-card-text>
      <v-textarea v-model="text" />
    </v-card-text>
    <v-card-actions>
      <v-btn @click="test">테스트</v-btn>
    </v-card-actions>
    <v-card-actions>
      <v-btn @click="hello">헬로우</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      text: '테스트값'
    }
  },
  methods: {
    async test() {
      this.text = '클릭했을때 변경된값: 테스트'
      const r = await this.$axios.get('/api')
      this.text = r.data
    },
    async hello() {
      this.text = '클릭했을때 변경된값: 헬로우'
      const r = await this.$axios.get('/api/hello')
      this.text = r.data
    }
  }
}
</script>

<style></style>
