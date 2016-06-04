# ActionPotentialVisualization
D3 animation of a neuron's dendritic voltage during the action potential event.


First Version: neuronindex1.html

Feedback on neuronindex1_5.html:

  "Graph should have axes, label, etc, and draw the lines at important neuron events (action potential, resting state) when you highlight a time index at that state, rather than having them there all the time. Label the line with the state name, and label the dots with the number to make it more readable. Also, make the dots bigger." - Reviewer 1
  
  "Make the neuron closer to the graph and slow the animation down - its hard to follow the graph change and the animation. And maybe use two buttons - one to play the animation, one to reveal all steps with some explanatory text?" - Reviewer 2

  "It's a little disjointed right now - if the voltage levels are related to the ions in the diagram, they should match. That would make the time-highlight in red a little less cartoonish. Also, move the numbers so we can still see them when the time bubbles change size." - Reviewer 3
  
These suggestions were all addressed in neuronindex2. To accommodate the animation and the click-sensitivity features, I separated them into two additional JS files, and set up event handlers to call them in the main HTML file. I made the suggested color changes, arrangement changes and labelling changes, and insured that my graphics, title and text explanation would remain centered on the page. 

Resources used:   
http://editor.method.ac/
http://www.w3schools.com/js/js_switch.asp  
https://bost.ocks.org/mike/transition/  
https://github.com/d3/d3-timer  
http://www.w3schools.com/js/js_timing.asp  
http://www.w3schools.com/js/tryit.asp?filename=tryjs_timing2  
