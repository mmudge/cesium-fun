<template>
  <v-app>
    <v-app-bar app color="white">
      <h1>Fly around the world!</h1>
      <v-spacer></v-spacer>

      <v-select
        :items="destinations"
        v-model="selectedDestination"
        label="Destinations"
        item-text="name"
        :return-object="true"
        hide-details
        outlined
      >
      </v-select>

      <v-btn>
        <span class="mr-2">Fly to somewhere</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <div id="cesiumContainer"></div>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'
import * as Cesium from 'cesium'
import 'cesium/Build/Cesium/Widgets/widgets.css'

//@ts-ignore
window.CESIUM_BASE_URL = '/'
Cesium.Ion.defaultAccessToken =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI3YjY3NzgxNy1lMmQzLTRhMTAtYWE4OS0wZDZhOWI4ZjViYTQiLCJpZCI6NDExNTEsImlhdCI6MTYwOTgxMzQ2OH0.D7NAHLM5ymorNNnPUigcLbhSjBLQQXfMmYaGj91cMrI'

@Component
export default class App extends Vue {
  viewer: any | null = null

  destinations: any[] = [
    { name: 'Los Angeles', coords: [34.052235, -118.243683] },
    { name: 'San Fransisco', coords: [37.7749, -122.4194] },
    { name: 'Amsterdam', coords: [52.3676, 4.9041] },
    { name: 'Toyko', coords: [35.6804, 139.769] },
    { name: 'New York', coords: [40.7128, -74.006] },
    // { name: 'Los Angeles', coords: [34.052235, -118.243683]},
    // { name: 'Los Angeles', coords: [34.052235, -118.243683]},
  ]

  selectedDestination: any | null = null

  @Watch('selectedDestination')
  onSelectedDestinationChanged(newDestination: any) {
    console.log('new destination watcher', newDestination)
    if (newDestination) {
      console.log('selected destination watcher', newDestination)
      this.flyToDestination(newDestination)
    }
  }

  // ams 52.3676° N, 4.9041° E
  // japan 35.6804° N, 139.7690° E
  // ny 40.7128° N, 74.0060° W

  mounted() {
    const viewer = new Cesium.Viewer('cesiumContainer', {
      terrainProvider: Cesium.createWorldTerrain(),
    })

    this.viewer = viewer

    const laCoords = [34.052235, -118.243683]

    const buildingTileset = viewer.scene.primitives.add(Cesium.createOsmBuildings())
    // viewer.camera.flyTo({
    //   destination: Cesium.Cartesian3.fromDegrees(-122.4175, 37.655, 400),
    //   orientation: {
    //     heading: Cesium.Math.toRadians(0.0),
    //     pitch: Cesium.Math.toRadians(-15.0),
    //   },
    // })

    // viewer.camera.flyTo({
    //   destination: Cesium.Cartesian3.fromDegrees(laCoords[1], laCoords[0], 400),
    //   orientation: {
    //     heading: Cesium.Math.toRadians(0.0),
    //     pitch: Cesium.Math.toRadians(-15.0),
    //   },
    // })

    // viewer.camera.flyTo({
    //   destination: Cesium.Cartesian3.fromDegrees(this.destinations[1].coords[1], this.destinations[1].coords[0], 400),
    //   orientation: {
    //     heading: Cesium.Math.toRadians(0.0),
    //     pitch: Cesium.Math.toRadians(-15.0),
    //   },
    // })

    // viewer.camera.flyTo({
    //   destination: Cesium.Cartesian3.fromDegrees(this.destinations[2].coords[1], this.destinations[2].coords[0], 400),
    //   orientation: {
    //     heading: Cesium.Math.toRadians(0.0),
    //     pitch: Cesium.Math.toRadians(-15.0),
    //   },
    // })

    viewer.camera.flyTo({
      destination: Cesium.Cartesian3.fromDegrees(this.destinations[4].coords[1], this.destinations[4].coords[0], 400),
      orientation: {
        heading: Cesium.Math.toRadians(0.0),
        pitch: Cesium.Math.toRadians(-15.0),
      },
    })
  }

  flyToDestination(destination: any) {
    this.viewer.camera.flyTo({
      destination: Cesium.Cartesian3.fromDegrees(destination.coords[1], destination.coords[0], 400),
      orientation: {
        heading: Cesium.Math.toRadians(0.0),
        pitch: Cesium.Math.toRadians(-15.0),
      },
    })
  }
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
