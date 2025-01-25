package com.cefetmg.reserva_facil_laboratorios.models;

import com.cefetmg.reserva_facil_laboratorios.models.pk.ReservasPK;
import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "TB_RESERVAS")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Reservas {
  @EmbeddedId private ReservasPK reservasPK;
}
