<template>
  <li>
      {{item}}
    <!-- <slot> -->
      <!-- NOTE: 등록하는 곳에서 정의할 화면 영역 -->
    <!-- </slot> -->
    <!-- ㅇㄴㅁㅇㅁㄴ -->
  </li>
</template>

<script>
export default {
    props : {
        item : String
    }
}
</script>
