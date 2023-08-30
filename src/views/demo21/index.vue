<template>
  <div class="three"></div>
  <p>123123123</p>
</template>

<script setup>
</script>

<style lang="scss" scoped>
@property --property-name {
  syntax: "<color>";
  inherits: false;
  initial-value: red;
}

p {
  color: var(--property-name);
}
p:hover {
  --property-name: green;
}

$count: 400;
$sqrt: 20;
$per: calc(100% / $sqrt);
$width: 300px;
$perWid: 15;

@for $i from 1 to ($count + 1) {
  @property --m-#{$i} {
    syntax: "<number>";
    initial-value: 1;
    inherits: false;
  }
}
@function bgSet($n) {
  $bg: radial-gradient(rgba(0, 0, 0, var(--m-1)), rgba(0, 0, 0, var(--m-1)));

  @for $i from 2 through $n {
    $bg: $bg,
      radial-gradient(
        rgba(0, 0, 0, var(--m-#{$i})),
        rgba(0, 0, 0, var(--m-#{$i}))
      );
  }

  @return $bg;
}
@function positionSet($n) {
  $bgPosition: ();

  @for $i from 0 through ($n) {
    @for $j from 0 through ($n - 1) {
      $bgPosition: $bgPosition, #{$i * $perWid}px #{$j * $perWid}px;
    }
  }

  @return $bgPosition;
}
@function transitionSet($n) {
  $transition: --m-1 0.1s 0.1s;

  @for $i from 1 through $n {
    $transition: $transition, --m-#{$i} #{random(500)}ms #{random(500)}ms;
  }

  @return $transition;
}
div {
  width: $width;
  height: $width;
  background: url("./bg.png");
  mask: bgSet($count);
  mask-size: $per $per;
  mask-repeat: no-repeat;
  mask-position: positionSet($sqrt);
  -webkit-mask: bgSet($count);
  -webkit-mask-size: $per $per;
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-position: positionSet($sqrt);
  transition: transitionSet($count);
}
div:hover {
  @for $i from 1 through $count {
    --m-#{$i}: 0;
  }
}
</style>
