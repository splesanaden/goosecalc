var nodeSlicer = require("node-slic3r");
console.log(process.argv.slice);
var options = {
  inputFile: process.argv.slice(2)[0],
  outputDirectory: "./output",
  outputFile: "output.gcode",
  // For more options check out the configSchema.yaml file
};

nodeSlicer.render(options, function (error, bufferData) {
  if (error) console.error(error.message);
  else console.log(bufferData.toString("utf8"));
});
