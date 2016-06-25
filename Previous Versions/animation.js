function Animate(xScale, yScale) {
    function f0() {
        // time set
        d3.selectAll("#Time_0")
                    .transition()
                    .attr("fill", "red")
                    .attr("r", 20);
        // move numbers
        d3.selectAll("text#Time_0")
            .transition()
            .attr("font-size", "18px")
            .attr("fill", "red")
            .attr("x", function(d, i){return xScale(d.Time) + 25;})
            .attr("y", function(d){return yScale(d.Voltage) + 5;});
                    
        // text set
        d3.selectAll("#TextExplain")
            .text("Stimulus Applied, and charge begins to build");
            
        // line set
        d3.selectAll("#n_0")
            .transition()
            .attr("fill", "red")
            .attr("stroke", "red");
            
        
    }
    function f1() {
        // remove last
        d3.selectAll("#Time_0")
                    .transition()
                    .attr("fill", "lightblue")
                    .attr("r", 7);
        // return numbers
        d3.selectAll("text#Time_0")
            .transition()
            .attr("font-size", "11px")
            .attr("fill", "lightblue")
            .attr("x", function(d, i){return xScale(d.Time) + 7;})
            .attr("y", function(d){return yScale(d.Voltage) + 5;})
        
        // update new
                d3.selectAll("#Time_1")
                    .transition()
                    .attr("fill", "red")
                    .attr("r", 20);
        // move numbers
        d3.selectAll("text#Time_1")
            .transition()
            .attr("font-size", "18px")
            .attr("fill", "red")
            .attr("x", function(d, i){return xScale(d.Time) + 25;})
            .attr("y", function(d){return yScale(d.Voltage) + 5;});
        
        // add ions
        d3.selectAll("#ion_1")
            .transition()
            .attr("fill", "lightblue");
        
        
        
            
    }
    function f2() {
        // remove time
        d3.selectAll("#Time_1")
                    .transition()
                    .attr("fill", "lightblue")
                    .attr("r", 7);
        // return numbers 
        d3.selectAll("text#Time_1")
            .transition()
            .attr("font-size", "11px")
            .attr("fill", "lightblue")
            .attr("x", function(d, i){return xScale(d.Time) + 7;})
            .attr("y", function(d){return yScale(d.Voltage) + 5;})
        // remove line
                d3.selectAll("#n_0")
                    .transition()
                    .attr("fill", "none")
                    .attr("stroke", "none");
                    
                    
        // update time
        d3.selectAll("#Time_2")
                    .transition()
                    .attr("fill", "red")
                    .attr("r", 20);
        // move numbers
        d3.selectAll("text#Time_2")
            .transition()
            .attr("font-size", "18px")
            .attr("fill", "red")
            .attr("x", function(d, i){return xScale(d.Time) + 25;})
            .attr("y", function(d){return yScale(d.Voltage) + 5;});
        
        // update line
        d3.selectAll("#n_1")
                    .transition()
                    .attr("fill", "red")
                    .attr("stroke", "red");
            
       
        // add ions
        d3.selectAll("#ion_3")
                    .transition()
                    .attr("fill", "lightblue");
                    
                    
        
        // text update
        d3.selectAll("#TextExplain")
            .text("Once the Axon Hillock depolarizes to +40mv...");
        
    }
    
    function f3() {
        // remove last
        d3.selectAll("#Time_2")
                    .transition()
                    .attr("fill", "lightblue")
                    .attr("r", 7);
        // return numbers 
        d3.selectAll("text#Time_2")
            .transition()
            .attr("font-size", "11px")
            .attr("fill", "lightblue")
            .attr("x", function(d, i){return xScale(d.Time) + 7;})
            .attr("y", function(d){return yScale(d.Voltage) + 5;})
        
        // remove line
                d3.selectAll("#n_1")
                    .transition()
                    .attr("fill", "none")
                    .attr("stroke", "none");
                    
                    
        // update time
        d3.selectAll("#Time_3")
                    .transition()
                    .attr("fill", "red")
                    .attr("r", 20);
        // move numbers
        d3.selectAll("text#Time_3")
            .transition()
            .attr("font-size", "18px")
            .attr("fill", "red")
            .attr("x", function(d, i){return xScale(d.Time) + 25;})
            .attr("y", function(d){return yScale(d.Voltage) + 5;});
                    
        
        // update line
        d3.selectAll("#n_2")
                    .transition()
                    .attr("fill", "red")
                    .attr("stroke", "red");
        
        
                
        // add ions
        d3.selectAll("#ion_2")
                    .transition()
                    .attr("fill", "lightblue");
        
    }
    function f4() {
        
        
                // remove the ions
                d3.selectAll("#ion_1")
                        .transition()
                        .attr("fill", "none");
                    d3.selectAll("#ion_2")
                        .transition()
                        .attr("fill", "none");
                    d3.selectAll("#ion_3")
                        .transition()
                        .attr("fill", "none");
                d3.selectAll("#TextExplain")
                    .text("The Neuron Fires!");
                    
                // these rays indicate the axon hillock has been activated
                d3.selectAll("#Activation")
                    .transition()
                    .attr("fill", "gold");
                    
                // first arrow
                d3.selectAll("#arrow_1")
                        .transition()
                        .attr("fill", "lightblue");
                
    }
    function f5() {
        // remove last time
        d3.selectAll("#Time_3")
                    .transition()
                    .attr("fill", "lightblue")
                    .attr("r", 7);
        // return numbers 
        d3.selectAll("text#Time_3")
            .transition()
            .attr("font-size", "11px")
            .attr("fill", "lightblue")
            .attr("x", function(d, i){return xScale(d.Time) + 7;})
            .attr("y", function(d){return yScale(d.Voltage) + 5;})
        
        // remove line
                d3.selectAll("#n_2")
                    .transition()
                    .attr("fill", "none")
                    .attr("stroke", "none");
                    
                    
        // add new
        d3.selectAll("#Time_4")
                    .transition()
                    .attr("fill", "red")
                    .attr("r", 20);
        // move numbers
        d3.selectAll("text#Time_4")
            .transition()
            .attr("font-size", "18px")
            .attr("fill", "red")
            .attr("x", function(d, i){return xScale(d.Time) + 25;})
            .attr("y", function(d){return yScale(d.Voltage) + 5;});
        
        // remove activation bolts
                d3.selectAll("#Activation")
                    .transition()
                    .attr("fill", "none");
        // remove arrow
                d3.selectAll("#arrow_1")
                        .transition()
                        .attr("fill", "none");
        // new arrow
                d3.selectAll("#arrow_2")
                        .transition()
                        .attr("fill", "lightblue");
                
        
                    
    }
    function f6() {
        // remove arrow
                d3.selectAll("#arrow_2")
                        .transition()
                        .attr("fill", "none");
        // new arrow
                d3.selectAll("#arrow_3")
                        .transition()
                        .attr("fill", "lightblue");
        // sodium-gated channel activated!
            d3.selectAll("#l_bolt")
                .transition()
                .attr("fill", "gold");
        // update text
        d3.select("#TextExplain")
            .text("Voltage-Gated Sodium Channels push the charge along the axon")
        
        
    }
    function f7() {
        
        // time remove
            d3.selectAll("#Time_4")
                    .transition()
                    .attr("fill", "lightblue")
                    .attr("r", 7);
        // return numbers 
        d3.selectAll("text#Time_4")
            .transition()
            .attr("font-size", "11px")
            .attr("fill", "lightblue")
            .attr("x", function(d, i){return xScale(d.Time) + 7;})
            .attr("y", function(d){return yScale(d.Voltage) + 5;})
                    
        // update time
            d3.selectAll("#Time_5")
                .transition()
                .attr("fill", "red")
                .attr("r", 20);
        // move numbers
        d3.selectAll("text#Time_5")
            .transition()
            .attr("font-size", "18px")
            .attr("fill", "red")
            .attr("x", function(d, i){return xScale(d.Time) + 25;})
            .attr("y", function(d){return yScale(d.Voltage) + 5;});
        
       
        // remove bolt
            d3.selectAll("#l_bolt")
                .transition()
                .attr("fill", "none");
        
        // remove arrow
            d3.selectAll("#arrow_3")
                    .transition()
                    .attr("fill", "none");
        // new arrow
                d3.selectAll("#arrow_4")
                        .transition()
                        .attr("fill", "lightblue");
                
    }
    function f8() {
        
        // sodium-gated channel activated
                d3.selectAll("#m_bolt")
                    .transition()
                    .attr("fill", "gold");
        // remove arrow
            d3.selectAll("#arrow_4")
                    .transition()
                    .attr("fill", "none");
        // new arrow
                d3.selectAll("#arrow_5")
                        .transition()
                        .attr("fill", "lightblue");
    }
    function f9() {
        // remove time
        d3.selectAll("#Time_5")
                    .transition()
                    .attr("fill", "lightblue")
                    .attr("r", 7);
        // move numbers
        d3.selectAll("text#Time_5")
            .transition()
            .attr("font-size", "11px")
            .attr("fill", "lightblue")
            .attr("x", function(d, i){return xScale(d.Time) + 7;})
            .attr("y", function(d){return yScale(d.Voltage) + 5;})
        // update time
        d3.selectAll("#Time_6")
                    .transition()
                    .attr("fill", "red")
                    .attr("r", 20);
        // move numbers
        d3.selectAll("text#Time_6")
            .transition()
            .attr("font-size", "18px")
            .attr("fill", "red")
            .attr("x", function(d, i){return xScale(d.Time) + 25;})
            .attr("y", function(d){return yScale(d.Voltage) + 5;});
        // update line
        d3.selectAll("#n_3")
            .transition()
            .attr("fill", "red")
            .attr("stroke", "red");
                    
        // channel closed
                d3.selectAll("#m_bolt")
                    .transition()
                    .attr("fill", "none");
        
        // show next arrow
        d3.selectAll("#arrow_6")
                .transition()
                .attr("fill", "lightblue"); 
                
        // remove last arrow
        d3.selectAll("#arrow_5")
                .transition()
                .attr("fill", "none");
    }
    function f10() {
        
        // remove last arrow
                d3.selectAll("#arrow_6")
                    .transition()
                    .attr("fill", "none");
        // show next arrow
                d3.selectAll("#arrow_7")
                    .transition()
                    .attr("fill", "lightblue");
                    
        // sodium-gated channel boost
        d3.selectAll("#r_bolt")
            .transition()
            .attr("fill", "gold");
                
                
    }
    function f11() {
        // remove last time
        d3.selectAll("#Time_6")
                    .transition()
                    .attr("fill", "lightblue")
                    .attr("r", 7);
        // remove numbers
        d3.selectAll("text#Time_6")
            .transition()
            .attr("font-size", "11px")
            .attr("fill", "lightblue")
            .attr("x", function(d, i){return xScale(d.Time) + 7;})
            .attr("y", function(d){return yScale(d.Voltage) + 5;})
        
        // update time
        d3.selectAll("#Time_7")
                    .transition()
                    .attr("fill", "red")
                    .attr("r", 20);
        // move numbers
        d3.selectAll("text#Time_7")
            .transition()
            .attr("font-size", "18px")
            .attr("fill", "red")
            .attr("x", function(d, i){return xScale(d.Time) + 25;})
            .attr("y", function(d){return yScale(d.Voltage) + 5;});
        
        // remove line
        d3.selectAll("#n_3")
            .attr("fill", "none")
            .attr("stroke", "none");
        
        
        // remove bolt
            d3.selectAll("#r_bolt")
                    .transition()
                    .attr("fill", "none");
        
        // remove last arrow
                d3.selectAll("#arrow_7")
                    .transition()
                    .attr("fill", "none");
        
        // next arrow
        d3.selectAll("#arrow_8")
                    .transition()
                    .attr("fill", "lightblue");
        
    }
    function f12() {
        
        // remove last arrow
        d3.selectAll("#arrow_8")
                    .transition()
                    .attr("fill", "none");
        // show last arrow
        d3.selectAll("#arrow_9")
                    .transition()
                    .attr("fill", "lightblue");
    }
        
        
    function f13() {
        // remove last time
        d3.selectAll("#Time_7")
                    .transition()
                    .attr("fill", "lightblue")
                    .attr("r", 7);
        // remove numbers
        d3.selectAll("text#Time_7")
            .transition()
            .attr("font-size", "11px")
            .attr("fill", "lightblue")
            .attr("x", function(d, i){return xScale(d.Time) + 7;})
            .attr("y", function(d){return yScale(d.Voltage) + 5;})
        
        
        // time update
                d3.selectAll("#Time_8")
                    .transition()
                    .attr("fill", "red")
                    .attr("r", 20);
        // move numbers
        d3.selectAll("text#Time_8")
            .transition()
            .attr("font-size", "18px")
            .attr("fill", "red")
            .attr("x", function(d, i){return xScale(d.Time) + 25;})
            .attr("y", function(d){return yScale(d.Voltage) + 5;});
        // remove last arrow
        d3.selectAll("#arrow_9")
                    .transition()
                    .attr("fill", "none");
        // signal arrives at Terminal
        d3.selectAll("#Signal")
                    .transition()
                    .attr("fill", "plum");
        // update text
        d3.select("#TextExplain")
            .text("Ion Wave reaches Terminal Buttons, initiates release of more Neurotransmitters")
        
    }
    function f14() {
        // remove last time
        d3.selectAll("#Time_8")
                    .transition()
                    .attr("fill", "lightblue")
                    .attr("r", 7);
        // remove numbers
        d3.selectAll("text#Time_8")
            .transition()
            .attr("font-size", "11px")
            .attr("fill", "lightblue")
            .attr("x", function(d, i){return xScale(d.Time) + 7;})
            .attr("y", function(d){return yScale(d.Voltage) + 5;})
        
        // time update
                d3.selectAll("#Time_9")
                    .transition()
                    .attr("fill", "red")
                    .attr("r", 20);
        // move numbers
        d3.selectAll("text#Time_9")
            .transition()
            .attr("font-size", "18px")
            .attr("fill", "red")
            .attr("x", function(d, i){return xScale(d.Time) + 25;})
            .attr("y", function(d){return yScale(d.Voltage) + 5;});
        // last line
        // line set
        d3.selectAll("#n_0")
            .transition()
            .attr("fill", "red")
            .attr("stroke", "red");
            
        
        
    }
        
    function f15() {
        // clear all
        d3.selectAll("#Time_9")
                    .transition()
                    .attr("fill", "lightblue")
                    .attr("r", 7);
        // remove numbers
        d3.selectAll("text#Time_9")
            .transition()
            .attr("font-size", "11px")
            .attr("fill", "lightblue")
            .attr("x", function(d, i){return xScale(d.Time) + 7;})
            .attr("y", function(d){return yScale(d.Voltage) + 5;})
        // remove signal
        d3.selectAll("#Signal")
                    .transition()
                    .attr("fill", "none");
        
        // remove line
        d3.selectAll("#n_0")
            .transition()
            .attr("fill", "none")
            .attr("stroke", "none");
            
        // update text
        d3.select("#TextExplain")
            .text("Diagram of a Neuron")
        
        
    }
        
    
    function timedUpdate() {
                setTimeout(f0, 0)
                setTimeout(f1, 1000)
                setTimeout(f2, 2000)
                setTimeout(f3, 3000)
                setTimeout(f4, 3500)
                setTimeout(f5, 4000)
                setTimeout(f6, 4500)
                setTimeout(f7, 5000)
                setTimeout(f8, 5500)
                setTimeout(f9, 6000)
                setTimeout(f10, 6500)
                setTimeout(f11, 7000)
                setTimeout(f12, 7500)
                setTimeout(f13, 8000)
                setTimeout(f14, 9000)
                setTimeout(f15, 15000)
            }
    timedUpdate();
}