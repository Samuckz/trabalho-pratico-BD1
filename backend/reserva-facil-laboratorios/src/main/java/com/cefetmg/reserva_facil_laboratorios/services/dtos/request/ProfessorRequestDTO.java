package com.cefetmg.reserva_facil_laboratorios.services.dtos.request;

import com.cefetmg.reserva_facil_laboratorios.utils.enums.EspecialidadeProfessorEnum;

import java.time.LocalDate;

public record ProfessorRequestDTO(
        String nome, EspecialidadeProfessorEnum especialidade, LocalDate dataNascimento
) {
}
