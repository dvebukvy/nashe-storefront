<template>
  <yandex-map style="width: 100%; height: 100%;" :coords="coords" :zoom="10" @click="onClick">
    <ymap-marker
      :coords="coords"
      marker-id="123"      
      :icon="markerIcon"
      :balloon-template="balloonTemplate"
    />
  </yandex-map>
</template>

<script>
export default {
  props: ['map'],
  data() {
    return {
      // coords: this.map.coords,
      coords: [54.82896654088406, 39.831893822753904],
      markerIcon: {
        layout: 'default#image',
        imageHref: '/icons/pin.svg',
        imageSize: [40, 40],
        imageOffset: [-20, -40],        
        // contentOffset: [0, 15],        
      },
    }
  },
  computed: {
    balloonTemplate() {
      return `
        
        <p>I am here: ${this.coords}</p>
      `
    }
  },
  methods: {
    onClick(e) {
      this.coords = e.get('coords')
    },
  },  
}
</script>