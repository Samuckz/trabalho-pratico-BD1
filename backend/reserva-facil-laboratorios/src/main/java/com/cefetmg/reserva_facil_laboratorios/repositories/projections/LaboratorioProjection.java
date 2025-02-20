package com.cefetmg.reserva_facil_laboratorios.repositories.projections;

public interface LaboratorioProjection {
    Long getId();
    String getNome();
    Integer getCapacidadeMaxima();
    Integer getPredio();
    Integer getSala();
}
