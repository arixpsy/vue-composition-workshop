<template>
  <NLayout content-style="padding: 2rem 5rem;min-height: 100vh;">
    <NLayoutContent content-style="max-width: 1200px;margin: auto;">
      <slot></slot>
    </NLayoutContent>
  </NLayout>
</template>

<script>
import {
  NLayoutContent,
  NLayout
} from "naive-ui";

export default {
  components: {
    NLayoutContent,
    NLayout
  }
}
</script>