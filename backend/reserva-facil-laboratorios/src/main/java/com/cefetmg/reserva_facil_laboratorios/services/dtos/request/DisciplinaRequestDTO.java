package com.cefetmg.reserva_facil_laboratorios.services.dtos.request;

import com.cefetmg.reserva_facil_laboratorios.utils.enums.CursosEnum;

public record DisciplinaRequestDTO(
        String nome, CursosEnum curso, Long professorId
) {
}
