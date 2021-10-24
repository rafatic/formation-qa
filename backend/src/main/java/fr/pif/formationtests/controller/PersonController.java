package fr.pif.formationtests.controller;

import fr.pif.formationtests.model.Person;
import fr.pif.formationtests.service.PersonService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class PersonController {
    private static final Logger log = LoggerFactory.getLogger(PersonController.class);

    private final PersonService personService;


    public PersonController(PersonService personService) {
        this.personService = personService;
    }

    @RequestMapping(path = "/persons", produces = "application/json", method= RequestMethod.GET)
    public List<Person> findAllPersons() {
        return personService.findAllPersons();
    }


    @RequestMapping(path = "/persons/{id}", produces="application/json", method= RequestMethod.GET)
    @ResponseBody
    public Person findAllPersons(@PathVariable("id") Long id) {
        return personService.getPersonById(id);
    }

    @RequestMapping(path = "/persons", consumes = "application/json", method= RequestMethod.POST)
    public Person insertPerson(@RequestBody Person person) {
        log.info("Saving person : " + person);
        return personService.insertPerson(person);
    }

    @RequestMapping(path = "/persons", consumes = "application/json", method= RequestMethod.PUT)
    public Person updatePerson(@RequestBody Person person) {
        log.info("Updating person : " + person);
        return personService.updatePerson(person);
    }
}
