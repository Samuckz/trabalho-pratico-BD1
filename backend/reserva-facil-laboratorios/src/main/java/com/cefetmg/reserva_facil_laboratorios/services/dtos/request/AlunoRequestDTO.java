package com.cefetmg.reserva_facil_laboratorios.services.dtos.request;

import com.cefetmg.reserva_facil_laboratorios.utils.enums.CursosEnum;

import java.time.LocalDate;

public record AlunoRequestDTO(
        String nome, LocalDate dataNascimento, CursosEnum curso
) {
}
