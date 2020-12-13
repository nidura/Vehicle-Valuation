package lk.mjmotors.valuation.controller;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.rest.core.annotation.RestResource;

import lk.mjmotors.valuation.entity.Valuation;

/**
 * @author Thilina Kalum
 * @since 12/13/2020
 */
@RestResource(path = "/valuation")
public interface ValuationRepository extends MongoRepository<Valuation, String > {

}
