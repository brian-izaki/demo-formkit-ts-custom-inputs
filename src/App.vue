<script setup lang="ts">
async function submit() {
  await new Promise((r) => setTimeout(r, 1000));
  alert('Submitted! 🎉');
}
</script>

<template>
  <div class="bg-white rounded-xl shadow-xl p-8 mx-auto my-16 max-w-[450px]">
    <img src="https://pro.formkit.com/logo.svg" alt="FormKit Logo" width="244" height="50" class="mx-auto mb-8 w-48" />
    <FormKit type="form" #default="{ value }" @submit="submit">
      <!-- here is the custom input... -->
      <FormKit type="custom-example" name="customInput" label="Insert code" help="What do people call you?"
        test-id="teste" />

      <FormKit type="text" name="name" label="Name" help="What do people call you?" />

      <pre class="font-mono text-sm p-4 bg-slate-100 mb-4">{{ value }}</pre>
    </FormKit>
  </div>
</template>
