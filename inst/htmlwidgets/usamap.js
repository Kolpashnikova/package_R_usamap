HTMLWidgets.widget({

  name: 'usamap',

  type: 'output',

  factory: function(el, width, height) {

    // TODO: define shared variables for this instance

    return {

        var newSvg = document.getElementById(el.id);
        newSvg.innerHTML += '<div id="mapChartContainer" class="mx-auto max-w-3xl" style="height: 80vh; margin-top: 50px;"><div id="vmap" style="width: 100%; height: 90%;"></div></div>';

            var data = x.data;

            var names = {
                "al": "Alabama",
                "ak": "Alaska",
                "az": "Arizona",
                "ar": "Arkansas",
                "ca": "California",
                "co": "Colorado",
                "ct": "Connecticut",
                "de": "Delaware",
                "dc": "District Of Columbia",
                "fl": "Florida",
                "ga": "Georgia",
                "hi": "Hawaii",
                "id": "Idaho",
                "il": "Illinois",
                "in": "Indiana",
                "ia": "Iowa",
                "ks": "Kansas",
                "ky": "Kentucky",
                "la": "Louisiana",
                "me": "Maine",
                "mh": "Marshall Islands",
                "md": "Maryland",
                "ma": "Massachusetts",
                "mi": "Michigan",
                "mn": "Minnesota",
                "ms": "Mississippi",
                "mo": "Missouri",
                "mt": "Montana",
                "ne": "Nebraska",
                "nv": "Nevada",
                "nh": "New Hampshire",
                "nj": "New Jersey",
                "nm": "New Mexico",
                "ny": "New York",
                "nc": "North Carolina",
                "nd": "North Dakota",
                "mp": "Northern Mariana Islands",
                "oh": "Ohio",
                "ok": "Oklahoma",
                "or": "Oregon",
                "pa": "Pennsylvania",
                "ri": "Rhode Island",
                "sc": "South Carolina",
                "sd": "South Dakota",
                "tn": "Tennessee",
                "tx": "Texas",
                "ut": "Utah",
                "vt": "Vermont",
                "vi": "Virgin Islands",
                "va": "Virginia",
                "wa": "Washington",
                "wv": "West Virginia",
                "wi": "Wisconsin",
                "wy": "Wyoming"
            };

            var max = 0,
                min = Number.MAX_VALUE,
                cc,
                //startColor = colorsNeeded('Sleep')[1],
                startColor = x.startColor,
                //endColor = colorsNeeded('Leisure')[1],
                endColor = x.endColor,
                colors = {},
                hex;

            if(startColor == null){
              var startColor = [0,0,255];
            }

            if(endColor == null){
              var endColor = [255,0,0];
            }


            drawMap(data, startColor, endColor);

            function drawMap(data, startColor, endColor){

                d3.select("#vmap").selectAll('*').remove();

                for (cc in data)
                {
                    if (parseFloat(data[cc]) > max)
                    {
                        max = parseFloat(data[cc]);
                    }
                    if (parseFloat(data[cc]) < min)
                    {
                        min = parseFloat(data[cc]);
                    }
                }

                max = x.maximum;

                min = x.minimum;

                for (cc in data)
                {
                    if (data[cc] >= 0)
                    {
                        colors[cc] = '#';
                        for (var i = 0; i<3; i++)
                        {
                            hex = Math.round(startColor[i]
                                + (endColor[i] - startColor[i])
                                * (data[cc]/(max - min))).toString(16);

                            if (hex.length == 1)
                            {
                                hex = '0'+hex;
                            }

                            colors[cc] += (hex.length == 1 ? '0' : '') + hex;
                        }
                    }
                }


                jQuery('#vmap').vectorMap({
                    map: 'usa_en',
                    backgroundColor: null,
                    borderColor: '#818181',
                    borderOpacity: 0.25,
                    borderWidth: 1,
                    color: '#f4f3f0',
                    enableZoom: true,
                    showTooltip: true,
                    selectedColor: null,
                    hoverOpacity: 0.5,
                    colors: colors,
                    onRegionClick: function(event, code, region){
                        event.preventDefault();
                    },
                    onLabelShow: function(event, label, code)
                    {
                        label.text(names[code] + ":\n" + data[code]);
                    }
                });
            }
      },

      resize: function(width, height) {

        // TODO: code to re-render the widget with a new size

      }

    };
  }
});
