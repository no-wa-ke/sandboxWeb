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
            id:'k2dlogo-01',
            type:'image',
            rect:['21px','271px','171px','51px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"k2dlogo-01.png",'0px','0px']
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["style", "width", '212px'],
            ["style", "height", '345px'],
            ["style", "overflow", 'hidden']
         ],
         "${_k2dlogo-01}": [
            ["style", "top", '-151px'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '51.416667938232px'],
            ["style", "left", '21px'],
            ["style", "width", '170.66550242301px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1000,
         autoPlay: true,
         timeline: [
            { id: "eid27", tween: [ "style", "${_k2dlogo-01}", "top", '271.43px', { fromValue: '-151px'}], position: 0, duration: 1000, easing: "easeOutBounce" },
            { id: "eid32", tween: [ "transform", "${_k2dlogo-01}", "rotateZ", '-11deg', { fromValue: '0deg'}], position: 369, duration: 84, easing: "easeOutBounce" },
            { id: "eid46", tween: [ "transform", "${_k2dlogo-01}", "rotateZ", '0deg', { fromValue: '-11deg'}], position: 453, duration: 297, easing: "easeOutBounce" }         ]
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
})(jQuery, AdobeEdge, "EDGE-131691391");
