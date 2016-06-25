function inform(clicks) {
    if (clicks === 1){
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
            
        // Change Text in div to instructions
        d3.select("#TextExplain")
            .text("This diagram shows the steps of a neuron reaching Action Potential. Click each part of the neuron activation cycle to learn more! Click 'Learn!' again to reset.");
        // hover functionality, based on class
        // on hover, shift color and update text
        d3.selectAll(".ion")
            .on("click", function(){
                // select time 0
                
                // update text
                d3.select("#TextExplain")
                .text("As neurotransmitters like dopamine and serotonine stimulate the dendrite branches, they open channels on the branches. Ions flood the dendrite through these channels and collect in the Axon Hillock.");})
            
        d3.selectAll(".hillock")
            .on("click", function() {
                // select time 1
                
                // update text
                d3.select("#TextExplain")
                .text("As more and more ions collect, the voltage at the Axon Hillock increases from resting -70 mV. Once it reaches Threshold Potential, at -55 mV, the axon becomes more sensitive, and the voltage increases much more quickly.");
            });
            
        d3.selectAll(".fire")
            .on("click", function () {
                // select time 2
                
                // update text
                d3.select("#TextExplain")
                    .text("Once the voltage reaches Action Potential at positive 40 mV, the Axon Hillock fires a wave of ions down the axon, sending a signal to the Terminal Buttons.");
            });
            
        d3.selectAll(".channel")
            .on("click", function () {
                // select time 3
                
                // update text
                d3.select("#TextExplain")
                    .text("Without added boosts along the way, the chemical wave of ions in the axon body would never travel the length of the neuron - some human neurons can be several feet long! So, in between the glial cells, the axon body is covered in more sodium ion channels. When the wave reaches the channels, more ions flood in, boosting the wave along the next interval.")
            });
        
        
        d3.selectAll(".cascade")
            .on("click", function () {
                // Select Time 4
                // update text
                d3.select("#TextExplain")
                .text("Once the ion charge wave reaches the other side of the axon, it triggers a massive chemical cascade that releases more neurotransmitters to other dendritic branches. Meanwhile, in the Axon Hillock, the voltage rebounds down to -90 mV. This period is called the Refractory Period. This makes it harder for the neuron to fire for a brief period, until it rebalances to the resting potential of -70.")});
        
    }
        else {
            // hide all images
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
            
        d3.selectAll("#TextExplain")
            .text("Voltage Levels during Action Potential Event");
        
        }
        
    
}