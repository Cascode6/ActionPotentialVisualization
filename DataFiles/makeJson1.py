
voltages = [-70, -70, -70, -55, 40, -40, -70, -90, -80, -75, -70];

time = [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5];

descriptions = [
    "Resting State",
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
    print(time[i])
    i = i + 1
    
    
FILENAME = "voltages.json"

import json

json.dump({"points":data}, open(FILENAME, "w"))