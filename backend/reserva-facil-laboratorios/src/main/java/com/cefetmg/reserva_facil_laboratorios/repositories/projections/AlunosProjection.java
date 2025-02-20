package com.cefetmg.reserva_facil_laboratorios.repositories.projections;

import java.time.LocalDate;

public interface AlunosProjection {
    Long getMatricula();

    String getNome();

    LocalDate getDataNascimento();

    Integer getCurso();
}
