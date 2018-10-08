<template>
    <div>
      Comment Component with this data {{profileName}}
    </div>
</template>

<script>
export default {
  name: 'comment',
  props: {
    profileName: String,
    content: String
  }
}
</script>

<style scoped>

</style>
