//	HYPE.documents["error_all"]

(function HYPE_DocumentLoader() {
	var resourcesFolderName = "error_all_Resources";
	var documentName = "error_all";
	var documentLoaderFilename = "errorall_hype_generated_script.js";

	// find the URL for this script's absolute path and set as the resourceFolderName
	try {
		var scripts = document.getElementsByTagName('script');
		for(var i = 0; i < scripts.length; i++) {
			var scriptSrc = scripts[i].src;
			if(scriptSrc != null && scriptSrc.indexOf(documentLoaderFilename) != -1) {
				resourcesFolderName = scriptSrc.substr(0, scriptSrc.lastIndexOf("/"));
				break;
			}
		}
	} catch(err) {	}

	// load HYPE.js if it hasn't been loaded yet
	if(typeof HYPE == "undefined") {
		if(typeof window.HYPE_DocumentsToLoad == "undefined") {
			window.HYPE_DocumentsToLoad = new Array();
			window.HYPE_DocumentsToLoad.push(HYPE_DocumentLoader);

			var headElement = document.getElementsByTagName('head')[0];
			var scriptElement = document.createElement('script');
			scriptElement.type= 'text/javascript';
			scriptElement.src = resourcesFolderName + '/' + 'HYPE.js';
			headElement.appendChild(scriptElement);
		} else {
			window.HYPE_DocumentsToLoad.push(HYPE_DocumentLoader);
		}
		return;
	}
	
	var attributeTransformerMapping = {"BorderColorRight":"ColorValueTransformer","BackgroundColor":"ColorValueTransformer","BorderWidthBottom":"PixelValueTransformer","WordSpacing":"PixelValueTransformer","BoxShadowXOffset":"PixelValueTransformer","Opacity":"FractionalValueTransformer","BorderWidthRight":"PixelValueTransformer","BorderWidthTop":"PixelValueTransformer","BoxShadowColor":"ColorValueTransformer","BorderColorBottom":"ColorValueTransformer","FontSize":"PixelValueTransformer","BorderRadiusTopRight":"PixelValueTransformer","TextColor":"ColorValueTransformer","Rotate":"DegreeValueTransformer","Height":"PixelValueTransformer","PaddingLeft":"PixelValueTransformer","BorderColorTop":"ColorValueTransformer","Top":"PixelValueTransformer","BackgroundGradientStartColor":"ColorValueTransformer","TextShadowXOffset":"PixelValueTransformer","PaddingTop":"PixelValueTransformer","BackgroundGradientAngle":"DegreeValueTransformer","PaddingBottom":"PixelValueTransformer","PaddingRight":"PixelValueTransformer","Width":"PixelValueTransformer","TextShadowColor":"ColorValueTransformer","BorderColorLeft":"ColorValueTransformer","ReflectionOffset":"PixelValueTransformer","Left":"PixelValueTransformer","BorderRadiusBottomRight":"PixelValueTransformer","LineHeight":"PixelValueTransformer","BoxShadowYOffset":"PixelValueTransformer","ReflectionDepth":"FractionalValueTransformer","BorderRadiusTopLeft":"PixelValueTransformer","BorderRadiusBottomLeft":"PixelValueTransformer","TextShadowBlurRadius":"PixelValueTransformer","TextShadowYOffset":"PixelValueTransformer","BorderWidthLeft":"PixelValueTransformer","BackgroundGradientEndColor":"ColorValueTransformer","BoxShadowBlurRadius":"PixelValueTransformer","LetterSpacing":"PixelValueTransformer"};

var scenes = [{"timelines":{"kTimelineDefaultIdentifier":{"framesPerSecond":30,"animations":[],"identifier":"kTimelineDefaultIdentifier","name":"Main Timeline","duration":0}},"id":"2280590C-B75E-4748-B38B-AD51C8248A5A-2074-00001A6E42C5DB4C","sceneIndex":0,"perspective":"600px","oid":"2280590C-B75E-4748-B38B-AD51C8248A5A-2074-00001A6E42C5DB4C","initialValues":{"A966B051-F464-4A72-954C-53AA54229100-2074-00001AC03051588C":{"Position":"absolute","BackgroundOrigin":"content-box","Left":"50px","Display":"inline","BackgroundImage":"8037653278.gif","Height":"266px","Overflow":"visible","BackgroundSize":"100% 100%","ZIndex":"3","Top":"107px","Width":"500px","TagName":"div"},"3944C14D-0F57-4DCD-A522-C4E2CD3D13D3-2074-00001A92572F7E95":{"PaddingTop":"8px","FontFamily":"Georgia,Times,'Times New Roman',Serif","Position":"absolute","TagName":"div","PaddingRight":"8px","Display":"inline","Left":"165px","Overflow":"visible","ZIndex":"2","FontSize":"16px","TextColor":"#000000","WordWrap":"break-word","WhiteSpaceCollapsing":"preserve","PaddingBottom":"8px","PaddingLeft":"8px","Top":"61px","InnerHTML":"Don't worry, time passes so quickly"},"35168CBC-5A0E-4154-8635-DAE082C3918E-2074-00001A82D3E4D53D":{"PaddingTop":"8px","FontFamily":"Georgia,Times,'Times New Roman',Serif","Position":"absolute","TagName":"div","PaddingRight":"8px","Display":"inline","Left":"173px","Overflow":"visible","ZIndex":"1","FontSize":"16px","TextColor":"#000000","WordWrap":"break-word","WhiteSpaceCollapsing":"preserve","PaddingBottom":"8px","PaddingLeft":"8px","Top":"26px","InnerHTML":"Sorry! We're Underconstruction.&nbsp;"},"AA33446E-EA44-4FA0-96FD-F990C0DEDA37-2122-00001B0380511056":{"PaddingTop":"8px","FontFamily":"'Helvetica Neue',Arial,Helvetica,Sans-Serif","Position":"absolute","InnerHTML":"\u53ea\u4eca\u30e1\u30f3\u30c6\u30ca\u30f3\u30b9\u4e2d\u3002\u30b4\u30e1\u30f3\u30cd\uff01","TagName":"div","PaddingRight":"8px","Display":"inline","Left":"171px","Overflow":"visible","ZIndex":"4","FontSize":"16px","TextColor":"#000000","WordWrap":"break-word","WhiteSpaceCollapsing":"preserve","PaddingBottom":"8px","PaddingLeft":"8px","FontStyle":"italic","Top":"389px"},"926DF254-B7E6-4D97-8B26-319B3496CD8A-2122-00001B12705B8394":{"PaddingTop":"8px","FontFamily":"'Helvetica Neue',Arial,Helvetica,Sans-Serif","Position":"absolute","InnerHTML":"\u3067\u3082\u5927\u4e08\u592b\u3001\u6642\u304c\u7d4c\u3064\u306e\u306f\u65e9\u3044\u3082\u3093\u3055","TagName":"div","PaddingRight":"8px","Display":"inline","Left":"156px","Overflow":"visible","ZIndex":"5","FontSize":"16px","TextColor":"#000000","WordWrap":"break-word","WhiteSpaceCollapsing":"preserve","PaddingBottom":"8px","PaddingLeft":"8px","FontStyle":"italic","Top":"429px"}},"name":"Untitled Scene","backgroundColor":"#FFFFFF"}];

var javascriptMapping = {};


	
	var Custom = (function() {
	return {
	};
}());

	
	var hypeDoc = new HYPE();
	
	hypeDoc.attributeTransformerMapping = attributeTransformerMapping;
	hypeDoc.scenes = scenes;
	hypeDoc.javascriptMapping = javascriptMapping;
	hypeDoc.Custom = Custom;
	hypeDoc.currentSceneIndex = 0;
	hypeDoc.mainContentContainerID = "errorall_hype_container";
	hypeDoc.resourcesFolderName = resourcesFolderName;
	hypeDoc.showHypeBuiltWatermark = 0;
	hypeDoc.showLoadingPage = false;
	hypeDoc.drawSceneBackgrounds = true;
	hypeDoc.documentName = documentName;

	HYPE.documents[documentName] = hypeDoc.API;

	hypeDoc.documentLoad(this.body);
}());

