## US Map Visualization for Time-Use Data in R

### Installation

```
devtools::install_github("Kolpashnikova/package_R_usamap")

library(usamap)
```

### Description
Draws an interactive US map for state-level data.

### Usage
```
usamap(df)
usamap(df, startCOlor = NULL, endCOlor = NULL)
```

### Arguments
*df*	
json data with keys as two-letter state codes and values.

*startColor*	
the RGB color list for the lower values of gradient. The default is blue.

*endColor*	
the RGB color list for higher values of gradient. The default is red.

### How it looks like

You can try the interactive demo here: (https://kolpashnikova.github.io/usmap)

![Transitions](https://github.com/Kolpashnikova/package_R_usmap/blob/main/examples/usmap.png)

### References
Kolpashnikova, Kamila. (2022). US Map Visualization for Time-Use Data in R. Toronto,ON: York University.
