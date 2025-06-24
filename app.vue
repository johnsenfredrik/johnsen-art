<template>
  <div class="h-screen bg-solnedgang bg-cover bg-center">
    <div class="container mx-10 pt-8 sm:mx-auto font-light">
      <header class="flex items-center">
        <NuxtImg src="/img/ja-big.png" sizes="80px sm:100px md:120px" />
        <div class="grow text-right pr-10">
          <div class="font-thin text-4xl">Johnsen Art</div>
          <div class="font-thin text-2xl">Dikt & Malerier</div>
        </div>
      </header>
      <main class=""></main>
    </div>
  </div>
</template>

<script setup lang="ts">
  useSeoMeta({
    robots: 'index, follow',
    title: 'Johnsen Art',
    ogTitle: 'Johnsen Art',
    description: 'Dikt og malerier for enhver smak',
    ogDescription: 'Dikt og malerier for enhver smak',
    ogImage: 'https://johnsen.art/img/solnedgang.jpg',
    twitterCard: 'summary_large_image',
  })
</script>
