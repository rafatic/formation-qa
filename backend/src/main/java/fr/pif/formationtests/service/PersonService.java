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
        return personRepository.save(person);
    }

    public Person updatePerson(Person person) {
        Person sourcePerson = getPersonById(person.getId());

        sourcePerson.setFirstname(person.getFirstname());
        sourcePerson.setLastname(person.getLastname());
        sourcePerson.setAddress1(person.getAddress1());
        sourcePerson.setAddress2(person.getAddress2());
        sourcePerson.setMinor(person.getMinor());
        sourcePerson.setWeight(person.getWeight());
        sourcePerson.setHeight(person.getHeight());
        sourcePerson.setBirthdate(person.getBirthdate());
        personRepository.save(sourcePerson);
        return sourcePerson;
    }
}
