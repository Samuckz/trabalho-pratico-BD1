package com.cefetmg.reserva_facil_laboratorios.repositories.projections;

public interface DisciplinaProjection {
    Long getCodigo();

    String getNome();

    Long getProfessorId();

    Integer getQntdAlunos();
}
