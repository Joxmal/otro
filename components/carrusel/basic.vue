<template>
  <div>
    <swiper class="black-slider border h-80 cursor-pointer rounded-xl"
      :modules="[SwiperAutoplay, SwiperEffectCreative,SwiperNavigation]"
      :lazy="true"
      :breakpoints= "{
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 2,
        },
      }"
      :navigation="{
        enabled: true,
      }"
      :autoplay="{
        delay: 3000,
        disableOnInteraction: true,
      }"
      :effect="'creative'"
      :loop="true"
      :creative-effect="{
        prev: {
          shadow: true,
          translate: ['-20%', 0, -1],
        },
        next: {
          translate: ['100%', 0, 0],
        },
      }">
      <swiper-slide
        class="glass h-full"
        v-for="(image, index) in props.images"
        :key="index">
        <img class="object-contain h-full w-full" :src="image" alt="Imagen" />
        <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup lang="ts">

const props = defineProps({
  images:{
    type: Array as () => string[],
    default: [
    "https://th.bing.com/th/id/OIP.PUKoIDMPwtgUl9SBCil-mwHaG1?rs=1&pid=ImgDetMain",
    "https://ultimasnoticias.com.ve/wp-content/uploads/2021/11/IMG_27112021_152148_768_x_573_pixel.jpg",
    "https://th.bing.com/th/id/OIP.kylTA--ySRdeWPskGKH7WwHaEK?rs=1&pid=ImgDetMain",
    'https://th.bing.com/th/id/OIP.3nwtc4DKMx5CK-84VY4tTQHaFj?rs=1&pid=ImgDetMain',
    'https://th.bing.com/th/id/OIP.3nwtc4DKMx5CK-84VY4tTQHaFj?rs=1&pid=ImgDetMain',
    ]
    
  }
})

const swiperOptions={
  modules: [SwiperAutoplay, SwiperEffectCreative,SwiperNavigation],
  navigation:{
    nabled: true,
  },
  "slides-per-view":1,
  autoplay:{
    delay: 3000,
    disableOnInteraction: true,
  },
  effect:"creative",
  loop:true,
    "creative-effect":{
      prev: {
        shadow: false,
        translate: ['-20%', 0, -1],
      },
      next: {
        translate: ['100%', 0, 0],
      }
    }
  }
</script>

<style scoped>
.black-slider{
    user-select: none;
    font-weight: bold;
    --swiper-navigation-size: 45px;
    --swiper-navigation-top-offset: 50%;
    --swiper-navigation-sides-offset: 15px;
    --swiper-navigation-color: #88a2bd;
}


</style>
