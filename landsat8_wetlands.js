// Detecting the Presence of Water in Wetlands with Landsat-8 Satellite
//
// General formula: IF B05<0.1735 AND B07<0.1035 THEN Water ELSE NoWater
//
// URL https://www.indexdatabase.de/db/xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx//

return B05<0.1735&&B07<0.1035?[51/255,68/255,170/255]:[B04*5,B03*5,B02*5];
