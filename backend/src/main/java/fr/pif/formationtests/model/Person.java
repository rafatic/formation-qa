package fr.pif.formationtests.model;

import lombok.Data;

import javax.persistence.*;
import java.time.LocalDate;

@Data
@Entity
public class Person {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Long id;

    @Column(nullable = false)
    private String lastname;
    @Column(nullable = false)
    private String firstname;

    @Column(columnDefinition = "boolean default false")
    private Boolean minor = false;

    @Column(length = 10)
    private String address1;
    @Column(length = 100)
    private String address2;

    private Double weight;

    private Double height;

    @Column(nullable = false)
    private LocalDate birthdate;



}
