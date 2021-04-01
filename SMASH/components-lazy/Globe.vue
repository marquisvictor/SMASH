<template>
  <div id="globe" class="overflow-hidden"></div>
</template>

<script>
import Globe from 'globe.gl'
import * as THREE from 'three'
export default {
  name: 'Globe',
  props: {
    height: {
      type: Number,
      default: 400,
    },
    width: {
      type: Number,
      default: 400,
    },
    backgroundColor: {
      type: String,
      default: '#000000',
    },
    backgroundImageUrl: {
      type: String,
      default: null,
    },
    globeImageUrl: {
      type: String,
      default: '//unpkg.com/three-globe/example/img/earth-night.jpg',
    },
    bumpImageUrl: {
      type: String,
      default: null,
    },
    showGlobe: {
      type: Boolean,
      default: true,
    },
    showGraticules: {
      type: Boolean,
      default: false,
    },
    showAtmosphere: {
      type: Boolean,
      default: true,
    },
    atmosphereColor: {
      type: String,
      default: 'lightskyblue',
    },
    atmosphereAltitude: {
      type: Number,
      default: 0.15,
    },
    globeMaterial: {
      type: String,
      default: null,
    },
    onGlobeReady: {
      type: Function,
      default: null,
    },
    onGlobeClick: {
      type: Function,
      default: null,
    },
    onGlobeRightClick: {
      type: Function,
      default: null,
    },
    pointOfView: {
      type: Object,
      default: null,
    },
  },
  mounted() {
    if (process.browser) {
      const N = 300
      const gData = [...Array(N).keys()].map(() => ({
        lat: (Math.random() - 0.5) * 180,
        lng: (Math.random() - 0.5) * 360,
        alt: Math.random() * 0.5 + 0.04,
        radius: Math.random() * 2,
        color: ['red', 'white', 'blue', 'green'][Math.round(Math.random() * 3)],
      }))

      const world = Globe()(
        // .pointsData(gData)
        document.getElementById('globe')
      )
        .pointAltitude('size')
        .pointColor('color')
        .width(this.width)
        .height(this.width)
        .backgroundColor(this.backgroundColor)
        .backgroundImageUrl(this.backgroundImageUrl)
        .globeImageUrl(this.globeImageUrl)
        .bumpImageUrl(this.bumpImageUrl)
        .showGlobe(this.showGlobe)
        .showGraticules(this.showGraticules)
        .showAtmosphere(this.showAtmosphere)
        .atmosphereColor(this.atmosphereColor)
        .atmosphereAltitude(this.atmosphereAltitude)
        // .globeMaterial(this.globeMaterial)
        .onGlobeReady(this.onGlobeReady)
        .onGlobeClick(this.onGlobeClick)
        .onGlobeRightClick(this.onGlobeRightClick)
        .pointOfView(this.pointOfView)
        .customLayerData(gData)
        .customThreeObject(
          (d) =>
            new THREE.Mesh(
              new THREE.SphereBufferGeometry(d.radius),
              new THREE.MeshLambertMaterial({ color: d.color })
            )
        )
        .customThreeObjectUpdate((obj, d) => {
          Object.assign(obj.position, world.getCoords(d.lat, d.lng, d.alt))
        })

      const globeMaterial = world.globeMaterial()
      globeMaterial.bumpScale = 10
      new THREE.TextureLoader().load(
        '//unpkg.com/three-globe/example/img/earth-water.png',
        (texture) => {
          globeMaterial.specularMap = texture
          globeMaterial.specular = new THREE.Color('grey')
          globeMaterial.shininess = 15
        }
      )

      setTimeout(() => {
        const directionalLight = world
          .scene()
          .children.find((obj3d) => obj3d.type === 'DirectionalLight')
        directionalLight && directionalLight.position.set(1, 1, 1)
      })
      ;(function moveSpheres() {
        gData.forEach((d) => (d.lat += 0.2))
        world.customLayerData(world.customLayerData())
        requestAnimationFrame(moveSpheres)
      })()
    }
  },
}
</script>
