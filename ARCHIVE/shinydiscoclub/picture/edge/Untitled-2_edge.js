/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.0.185",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'shinylogo',
            type:'image',
            rect:['7px','18px','367px','134px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"shinylogo.png",'0px','0px']
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["style", "width", '380px'],
            ["style", "height", '170px'],
            ["style", "overflow", 'hidden']
         ],
         "${_shinylogo}": [
            ["style", "top", '18px'],
            ["style", "height", '134.2668762207px'],
            ["style", "opacity", '0'],
            ["style", "left", '7px'],
            ["style", "width", '366.97607421875px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1286.19140625,
         autoPlay: true,
         timeline: [
            { id: "eid4", tween: [ "style", "${_shinylogo}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 1286 }         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-67699433");
