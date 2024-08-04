<script setup lang="ts">
import { FormKitFrameworkContext } from '@formkit/core';

interface Props {
  context: FormKitFrameworkContext,
}

const props = defineProps<Props>();

function handleInput(e: Event) {
  props.context.node.input((e?.target as HTMLInputElement).value);
}
</script>

<template>
  <input :data-test-id="props.context?.testId" @input="handleInput" :value="props.context._value"
    class="border border-gray-700" />
</template>
