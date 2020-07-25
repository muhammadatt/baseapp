<template>
<div>
    <h1>This is your Dashboard</h1>
    <p>Hi, there {{ username }}</p>
</div>
</template>



<script>
import { mapState } from 'vuex'

export default {
   
  computed: mapState({
    username: state => state.user.user.name
  }),
}
</script>

<style>

</style>