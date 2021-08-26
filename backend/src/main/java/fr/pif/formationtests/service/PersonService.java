package fr.pif.formationtests.service;

import fr.pif.formationtests.model.Person;
import fr.pif.formationtests.repository.PersonRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PersonService {
    private static final Logger log = LoggerFactory.getLogger(PersonService.class);

    private final PersonRepository personRepository;

    public PersonService(PersonRepository personRepository) {
        this.personRepository = personRepository;
    }

    public List<Person> findAllPersons() {
        return personRepository.findAll();
    }

    public Person getPersonById(Long id) {
        return personRepository.getById(id);
    }

    public Person insertPerson(Person person) {
        if(person.getAddress1().length() > 10) {
            person.setAddress1(person.getAddress1().substring(0, 10));
        }
        if(person.getAddress2().length() > 100) {
            person.setAddress2(person.getAddress2().substring(0, 100));
        }
        return personRepository.save(person);
    }
}
