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
            id:'company-02',
            type:'image',
            rect:['36px','3px','60px','9px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"company-02.png",'0px','0px']
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_company-02}": [
            ["style", "top", '3px'],
            ["style", "height", '8.5044899685228px'],
            ["style", "opacity", '0'],
            ["style", "left", '36px'],
            ["style", "width", '59.866664886475px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '14px'],
            ["style", "width", '132px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1311,
         autoPlay: true,
         timeline: [
            { id: "eid4", tween: [ "style", "${_company-02}", "opacity", '1', { fromValue: '0'}], position: 561, duration: 750 }         ]
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
})(jQuery, AdobeEdge, "EDGE-133158734");
