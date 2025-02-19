package com.cefetmg.reserva_facil_laboratorios.repositories.projections;

import java.time.LocalDateTime;

public interface ReservaResponse {
    Long getId();
    LocalDateTime getHorario();
    String getLaboratorio();
    Integer getPredio();
    Integer getSala();
    String getDisciplina();

}
