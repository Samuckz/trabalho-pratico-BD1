package com.cefetmg.reserva_facil_laboratorios.repositories.projections;

public interface MatriculaResponseDTO {
    Long getMatricula();
    String getNomeAluno();
    Long getCodigoDisciplina();
    String getNomeDisciplina();

    String getQntdAlunos();
}
