package com.cefetmg.reserva_facil_laboratorios.services.impl.reservas.validations.professor;

import com.cefetmg.reserva_facil_laboratorios.services.dtos.request.ProfessorRequestDTO;

public interface ProfessorValidation {
    public void validar(ProfessorRequestDTO professorRequestDTO);
}
