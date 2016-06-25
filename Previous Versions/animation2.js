// // // Animation Functions // // //
// initialize axes scales
    var yScale = d3.scale.linear()
                        .domain([-95, 45])
                        .range([350, 10]);
        
    var xScale = d3.scale.linear()
                    .domain([0, 5])
                    .range([155, 630]);


// move the number labels in the graph to match size increase
function moveNumbers(number) {
    d3.selectAll("text#Time_".concat(number))
        .transition()
        .ease("bounce")
        .attr("font-size", "20px")
        .attr("fill", "red")
        .attr("x", function(d, i){return xScale(d.Time) + 10;})
        .attr("y", function(d){return yScale(d.Voltage) + 5;});
}

// return numbers to their original position
function returnNumbers(number) {
    d3.selectAll("text#Time_".concat(number))
        .transition()
        .ease("bounce")
        .attr("font-size", "11px")
        .attr("fill", "lightblue")
        .attr("x", function(d, i){return xScale(d.Time)-22 + 7;})
        .attr("y", function(d){return yScale(d.Voltage) + 5;})
}
 
// change the size and color of a time dot
function updateTime(number) {
    d3.selectAll("circle#Time_".concat(number))
        .transition()
        .ease("bounce")
        .attr("fill", "red")
        .attr("r", 20);
}

// return time dot to its original state
function returnTime(number) {
    d3.selectAll("circle#Time_".concat(number))
        .transition()
        .ease("bounce")
        .attr("fill", "lightblue")
        .attr("r", 7);
}

// highlight threshold line and label
function updateLines(number) {
    d3.selectAll("#n_".concat(number))
        .transition()
        .ease("elastic")
        .attr("fill", "red")
        .attr("stroke", "red");
}

// return threshold line to normal
function returnLines() {
    d3.selectAll(".lines")
        .transition()
        .ease("elastic")
        .attr("fill", "none")
        .attr("stroke", "none");
}

// add ions to Axon Hillock
function addIons(number) {
    d3.selectAll("#ion_".concat(number))
        .transition()
        .ease("bounce")
        .attr("fill", "lightblue");
}

// remove ions
    function removeIons() {
    d3.selectAll(".ion")
        .transition()
        .attr("fill", "none");
}


// show Activation Rays
function Activation() {
    d3.selectAll("#Activation")
            .transition()
            .ease("elastic")
            .attr("fill", "gold");
}

// hide Activation Rays
function clearActivation() {
    d3.selectAll("#Activation")
            .transition()
            .attr("fill", "none");
}

// Show chemical signal direction
function addArrow(number) {
    d3.selectAll("#arrow_".concat(number))
        .transition()
        .attr("fill", "lightblue");
}

// fade chemical signal direction 
function removeArrow(number) {
    d3.selectAll("#arrow_".concat(number))
        .transition()
        .attr("fill", "none");
}

// show Voltage-Gated Channel Activation
function openChannel(number) {
    d3.selectAll("#channel_".concat(number))
        .transition()
        .attr("fill", "gold");
}

// hide Voltage-Gated Channel Activation
function closeChannel(number) {
    d3.selectAll("#channel_".concat(number))
        .transition()
        .attr("fill", "none");
}

// Show Signal in Terminal Button
function triggerNeurotransmitterRelease() {
     d3.selectAll("#Signal")
                    .transition()
                    .attr("fill", "plum");
}

// Clear Signal
function clearNeurotransmitterRelease() {
     d3.selectAll("#Signal")
                    .transition()
                    .attr("fill", "none");
}

// // // Animation Keyframes // // //
// starts after 4 clicks on "poke the neuron"

function frame0() {
    // neuron fire event
    removeIons();
    Activation();
    addArrow(1);
    
    
    
    // update text box
    d3.selectAll("#TextExplain")
            .text("The Neuron Fires!");
}

function frame1() {
    // signal starts travelling down the axon
    clearActivation();
    removeArrow(1);
    addArrow(2);
    // return time and labels to default
    returnTime(3);
    returnNumbers(3);
    
    
    // update time and labels
    updateTime(4);
    moveNumbers(4);
    returnLines();
    
}

function frame2() {
    // remove arrow
    removeArrow(2);
    // add new
    addArrow(3);
    // open first channel
    openChannel(1);
        
}

function frame3() {
    // update arrows and channels
    removeArrow(3);
    addArrow(4);
    closeChannel(1);
    // update time and labels
    returnTime(4);
    returnNumbers(4);
    
    updateTime(5);
    moveNumbers(5);
    
}

function frame4() {
    // update channels and arrows
    removeArrow(4);
    addArrow(5);
    openChannel(2);
}

function frame5() {
    // update channels and arrows
    removeArrow(5);
    closeChannel(2);
    addArrow(6);
    // update time
    returnTime(5);
    returnNumbers(5);
    updateTime(6);
    moveNumbers(6);
    updateLines(3)
}

function frame6() {
    // update channels and arrows
    removeArrow(6);
    addArrow(7);
    openChannel(3);
}

function frame7() {
    // update channels and arrows
    removeArrow(7);
    closeChannel(3);
    addArrow(8);
    // update time
    returnTime(6);
    returnNumbers(6);
    updateTime(7);
    moveNumbers(7);
    returnLines();
}

function frame8() {
    // update arrows
    removeArrow(8);
    addArrow(9);
    
}
function frame9(params) {
    // update time
    returnTime(7);
    returnNumbers(7);
    updateTime(8);
    moveNumbers(8);
    // update signal
    removeArrow(9);
    triggerNeurotransmitterRelease();
}
    

function frame10() {
    // update time
    returnTime(8);
    returnNumbers(8);
    updateTime(9);
    moveNumbers(9);
    updateLines(0);
    
}
function frame11() {
    clearNeurotransmitterRelease();
    returnTime(9);
    returnLines();
    returnNumbers(9);
}

function runAnimation() {
    setTimeout(frame0, 0)
    setTimeout(frame1, 500)
    setTimeout(frame2, 1000)
    setTimeout(frame3, 1500)
    setTimeout(frame4, 2000)
    setTimeout(frame5, 2500)
    setTimeout(frame6, 3000)
    setTimeout(frame7, 3500)
    setTimeout(frame8, 4000)
    setTimeout(frame9, 4500)
    setTimeout(frame10, 5500)
    setTimeout(frame11, 6500)
    
}







// Freeze interactivity 

// light everything up
function allOn(){
    // Reveal all images
        d3.selectAll(".ion")
            .attr("fill", "lightblue");
        
        d3.selectAll(".hillock")
            .attr("fill", "gold");
        
        d3.selectAll(".channel")
            .attr("fill", "gold");
        
        d3.selectAll(".fire")
            .attr("fill", "lightblue");
        
        d3.selectAll(".cascade")
            .attr("fill", "plum");
}
// all off
function allOff(){
    // Reveal all images
        d3.selectAll(".ion")
            .attr("fill", "none");
        
        d3.selectAll(".hillock")
            .attr("fill", "none");
        
        d3.selectAll(".channel")
            .attr("fill", "none");
        
        d3.selectAll(".fire")
            .attr("fill", "none");
        
        d3.selectAll(".cascade")
            .attr("fill", "none");
}

function openModel(text) {
    // Get the modal
    var modal = document.getElementById('myModal');
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    
    // update header
    d3.selectAll(".modal-header")
        .text(text.header);
    // update body text
    d3.selectAll(".modal-body")
        .text(text.body);
    // open button
    d3.selectAll("#myModal")
        .style("display", "block");
        
    d3.selectAll("body")
        .on("dblclick", function(){
            d3.selectAll("#myModal")
                .style("display", "none");
        });
    
    }

