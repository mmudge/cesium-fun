<template>
  <div>
    <!-- <div id="cesiumContainer"></div> -->
  </div>
</template>

<script>
import { Component, Prop, Vue } from 'vue-property-decorator'
import * as Cesium from 'cesium'
import 'cesium/Build/Cesium/Widgets/widgets.css'

// window.CESIUM_BASE_URL = '/'
// Cesium.Ion.defaultAccessToken =
//   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI3YjY3NzgxNy1lMmQzLTRhMTAtYWE4OS0wZDZhOWI4ZjViYTQiLCJpZCI6NDExNTEsImlhdCI6MTYwOTgxMzQ2OH0.D7NAHLM5ymorNNnPUigcLbhSjBLQQXfMmYaGj91cMrI'

@Component
export default class Home extends Vue {
  // mounted() {
  //   const viewer = new Cesium.Viewer('cesiumContainer', {
  //     terrainProvider: Cesium.createWorldTerrain(),
  //   })
  //   const buildingTileset = viewer.scene.primitives.add(Cesium.createOsmBuildings())
  //   viewer.camera.flyTo({
  //     destination: Cesium.Cartesian3.fromDegrees(-122.4175, 37.655, 400),
  //     orientation: {
  //       heading: Cesium.Math.toRadians(0.0),
  //       pitch: Cesium.Math.toRadians(-15.0),
  //     },
  //   })
  // }
}
</script>

<style lang="css">
#cesiumContainer {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
}
</style>
