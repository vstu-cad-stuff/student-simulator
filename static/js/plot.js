function replot() {
    // load json data
    $.getJSON('/json/graph', {}, function(json) {
        data = json;
    });
    // remove old svg container
    d3.select("svg").remove();
    var margin = {top: 30, right: 20, bottom: 70, left: 50},
    div = $('#graph'),
    width = div.width() - margin.left - margin.right,
    height = div.height() - margin.top - margin.bottom;
    var tick_fn = function ( d ) { return d.tick; }
    //Create the Scale we will use for the Axis
    var axisScale;
    length = data.length - 1;
    tick = data[length]['tick'];
    if (tick <= length) {
        axisScale = d3.scale.linear()
            .domain([0, 20])
            .range([0, width]);
    } else {
        axisScale = d3.scale.linear()
            .domain([d3.min(data, tick_fn), d3.max(data, tick_fn)])
            .range([0, width]);
    }
    var yaxisScale = d3.scale.linear()
        .domain([-100, 100])
        .range([ height, 0]);
    var xAxis = d3.svg.axis()
        .scale(axisScale)
        .orient("bottom");
    var yAxis = d3.svg.axis()
        .scale(yaxisScale)
        .orient("left");
    var svgContainer = d3.select("#graph")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    svgContainer.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis);
    svgContainer.append("g")
        .attr("class", "y axis")
        .call(yAxis);
    // create a line
    var line_mood = d3.svg.line()
    .x( function( d, i ) { return axisScale( d.tick ); })
    .y( function( d, i ) { return yaxisScale( d.mood ); })
    var line_progress = d3.svg.line()
    .x( function( d, i ) { return axisScale( d.tick ); })
    .y( function( d, i ) { return yaxisScale( d.progress ); })
    var line_satiety = d3.svg.line()
    .x( function( d, i ) { return axisScale( d.tick ); })
    .y( function( d, i ) { return yaxisScale( d.satiety ); })
    var line_finances = d3.svg.line()
    .x( function( d, i ) { return axisScale( d.tick ); })
    .y( function( d, i ) { return yaxisScale( d.finances ); })
    svgContainer.append("svg:path").attr("class", "line")
        .attr("stroke", "green")
        .style("stroke-dasharray", ("5, 5"))
        .attr("d", line_mood(data));
    svgContainer.append("svg:path").attr("class", "line")
        .attr("stroke", "blue")
        .style("stroke-dasharray", ("10, 4"))
        .attr("d", line_progress(data));
    svgContainer.append("svg:path").attr("class", "line")
        .attr("stroke", "red")
        .attr("d", line_satiety(data));
    svgContainer.append("svg:path").attr("class", "line")
        .attr("stroke", "black").attr("d", line_finances(data));
}
setInterval(replot, speed);
replot();