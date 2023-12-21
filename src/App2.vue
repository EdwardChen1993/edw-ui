<script setup lang="ts">
import { reactive, ref } from 'vue';
import type { RuleItem } from 'async-validator'
import Form from './components/Form/Form.vue'
import FormItem from './components/Form/FormItem.vue'
import Input from './components/Input/Input.vue'
import Button from './components/Button/Button.vue'
const formRef = ref()
const model = reactive({
  email: '',
  password: '',
  confirmPassword: ''
})
const rules = {
  email: [{ type: 'email', required: true, trigger: 'blur' }, { type: 'string', required: true, trigger: 'input' }],
  password: [{ type: 'string', required: true, trigger: 'blur' }],
  confirmPassword: [{ type: 'string', required: true, trigger: 'blur' }, {
    validator: (rule: RuleItem, value: any) => value === model.password,
    trigger: 'blur',
    message: '两个密码必须相同'
  }],
}

const submit = async () => {
  try {
    await formRef.value.validate()
    console.log('pass!')
  } catch (error) {
    console.log(error)
  }
}

const reset = () => {
  // formRef.value.clearValidate()
  formRef.value.resetFields()
}
</script>
<template>
  <div>
    <Form ref='formRef' :model="model" :rules="rules">
      <FormItem label="email" prop="email">
        <Input v-model="model.email" />
      </FormItem>
      <FormItem label="password" prop="password">
        <template #label="{ label }">{{ label }}</template>
        <Input type="password" v-model="model.password" />
      </FormItem>
      <FormItem label="confirmPassword" prop="confirmPassword">
        <template #label="{ label }">{{ label }}</template>
        <Input type="password" v-model="model.confirmPassword" />
      </FormItem>
      <div>
        <Button type="primary" @click.prevent="submit">Submit</Button>
        <Button @click.prevent="reset">Reset</Button>
      </div>
    </Form>
  </div>
</template>
<style></style>