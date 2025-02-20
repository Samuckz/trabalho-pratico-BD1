package com.cefetmg.reserva_facil_laboratorios.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Entity
@Table(name = "TB_RESERVAS")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Reservas {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;
  private Long idLaboratorio;
  private Long codigoDisciplina;
  @Column(name = "agendamento", columnDefinition = "TIMESTAMP")
  private LocalDateTime agendamento;
}
