package lk.mjmotors.valuation.entity;

import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

/**
 * @author Thilina Kalum
 * @since 12/13/2020
 */
@Data
@Document("Valuation")
public class Valuation {
  private String id;
  private String reportNo;
  private String contactPerson;
  private String messrs;
  private boolean complianceWithCR;
  private boolean complianceWithFCR;

  private String timeOfInspection;
  private String placeOfInspection;
  private String regNo;
  private String make;
  private String model;
  private String classification;
  private String year;
  private String engNoOrMotorNo;
  private String chassis;
  private String dateOfReg;
  private String countryOfOrigin;
  private String bodyLength;
  private String doors;
  private String engineCapacity;

  private String odoMeterReading;
  private String date;
  private String name;
  private String preOwner;
  private String vendorOwner;

  private String size;
  private String sizeQc;
  private boolean checked;
  private boolean passed;
  private String rear;
  private String front;
  private String spare;

  private String img1;
  private String img2;
  private String img3;
  private String img4;

  private String engineMotor;
  private String typeOfFuel;
  private String fuelType;
  private String replacedOn;
  private String rebuiltOn;
  private String paintOrFinish;
  private String bodyColour;
  private String chassisOrUnderside;
  private String couchOrBodyWork;
  private String internalTrim;

  private String transmissionClutch;
  private String gearBox;
  private String shaftig;
  private String diff;
  private String gSelection;
  private String roadTestDoneOn;

  private String sStarter;
  private String vipers;
  private String obligatoryLights;
  private String horns;
  private String meters;

  private String mechanical;
  private String coachOrBodyWorks;
  private String dateOfImport;
  private String dateOfClearing;
  private String countryUsedIn;

  private String fuelCons;
  private String frontSuspension;
  private String rearSuspension;
  private String steering;
  private String footBrake;
  private String parkingBrake;
  private String repairNeedWithingAYear;
  private boolean bodyPartsReplaced;
  private boolean accidents;
  private boolean writeOffByInsurers;
  private String comments;
  private boolean impactNoGovernmentPolicies;
  private String justLow;
  private String seating;

  private String bodyParts;
  private String engineParts;
  private String accessories;
  private String extras;
  private String additionalComment;
  private String marketValues;
  private String marketValuesWord;
  private String forcedSaleValue;
  private String forcedSaleValueWord;
}