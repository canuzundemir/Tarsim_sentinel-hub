//VERSION=3
function setup() {
  return{
    input: [{
      bands: ["B03", "B08"],
      units: "DN"
    }],
    output: {
      id: "default",
      bands: 1,
      sampleType: SampleType.FLOAT32
    }
  }
}
function evaluatePixel(sample) {
  let ndwi = (sample.B03 - sample.B08) / (sample.B08 + sample.B03)
  return [ ndwi ]
}
