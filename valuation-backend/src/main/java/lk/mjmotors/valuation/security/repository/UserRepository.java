package lk.mjmotors.valuation.security.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import lk.mjmotors.valuation.security.entities.User;

/** @author Kavish Manjitha Perera */
@Repository
public interface UserRepository extends MongoRepository<User, Long> {

  User findOneByUsername(String username);
}
