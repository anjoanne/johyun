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
  // init data
  var json = {
    id: "190_0",
    name: "Psemo",
    children: [
     
       
        {
          id: "236594_38",
          name: "발달",
          data: {
            relation: "<h4>Dave Krusen</h4><b>Connections:</b><ul><li>Pearl Jam <div>(relation: member of band)</div></li><li>Candlebox <div>(relation: member of band)</div></li></ul>"
          },
          children: [
            {
              id: "2092_39",
              name: "Candlebox",
              data: {
                relation: "<h4>Candlebox</h4><b>Connections:</b><ul><li>Dave Krusen <div>(relation: member of band)</div></li></ul>"
              },
              children: []
            }
          ]
        },
        {
          id: "236022_40",
          name: "아동/청소년 종합",
          data: {
            relation: "<h4>Matt Chamberlain</h4><b>Connections:</b><ul><li>Pearl Jam <div>(relation: member of band)</div></li><li>Critters Buggin <div>(relation: member of band)</div></li><li>Edie Brickell and New Bohemians <div>(relation: member of band)</div></li></ul>"
          },
          children: [
              {
                id: "54761_41",
                name: "Critters Buggin",
                data: {
                  relation: "<h4>Critters Buggin</h4><b>Connections:</b><ul><li>Matt Chamberlain <div>(relation: member of band)</div></li></ul>"
                },
                children: []
              },
              {
                id: "92043_42",
                name: "Edie Brickell and New Bohemians",
                data: {
                  relation: "<h4>Edie Brickell and New Bohemians</h4><b>Connections:</b><ul><li>Matt Chamberlain <div>(relation: member of band)</div></li></ul>"
                },
                children: []
              }
          ]
        },
        {
          id: "236611_43",
          name: "성인 종합",
          data: {
            relation: "<h4>Dave Abbruzzese</h4><b>Connections:</b><ul><li>Pearl Jam <div>(relation: member of band)</div></li><li>Green Romance Orchestra <div>(relation: member of band)</div></li></ul>"
          },
          children: [
            {
              id: "276933_44",
              name: "Green Romance Orchestra",
              data: {
                relation: "<h4>Green Romance Orchestra</h4><b>Connections:</b><ul><li>Dave Abbruzzese <div>(relation: member of band)</div></li></ul>"
              },
              children: []
            }
          ]
        },
        {
          id: "236612_45",
          name: "신경",
          data: {
            relation: "<h4>Jack Irons</h4><b>Connections:</b><ul><li>Pearl Jam <div>(relation: member of band)</div></li><li>Redd Kross <div>(relation: member of band)</div></li><li>Eleven <div>(relation: member of band)</div></li><li>Red Hot Chili Peppers <div>(relation: member of band)</div></li><li>Anthym <div>(relation: member of band)</div></li><li>What Is This? <div>(relation: member of band)</div></li></ul>"
          },
          children: [
              {
                id: "4619_46",
                name: "Redd Kross",
                data: {
                  relation: "<h4>Redd Kross</h4><b>Connections:</b><ul><li>Jack Irons <div>(relation: member of band)</div></li></ul>"
                },
                children: []
              },
              {
                id: "9570_47",
                name: "Eleven",
                data: {
                  relation: "<h4>Eleven</h4><b>Connections:</b><ul><li>Jack Irons <div>(relation: member of band)</div></li></ul>"
                },
                children: []
              },
              {
                id: "12389_48",
                name: "Red Hot Chili Peppers",
                data: {
                  relation: "<h4>Red Hot Chili Peppers</h4><b>Connections:</b><ul><li>Jack Irons <div>(relation: member of band)</div></li></ul>"
                },
                children: []
              },
              {
                id: "114288_49",
                name: "Anthym",
                data: {
                  relation: "<h4>Anthym</h4><b>Connections:</b><ul><li>Jack Irons <div>(relation: member of band)</div></li></ul>"
                },
                children: []
              },
              {
                id: "240013_50",
                name: "What Is This?",
                data: {
                  relation: "<h4>What Is This?</h4><b>Connections:</b><ul><li>Jack Irons <div>(relation: member of band)</div></li></ul>"
                },
                children: []
              }
          ]
        }
    ],
    data: {
      relation: "<h4>Pearl Jam</h4><b>Connections:</b><ul><li>Pearl Jam & Cypress Hill <div>(relation: collaboration)</div></li><li>Neil Young & Pearl Jam <div>(relation: collaboration)</div></li><li>Jeff Ament <div>(relation: member of band)</div></li><li>Stone Gossard <div>(relation: member of band)</div></li><li>Eddie Vedder <div>(relation: member of band)</div></li><li>Mike McCready <div>(relation: member of band)</div></li><li>Matt Cameron <div>(relation: member of band)</div></li><li>Dave Krusen <div>(relation: member of band)</div></li><li>Matt Chamberlain <div>(relation: member of band)</div></li><li>Dave Abbruzzese <div>(relation: member of band)</div></li><li>Jack Irons <div>(relation: member of band)</div></li></ul>"
    }
  };
  // end
  // init RGraph
  var rgraph = new $jit.RGraph({
    // Where to append the visualization
    injectInto: 'infovis',
    // Optional: create a background canvas and plot
    // concentric circles in it.
    background: {
      CanvasStyles: {
        strokeStyle: '#555',
        shadowBlur: 10,
        shadowColor: '#ccc'
      }
    },
    // Set Edge and Node styles
    Node: {
      overridable: true,
      color: '#ccddee',
      dim: 12
    },
    Edge: {
      overridable: true,
      color: '#C17878',
      lineWidth: 1.5
    },
    // Use native canvas text
    Label: {
      type: labelType,
      size: 11,
      family: 'Verdana',
      color: '#fff'
    },
    //Add events for Dragging and dropping nodes
    Events: {
      enable: true,
      type: 'Native',
      onMouseEnter: function(node, eventInfo, e){
        rgraph.canvas.getElement().style.cursor = 'move';
      },
      onMouseLeave: function(node, eventInfo, e){
        rgraph.canvas.getElement().style.cursor = '';
      },
      onDragMove: function(node, eventInfo, e){
        var pos = eventInfo.getPos();
        node.pos.setc(pos.x, pos.y);
        rgraph.plot();
      },
      onDragEnd: function(node, eventInfo, e){
        rgraph.compute('end');
        rgraph.fx.animate( {
          modes: [
            'linear'
          ],
          duration: 700,
          transition: $jit.Trans.Elastic.easeOut
        });
      },
      //touch events
      onTouchStart: function(node, eventInfo, e) {
        //stop the default event
        $jit.util.event.stop(e);
      },
      onTouchMove: function(node, eventInfo, e){
        //stop the default event
        $jit.util.event.stop(e);
        var pos = eventInfo.getPos();
        node.pos.setc(pos.x, pos.y);
        rgraph.plot();
      },
      onTouchEnd: function(node, eventInfo, e){
        //stop the default event
        $jit.util.event.stop(e);
        rgraph.compute('end');
        rgraph.fx.animate( {
          modes: [
            'linear'
          ],
          duration: 700,
          transition: $jit.Trans.Elastic.easeOut
        });
      }
    },
    //Add the name of the node in the correponding label
    //and a click handler to move the graph.
    //This method is called once, on label creation.
    onCreateLabel: function(domElement, node){
      domElement.innerHTML = node.name;
    },
    //Change some label dom properties.
    //This method is called each time a label is plotted.
    onPlaceLabel: function(domElement, node){
        var style = domElement.style;
        style.display = '';
        style.cursor = 'pointer';

        if (node._depth <= 1) {
            style.fontSize = "0.8em";
            style.color = "#ccc";
        
        } else if(node._depth == 2){
            style.fontSize = "0.7em";
            style.color = "#494949";
        
        } else {
            style.display = 'none';
        }

        var left = parseInt(style.left);
        var w = domElement.offsetWidth;
        style.left = (left - w / 2) + 'px';
    }
  });
  // load JSON data
  rgraph.loadJSON(json);
  // compute positions and make the first plot
  rgraph.refresh();
  // end
}
