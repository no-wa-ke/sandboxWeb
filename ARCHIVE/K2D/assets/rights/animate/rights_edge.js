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
            id:'k2dHP2-11',
            type:'image',
            rect:['47px','5px','152px','9px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"k2dHP2-11.png",'0px','0px']
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["style", "width", '246px'],
            ["style", "height", '207px'],
            ["style", "overflow", 'hidden']
         ],
         "${_k2dHP2-11}": [
            ["style", "top", '212px'],
            ["style", "height", '8.7329069272652px'],
            ["style", "left", '47px'],
            ["style", "width", '151.88877868652px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1500,
         autoPlay: true,
         timeline: [
            { id: "eid4", tween: [ "style", "${_k2dHP2-11}", "top", '5px', { fromValue: '212px'}], position: 750, duration: 750 }         ]
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
})(jQuery, AdobeEdge, "EDGE-133834898");
