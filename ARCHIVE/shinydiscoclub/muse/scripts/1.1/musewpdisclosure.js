/*
 ADOBE CONFIDENTIAL
 ___________________

 Copyright 2012 Adobe Systems Incorporated
 All Rights Reserved.

 NOTICE:  All information contained herein is, and remains
 the property of Adobe Systems Incorporated and its suppliers,
 if any.  The intellectual and technical concepts contained
 herein are proprietary to Adobe Systems Incorporated and its
 suppliers and may be covered by U.S. and Foreign Patents,
 patents in process, and are protected by trade secret or copyright law.
 Dissemination of this information or reproduction of this material
 is strictly forbidden unless prior written permission is obtained
 from Adobe Systems Incorporated.
*/
(function(b,c,a){a.Plugins.TabbedPanelsPlugin={defaultOptions:{widgetClassName:"TabbedPanelsWidget",tabClassName:"TabbedPanelsTab",tabHoverClassName:"TabbedPanelsTabHover",tabDownClassName:"TabbedPanelsTabDown",tabActiveClassName:"TabbedPanelsTabSelected",panelClassName:"TabbedPanelsContent",panelActiveClassName:"TabbedPanelsContentVisible",defaultPanel:0,canCloseAll:!1},initialize:function(a,f){var g=this;b.extend(f,b.extend({},g.defaultOptions,f));c.Widget.Disclosure.DisplayPropertyTransitionPlugin.initialize(a,
f);a.bind("attach-behavior",function(){g._attachBehavior(a)})},_attachBehavior:function(a){var b=a.tabs?a.tabs.$element:null;if(b&&(b.first().addClass("TabbedPanelsTabFirst"),b.last().addClass("TabbedPanelsTabLast"),a.options.event!=="click"))b.on(a.options.event,function(){a.tabs.selectTab(this)})}};a.Plugins.AccordionPlugin={defaultOptions:{widgetClassName:"AccordionWidget",tabClassName:"AccordionPanelTab",tabHoverClassName:"AccordionPanelTabHover",tabDownClassName:"AccordionPanelTabDown",tabActiveClassName:"AccordionPanelTabOpen",
panelClassName:"AccordionPanelContent",panelActiveClassName:"AccordionPanelContentActive",defaultPanel:0,canCloseAll:!1,transitionDirection:"vertical"},initialize:function(a,f){var g=this;b.extend(f,b.extend({},g.defaultOptions,f));f.defaultIndex=f.defaultPanel;f.toggleStateEnabled=f.canCloseAll;c.Widget.Disclosure.AccordionTransitionPlugin.initialize(a,f);a.bind("transform-markup",function(){g._transformMarkup(a)});a.bind("attach-behavior",function(){g._attachBehavior(a)})},_transformMarkup:function(a){var b=
a.$element[0];c.scopedFind(b,".AccordionPanelContent",a.options.widgetClassName,b).removeClass("AccordionPanelContent colelem").wrap('<div class="AccordionPanelContent colelem"><div class="AccordionPanelContentClip"></div></div>').closest(".AccordionPanelContent").css({width:"100%",position:"relative"})},_attachBehavior:function(a){var b=a.$element[0],a=a.options,g=0,i=a.transitionDirection==="vertical",h=i?"offsetWidth":"offsetHeight",j=i?"width":"height";c.scopedFind(b,".AccordionPanel",a.widgetClassName,
b).each(function(){g=g<this[h]?this[h]:g}).each(function(){g>this[h]&&(this.style[j]=g+"px")})}};c.Widget.TabbedPanels.prototype.defaultPlugins=[a.Plugins.TabbedPanelsPlugin];c.Widget.Accordion.prototype.defaultPlugins=[a.Plugins.AccordionPlugin]})(jQuery,WebPro,Muse,window);
