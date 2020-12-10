//VERSION=3

if (dataMask == 0) return [0,0,0,0];

//ndvi
var val = (B08-B04)/(B08+B04);


if (val<-1.1) return [0,0,0,1];
else if (val<-0.2) return [0.75,0.75,0.75,1];
else if (val<-0.1) return [0.86,0.86,0.86,1];
else if (val<0) return [1,1,0.88,1];
else if (val<0.025) return [1,0.98,0.8,1];
else if (val<0.05) return [0.93,0.91,0.71,1];
else if (val<0.075) return [0.87,0.85,0.61,1];
else if (val<0.1) return [0.8,0.78,0.51,1];
else if (val<0.125) return [0.74,0.72,0.42,1];
else if (val<0.15) return [0.69,0.76,0.38,1];
else if (val<0.175) return [0.64,0.8,0.35,1];
else if (val<0.2) return [0.57,0.75,0.32,1];
else if (val<0.25) return [0.5,0.7,0.28,1];
else if (val<0.3) return [0.44,0.64,0.25,1];
else if (val<0.35) return [0.38,0.59,0.21,1];
else if (val<0.4) return [0.31,0.54,0.18,1];
else if (val<0.45) return [0.25,0.49,0.14,1];
else if (val<0.5) return [0.19,0.43,0.11,1];
else if (val<0.55) return [0.13,0.38,0.07,1];
else if (val<0.6) return [0.06,0.33,0.04,1];
else return [0,0.27,0,1];
