<template>
  <div>
    <div
        class="border px-5 py-5 w-max h-max rounded-lg shadow-lg absolute inset-x-1/2 inset-y-1/2 transform -translate-y-1/2 -translate-x-1/2">
      <h1 class="font-bold text-2xl">Sign up</h1>
      <form class="flex flex-col">
        <label>
          <span>Name</span>
          <input type="text" name="name" v-model="name">
          <span>{{nameError}}</span>
        </label>
        <label>
          <span>Email</span>
          <input type="email" name="email" v-model="email">
          {{emailError}}
        </label>
        <label>
          <span>Password</span>
          <input type="password" name="password" v-model="password">
          <span>{{passwordError}}</span>
        </label>
        <label>
          <span>Confirm password</span>
          <input type="password" name="confirmPassword" v-model="confirmPassword">
          <span>{{confirmPasswordError}}</span>
        </label>
      </form>
      <p class="text-red-400">An error occurred.</p>
      <button class="button-primary mt-2">Sign up</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useField, useForm } from 'vee-validate';
import * as yup from 'yup';

const schema = {
  name: yup.string().required('Name is required'),
  email: yup.string().email().required(),
  password: yup.string().min(8).required(),
  confirmPassword: yup.string().oneOf([yup.ref('password')], 'Passwords must match').required(),
};

useForm({
  validationSchema: schema,
});

const {value: name, errorMessage: nameError} = useField('name');
const {value: email, errorMessage: emailError} = useField('email');
const {value: password, errorMessage: passwordError} = useField('password');
const {value: confirmPassword, errorMessage: confirmPasswordError} = useField('confirmPassword');

</script>

<script lang="ts">
export default {
  layout: 'guest'
};
</script>

<style scoped>
input {
  @apply border border-dark-600 rounded-lg px-4 py-2 w-75;
}

label {
  @apply flex flex-col mt-2;
}
</style>