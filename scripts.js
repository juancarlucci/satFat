trace1 = {
  x: [9.2, 7.3, 13.9, 5.7, 10.2, 14.5, '', 9.8, 7.1, '', '', 12.6, 10.6, 14.4, 15.5, 5.2, 13.7, 11.1, 11.8, 14.6, 13.5, 8.8, 11.8, 8.1, 7.8, 9.1, 7.7, '', '', 9.5, 5.8, 14.6, 13.1, 10.7, 10.6, 8.3, 8.3, '', 10.7, 10, 10.9, 12.8, 15.3, 5.4, 7, 10.1, 7.6, 13.5, 9.2],
  y: [1107, 1750, 579, 2316, 2497, 512, '', 1344, 973, 638, '', 478, 1449, 687, 259, 2103, 574, 620, 1137, 470, 671, 370, 409, 2452, 1885, 1606, 1444, 403, 838, 709, 1922, 460, 503, 949, 431, 1176, '', '', 1037, 552, 368, 506, 380, 1886, 1332, 2860, 2539, '', 1907],
  hoverinfo: 'x+y+text',
  marker: {
    size: [1107, 1750, 579, 2316, 2497, 512, '', 1344, 973, 638, '', 478, 1449, 687, 259, 2103, 574, 620, 1137, 470, 671, 370, 409, 2452, 1885, 1606, 1444, 403, 838, 709, 1922, 460, 503, 949, 431, 1176, '', '', 1037, 552, 368, 506, 380, 1886, 1332, 2860, 2539, '', 1907],
    sizemode: 'area',
    sizeref: 3.575,
    sizesrc: 'juancarlucci:2:I15HJHVXU620EJJ0UVST9I8N5B63SC1T'
  },
  mode: 'markers',
  name: 'Countries',
  text: ['Albania', 'Armenia', 'Austria', 'Azerbaijan', 'Belarus', 'Belgium', 'Bosnia and Herzegovina', 'Bulgaria', 'Croatia', 'Cyprus', 'Czech Republic', 'Denmark', 'Estonia', 'Finland', 'France', 'Georgia', 'Germany', 'Greece', 'Hungary', 'Iceland', 'Ireland', 'Israel', 'Italy', 'Kazakhstan', 'Kyrgyzstan', 'Latvia', 'Lithuania', 'Luxembourg', 'Macedonia', 'Malta', 'Moldova', 'Netherlands', 'Norway', 'Poland', 'Portugal', 'Romania', 'Russian Federation', 'Serbia and Montenegro', 'Slovakia', 'Slovenia', 'Spain', 'Sweden', 'Switzerland', 'Tajikistan', 'Turkey', 'Turkmenistan', 'Ukraine', 'United Kingdom', 'Uzbekistan'],
  textsrc: 'juancarlucci:2:O5QMAE8KCN8LA5XB6C0IDAH6HZ2W75TL',
  type: 'scatter',
  uid: '56ce27',
  visible: true,
  xsrc: 'juancarlucci:2:H6JGSACGHNIVL87KLPNOCGHOWYNIKD82',
  ysrc: 'juancarlucci:2:I15HJHVXU620EJJ0UVST9I8N5B63SC1T'
};
trace2 = {
  hoverinfo: 'x+y',
  name: 'Trend line',
  type: 'scatter',
  uid: '69c70c'
};
data = [trace1, trace2];
layout = {
  annotations: [{
    x: 0,
    y: 0,
    showarrow: false,
    text: 'Source: World Health Organization: <a href="http://apps.who.int/gho/data/node.main.A883?lang=en">Cholestrol</a>, <a href="http://apps.who.int/gho/data/node.main.A859?lang=en">Mortality.</a>',
    xanchor: 'left',
    xref: 'paper',
    yref: 'paper'
  }, {
    x: 0,
    y: 0.05,
    showarrow: false,
    text: 'Source:  Oxford University Department of Public Health: <a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=3&cad=rja&uact=8&ved=0ahUKEwiLx-mwjJHTAhXpxVQKHRNODgAQFggmMAI&url=https%3A%2F%2Fwww.bhf.org.uk%2F-%2Fmedia%2Ffiles%2Fresearch%2Fheart-statistics%2Fhs2008ec_european_cardiovascular_disease_statistics_2008.pdf&usg=AFQjCNFk5R9fDrsKuUV-sXQeb-f4qocB4A&sig2=imynDDrk7603HmyEb2w7MA&bvm=bv.152174688,d.eWE">European cardiovascular data</a>',
    xanchor: 'left',
    xref: 'paper',
    yref: 'paper'
  }],
  autosize: true,
  hovermode: 'closest',
  showlegend: true,
  title: 'Saturated Fat and Death',
  xaxis: {
    autorange: true,
    range: [4.38487698285, 16.1684717946],
    title: 'Saturated fat as percent of calories',
    type: 'linear'
  },
  yaxis: {
    autorange: true,
    range: [63.1512518646, 3152.03269532],
    title: 'Death from cardiovascular disease per 100,000 people',
    type: 'linear'
  }
};
// Plotly.plot('plotly-div', {
//   data: data,
//   layout: layout
// });


// Some info about viewport percentages:
// http://stackoverflow.com/questions/1575141/make-div-100-height-of-browser-window

(function () {
  var d3 = Plotly.d3;

  var WIDTH_IN_PERCENT_OF_PARENT = 60,
    HEIGHT_IN_PERCENT_OF_PARENT = 80;

  var gd3 = d3.select('body')
    .append('div')
    .style({
      width: WIDTH_IN_PERCENT_OF_PARENT + '%',
      'margin-left': (100 - WIDTH_IN_PERCENT_OF_PARENT) / 2 + '%',

      height: HEIGHT_IN_PERCENT_OF_PARENT + 'vh',
      'margin-top': (100 - HEIGHT_IN_PERCENT_OF_PARENT) / 2 + 'vh'
    });

  var gd = gd3.node();

  Plotly.plot('plotly-div', {
      data: data,
      layout: layout
    },
    // );

    // Plotly.plot(gd, [{
    //     type: 'bar',
    //     x: [1, 2, 3, 4],
    //     y: [5, 10, 2, 8],
    //     marker: {
    //         color: '#C8A2C8',
    //         line: {
    //             width: 2.5
    //         }
    //     }
    // }],
    {
      title: 'Auto-Resize',
      font: {
        size: 16
      }
    });

  window.onresize = function () {
    Plotly.Plots.resize(gd);
  };

})();