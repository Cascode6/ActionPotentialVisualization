
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

    
    
FILENAME = "voltages.json"

import json

json.dump({"points":data, "lines":lines}, open(FILENAME, "w"))