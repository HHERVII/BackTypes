

CREATE TABLE station_treatments (
    user VARCHAR(50)  NOT NULL,
     Treatment INT(11) NOT NULL, 
     Longitude FLOAT NOT NULL,
     Latitude FLOAT NOT NULL,
      SM_1 FLOAT NOT NULL ,
      SM_2 FLOAT NOT NULL,
      SM_3 FLOAT NOT NULL,
      Env_Temp FLOAT NOT NULL,
      RH FLOAT NOT NULL,
      CO2 FLOAT NOT NULL,
      Canopy_Temp FLOAT NOT NULL,
      CS_Temp FLOAT NOT NULL,
      Irrig_Pres_Rate FLOAT NOT NULL,
     Irrig_Pres_Time FLOAT NOT NULL,
     Date_Time DATETIME NOT NULL, 
    id INT(11) NOT NULL

)


INSERT INTO  station_treatments ( 
    user,
     Treatment,
     Longitude,
     Latitude,
      SM_1 ,
      SM_2,
      SM_3,
      Env_Temp ,
      RH,
      CO2 ,
      Canopy_Temp ,
      CS_Temp ,
      Irrig_Pres_Rate,
     Irrig_Pres_Time,
     Date_Time,
     id
)
VALUES ('HEIVER',12, -15.6,5.45,2.3256,1.254,2.25,35.25,95.5,2.3,2.2,25.2,152.2,12.25,  '2018-10-20',1);

