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
  private String regNo;
  private String make;
  private String type;
  private String year;
  private String engNoOrMotorNo;
  private String chassis;
  private String dateOfReg;
  private String countryOfOrigin;
  private String bodyLength;
}
