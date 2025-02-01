package com.cefetmg.reserva_facil_laboratorios.services.impl.reservas.validations.professor;

import com.cefetmg.reserva_facil_laboratorios.services.dtos.request.ProfessorRequestDTO;
import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.time.Period;

@Component
public class ValidarIdadeProfessorValidation implements ProfessorValidation{
    @Override
    public void validar(ProfessorRequestDTO professorRequestDTO) {
        int idadeProfessor = Period.between(professorRequestDTO.dataNascimento(), LocalDate.now()).getYears();
        if(idadeProfessor < 25){
            throw new RuntimeException("Um professor deve ter ao menos 25 anos para ser cadastrado");
        }
    }
}
