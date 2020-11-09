var labelType, useGradients, nativeTextSupport, animate;

(function() {
  var ua = navigator.userAgent,
      iStuff = ua.match(/iPhone/i) || ua.match(/iPad/i),
      typeOfCanvas = typeof HTMLCanvasElement,
      nativeCanvasSupport = (typeOfCanvas == 'object' || typeOfCanvas == 'function'),
      textSupport = nativeCanvasSupport 
        && (typeof document.createElement('canvas').getContext('2d').fillText == 'function');
  //I'm setting this based on the fact that ExCanvas provides text support for IE
  //and that as of today iPhone/iPad current text support is lame
  labelType = (!nativeCanvasSupport || (textSupport && !iStuff))? 'Native' : 'HTML';
  nativeTextSupport = labelType == 'Native';
  useGradients = nativeCanvasSupport;
  animate = !(iStuff || !nativeCanvasSupport);
})();

var Log = {
  elem: false,
  write: function(text){
    if (!this.elem) 
      this.elem = document.getElementById('log');
    this.elem.innerHTML = text;
    this.elem.style.left = (500 - this.elem.offsetWidth / 2) + 'px';
  }
};


function init(){
  //init data
  var json = {
    "children": [
       {
         "children": [
           {
             "children": [], 
             "data": {
               "description": "$jit namespace and $jit() for append vis to Global\n    \n    Example:\n    \n    new $jit.Hypertree({\n      'injectInto': 'myvisContainer'\n    });", 
               "$angularWidth": 7490, 
               "days": 111, 
               "$color": "#FCD9A1", 
               "size": 7490
             }, 
             "id": "Source/Coordinates/Comd.js", 
             "name": "Complex.js"
           }, 
           
         ], 
         "data": {
           "description": "Fixed polar interpolation problem when theta = pi", 
           "$color": "#B0AAF6", 
           "days": 2, 
           "$angularWidth": 1000, 
           "size": 13880
         }, 
         "id": "Source/Coordinates", 
         "name": "Coordinates"
       }, 
       {
         "children": [
           {
             "children": [], 
             "data": {
               "description": "Scaling done right :)", 
               "$angularWidth": 14952, 
               "days": 3, 
               "$color": "#B2ABF4", 
               "size": 14952
             }, 
             "id": "Source/Core/Canvas.js", 
             "name": "Canvas.js"
           }, 
          
           {
             "children": [], 
             "data": {
               "description": "$jit namespace and $jit() for append vis to Global\n    \n    Example:\n    \n    new $jit.Hypertree({\n      'injectInto': 'myvisContainer'\n    });", 
               "$angularWidth": 5838, 
               "days": 111, 
               "$color": "#FCD9A1", 
               "size": 5838
             }, 
             "id": "Source/Core/Fx.js", 
             "name": "Fx.js"
           }
         ], 
         "data": {
           "description": "Animated TreeMaps", 
           "$color": "#B2ABF4", 
           "days": 3, 
           "$angularWidth": 1000, 
           "size": 35549
         }, 
         "id": "Source/Core", 
         "name": "Core"
       }, 
      
       {
         "children": [
           {
             "children": [], 
             "data": {
               "description": "Animated TreeMaps", 
               "$angularWidth": 1652, 
               "days": 3, 
               "$color": "#B2ABF4", 
               "size": 1652
             }, 
             "id": "Source/Graph/Graph.Geom.js", 
             "name": "Graph.Geom.js"
           }, 
          
           {
             "children": [], 
             "data": {
               "description": "Added new Canvas class with zoom/pan options", 
               "$angularWidth": 9512, 
               "days": 5, 
               "$color": "#B6AEEF", 
               "size": 9512
             }, 
             "id": "Source/Graph/Graph.Label.js", 
             "name": "Graph.Label.js"
           }, 
        
           {
             "children": [], 
             "data": {
               "description": "Bug Fix Extras + Tweaking examples", 
               "$angularWidth": 18950, 
               "days": 19, 
               "$color": "#D2BFD0", 
               "size": 18950
             }, 
             "id": "Source/Graph/Graph.Plot.js", 
             "name": "Graph.Plot.js"
           }, 
           {
             "children": [], 
             "data": {
               "description": "(Re)-Implemented nodeTypes using node/edgeHelpers\n    \n    Code is cleaner and NodeTypes are now easier to implement.", 
               "$angularWidth": 6947, 
               "days": 32, 
               "$color": "#ECCFB3", 
               "size": 6947
             }, 
             "id": "Source/Graph/Helpers.js", 
             "name": "Helpers.js"
           }
         ], 
         "data": {
           "description": "Animated TreeMaps", 
           "$color": "#B2ABF4", 
           "days": 3, 
           "$angularWidth": 1000, 
           "size": 87820
         }, 
         "id": "Source/Graph", 
         "name": "Graph"
       }, 
       
       {
         "children": [
           {
             "children": [], 
             "data": {
               "description": "Fixed passing of general Label object", 
               "$angularWidth": 8079, 
               "days": 26, 
               "$color": "#E0C7C0", 
               "size": 8079
             }, 
             "id": "Source/Loader/Loader.js", 
             "name": "Loader.js"
           }
         ], 
         "data": {
           "description": "Fixed passing of general Label object", 
           "$color": "#E0C7C0", 
           "days": 26, 
           "$angularWidth": 1000, 
           "size": 8079
         }, 
         "id": "Source/Loader", 
         "name": "Loader"
       }, 
       {
         "children": [
           
           {
             "children": [], 
             "data": {
               "description": "Added gradients to AreaChart", 
               "$angularWidth": 386, 
               "days": 37, 
               "$color": "#F6D5A7", 
               "size": 386
             }, 
             "id": "Source/Options/Options.BarChart.js", 
             "name": "Options.BarChart.js"
           }, 
           {
             "children": [], 
             "data": {
               "description": "Add label types in Label configuration object.\n    \n    Add calls to getLabelData in plotLabel.", 
               "$angularWidth": 392, 
               "days": 26, 
               "$color": "#E0C7C0", 
               "size": 392
             }, 
             "id": "Source/Options/Options.Canvas.js", 
             "name": "Options.Canvas.js"
           }, 
           {
             "children": [], 
             "data": {
               "description": "Organizing sources and build", 
               "$angularWidth": 3856, 
               "days": 112, 
               "$color": "#FCD9A1", 
               "size": 3856
             }, 
             "id": "Source/Options/Options.Controller.js", 
             "name": "Options.Controller.js"
           }, 
      
        
          
         ], 
         "data": {
           "description": "Add an option to resize labels according to its pie slice", 
           "$color": "#AEA9F8", 
           "days": 1, 
           "$angularWidth": 1000, 
           "size": 13575
         }, 
         "id": "Source/Options", 
         "name": "교육기관"
       }, 
       {
         "children": [
           {
             "children": [], 
             "data": {
               "description": "Fixing AreaCharts for IE", 
               "$angularWidth": 13636, 
               "days": 19, 
               "$color": "#D2BFD0", 
               "size": 13636
             }, 
             "id": "Source/Visualizations/AreaChart.js", 
             "name": "처방전 서비스"
           }, 
           {
             "children": [], 
             "data": {
               "description": "Append utils, id and Class objects to $jit. Add legends to Bar/Pie/AreaChart examples.", 
               "$angularWidth": 12608, 
               "days": 15, 
               "$color": "#CABAD9", 
               "size": 12608
             }, 
             "id": "Source/Visualizations/BarChart.js", 
             "name": "환자 데이터 저장소"
           }, 
           {
             "children": [], 
             "data": {
               "description": "Added new Canvas class with zoom/pan options", 
               "$angularWidth": 16954, 
               "days": 5, 
               "$color": "#B6AEEF", 
               "size": 16954
             }, 
             "id": "Source/Visualizations/ForceDirected.js", 
             "name": "약물 섭취 디지털 정량화"
           }, 
            
           {
             "children": [], 
             "data": {
               "description": "Add an option to resize labels according to its pie slice", 
               "$angularWidth": 10762, 
               "days": 1, 
               "$color": "#AEA9F8", 
               "size": 10762
             }, 
             "id": "Source/Visualizations/PieChart.js", 
             "name": "의료의 질 효과분석"
           }, 
           {
             "children": [], 
             "data": {
               "description": "Added new Canvas class with zoom/pan options", 
               "$angularWidth": 18010, 
               "days": 5, 
               "$color": "#B6AEEF", 
               "size": 18010
             }, 
             "id": "Source/Visualizations/RGraph.js", 
             "name": "의료분야의 연구개발"
           }, 
           
         
           {
             "children": [], 
             "data": {
               "description": "Animated TreeMaps", 
               "$angularWidth": 16472, 
               "days": 3, 
               "$color": "#B2ABF4", 
               "size": 16472
             }, 
             "id": "Source/Visualizations/Treemap.js", 
             "name": "의료 경제평가"
           }
         ], 
         "data": {
           "description": "Merge remote branch 'woot/bugfixes_docnet' into sunburst_fixes", 
           "$color": "#AEA9F8", 
           "days": 1, 
           "$angularWidth": 1000, 
           "size": 186221
         }, 
         "id": "Source/Visualizations", 
         "name": "디지털 헬스케어"
       }
     ], 
     "data": {
       "$type": "none"
     }, 
     "id": "Source", 
     "name": "Source"
   };
    //end
    //init Sunburst
    var sb = new $jit.Sunburst({
        //id container for the visualization
        injectInto: 'infovis',
        //Distance between levels
        levelDistance: 90,
        //Change node and edge styles such as
        //color, width and dimensions.
        Node: {
          overridable: true,
          type: useGradients? 'gradient-multipie' : 'multipie'
        },
        //Select canvas labels
        //'HTML', 'SVG' and 'Native' are possible options
        Label: {
          type: labelType
        },
        //Change styles when hovering and clicking nodes
        NodeStyles: {
          enable: true,
          type: 'Native',
          stylesClick: {
            'color': '#33dddd'
          },
          stylesHover: {
            'color': '#dd3333'
          }
        },
        //Add tooltips
        Tips: {
          enable: true,
          onShow: function(tip, node) {
            var html = "<div class=\"tip-title\">" + node.name + "</div>"; 
            var data = node.data;
            if("days" in data) {
              html += "<b>Last modified:</b> " + data.days + " days ago";
            }
            if("size" in data) {
              html += "<br /><b>File size:</b> " + Math.round(data.size / 1024) + "KB";
            }
            tip.innerHTML = html;
          }
        },
        //implement event handlers
        Events: {
          enable: true,
          onClick: function(node) {
            if(!node) return;
            //Build detailed information about the file/folder
            //and place it in the right column.
            var html = "<h4>" + node.name + "</h4>", data = node.data;
            if("days" in data) {
              html += "<b>Last modified:</b> " + data.days + " days ago";
            }
            if("size" in data) {
              html += "<br /><br /><b>File size:</b> " + Math.round(data.size / 1024) + "KB";
            }
            if("description" in data) {
              html += "<br /><br /><b>Last commit was:</b><br /><pre>" + data.description + "</pre>";
            }
            $jit.id('inner-details').innerHTML = html;
            //hide tip
            sb.tips.hide();
            //rotate
            sb.rotate(node, animate? 'animate' : 'replot', {
              duration: 1000,
              transition: $jit.Trans.Quart.easeInOut
            });
          }
        },
        // Only used when Label type is 'HTML' or 'SVG'
        // Add text to the labels. 
        // This method is only triggered on label creation
        onCreateLabel: function(domElement, node){
          var labels = sb.config.Label.type,
              aw = node.getData('angularWidth');
          if (labels === 'HTML' && (node._depth < 2 || aw > 2000)) {
            domElement.innerHTML = node.name;
          } else if (labels === 'SVG' && (node._depth < 2 || aw > 2000)) {
            domElement.firstChild.appendChild(document.createTextNode(node.name));
          }
        },
        // Only used when Label type is 'HTML' or 'SVG'
        // Change node styles when labels are placed
        // or moved.
        onPlaceLabel: function(domElement, node){
          var labels = sb.config.Label.type;
          if (labels === 'SVG') {
            var fch = domElement.firstChild;
            var style = fch.style;
            style.display = '';
            style.cursor = 'pointer';
            style.fontSize = "0.8em";
            fch.setAttribute('fill', "#fff");
          } else if (labels === 'HTML') {
            var style = domElement.style;
            style.display = '';
            style.cursor = 'pointer';
            style.fontSize = "0.8em";
            style.color = "#ddd";
            var left = parseInt(style.left);
            var w = domElement.offsetWidth;
            style.left = (left - w / 2) + 'px';
          }
        }
   });
    //load JSON data.
    sb.loadJSON(json);
    //compute positions and plot.
    sb.refresh();
    //end
}
