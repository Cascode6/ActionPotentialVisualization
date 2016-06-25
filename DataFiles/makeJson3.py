
voltages = [-70, -70, -55, 40, -40, -70, -90, -80, -75, -70];

time = [0, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5];

descriptions = [
    "Resting State",
    "Stimulus Applied",
    "Threshold Potential",
    "Action Potential",
    "Repolarization",
    "Repolarization",
    "Refractory Period",
    "Refractory Period",
    "Refractory Period",
    "Resting State"
    
]

data = []

n = len(voltages)
i = 0
while i < n:
    
    data.append(
        {
            "Voltage": voltages[i],
            "Time":time[i],
            "Description":descriptions[i]
        }
    )
    i = i + 1
   
   
lines = [
    {"state":"Resting State",
    "value":-70},
    {"state":"Threshold Potential",
    "value":-55},
    {"state":"Action Potential",
    "value":40},
    {"state":"Refractory Period",
    "value":-90}
]



text = {
    "neuron":{
        "header":"The Neuron Cell",
        "body":"This diagram shows the steps of a neuron reaching Action Potential. Click each part of the neuron activation cycle to learn more! Click 'Learn!' again to reset."
        },
    "glial":{
        "header":"Myelin Sheath",
        "body":"Along the axon body, smaller cells called Schwann cells wrap around the axon. These myelin sheaths provide structural support to the neuron and insulate the axon, allowing signals to travel farther."
        },
    "axon":{
        "header":"The Axon",
        "body":"This is the axon body. When the neuron fires, the signal travels along the length of the Axon body."
    },
    "terminal":{
        "header":"Terminal Buttons",
        "body":"After a signal is sent, it triggers the release of neurotransmitters through another series of branching structures called Terminal Buttons. These form joints, or synapses, with the dendrites of other neurons."
    },
    "dendrite":{
        "header":"Dendrite Branches",
        "body":"A neuron receives signals through a series of branching, tree-like structures called Dendrites. These are stimulated by neurotransmitters - such as Dopamine, Oxytocin and Serotonin - and funnel that stimulation to the Axon Hillock, shown here."
    },
    "ion":{
        "header":"Sodium Ions",
        "body":"As neurotransmitters like dopamine and serotonine stimulate the dendrite branches, they open channels on the branches. Ions flood the dendrite through these channels and collect in the Axon Hillock."
    },
    "hillock":{
        "header":"Axon Hillock",
        "body":"As more and more ions collect, the voltage at the Axon Hillock increases from resting -70 mV. Once it reaches Threshold Potential, at -55 mV, the axon becomes more sensitive, and the voltage increases much more quickly."
    },
    "channel":{
        "header":"Voltage-Gated Sodium-Potassium Pumps",
        "body":"Without added boosts along the way, the chemical wave of ions in the axon body would never travel the length of the neuron - some human neurons can be several feet long! So, in between the glial cells, the axon body is covered in more sodium ion channels. When the wave reaches the channels, more ions flood in, boosting the wave along the next interval."
    },
    "fire":{
        "header":"Activation Achieved!",
        "body":"Once the voltage reaches Action Potential at positive 40 mV, the Axon Hillock fires a wave of ions down the axon, sending a signal to the Terminal Buttons."
    },
    "cascade":{
        "header":"Neurotransmitters Released",
        "body":"Once the ion charge wave reaches the other side of the axon, it triggers a massive chemical cascade that releases more neurotransmitters to other dendritic branches."
    },
    "freeze":{
        "header":"Close-Up Look",
        "body":"Click on the highlighted images to learn more about each part of the Neuron Fire event. Double-click to close the window."
    },
    "Time_0":{
        "header":"Time: 0 mS",
        "body":"The axon hillock is at Resting State, of -70 mV. This is the polarity the axon hillock tries to maintain most of the time."
    },
    "Time_1":{
        "header":"Time: 1 mS - Stimulus",
        "body":"A stimulus is applied to the neuron. Neurotransmitters open Chemical-Gated Channels on the dendrite branches, allowing sodium ions to flood into the axon hillock."
    },
    "Time_2":{
        "header":"Time: 1.5 mS - Threshold Potential",
        "body":"As ions flood in, the axon hillock depolarizes. Once it reaches the Threshold Potential at -55 mV, the neuron takes in ions at a much faster rate, and a signal fire becomes much more likely."
    },
    "Time_3":{
        "header":"Time: 2 mS - Activation Potential",
        "body":"So many ions have flooded the axon hillock that the polarity has reached +40 mV, the Activation Potential. The neuron fires!"
    },
    "Time_4":{
        "header":"Time: 2.5 mS",
        "body":"After the fire event, a wave of ions is sent down the axon body. Meanwhile, the Axon Hillock begins to rapidly repolarize."
    },
    "Time_5":{
        "header":"Time: 3 mS",
        "body":"The Axon Hillock reaches and passes the Resting State at -70. Meanwhile, Voltage-Gated Channels that line the axon body pump more ions in, fueling the charge's movement."
    },
    "Time_6":{
        "header":"Time: 3.5 mS - Refractory Period",
        "body":"The voltage reaches -90 mV in the axon hillock. This period, called the Refractory Period, makes it harder for the neuron to fire for a brief period - until it rebalances to the resting potential of -70."
    },
    "Time_7":{
        "header":"Time: 4 mS - Signal Arrives",
        "body":"The time it takes a neuron to send a signal is dependent on the length of the neuron, but typically it only takes a few milliseconds to send a signal along the axon body."
    },
    "Time_8":{
        "header":"Time: 4.5 mS",
        "body":"Once the ion charge reaches the Terminal Buttons, it triggers the release of more neurotransmitters - stimulating other neurons to fire."
    },
    "Time_9":{
        "header":"Time: 5 mS",
        "body":"The fire event is complete, and the axon hillock has returned to the resting state of -70 mV. The neuron is ready to fire again."
    },
    
    
}


    
    
FILENAME = "voltages4.json"

import json

json.dump({"points":data, "lines":lines, "text":text}, open(FILENAME, "w"))