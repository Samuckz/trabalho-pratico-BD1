package com.cefetmg.reserva_facil_laboratorios.models.pk;

import jakarta.persistence.Embeddable;
import java.time.LocalDateTime;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Embeddable
public class ReservasPK {
  private Long idLaboratorio;
  private Long codigoDisciplina;
  private LocalDateTime agendamento;
}
