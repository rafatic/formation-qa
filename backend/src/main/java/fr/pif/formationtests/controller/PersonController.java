package fr.pif.formationtests.controller;

import fr.pif.formationtests.model.Person;
import fr.pif.formationtests.service.PersonService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
public class PersonController {
    private static final Logger log = LoggerFactory.getLogger(PersonController.class);

    private final PersonService personService;


    public PersonController(PersonService personService) {
        this.personService = personService;
    }

    @GetMapping("/persons")
    public List<Person> findAllPersons() {
        return personService.findAllPersons();
    }

    @GetMapping("/persons/{id}")
    public Person findAllPersons(Long id) {
        return personService.getPersonById(id);
    }

    @PostMapping("/persons")
    public Person insertPerson(Person person) {
        log.info("Saving person : " + person);
        return personService.insertPerson(person);
    }
}
