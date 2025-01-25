package com.cefetmg.reserva_facil_laboratorios.repositories;

import com.cefetmg.reserva_facil_laboratorios.models.Reservas;
import com.cefetmg.reserva_facil_laboratorios.models.pk.ReservasPK;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReservasRepository extends JpaRepository<Reservas, ReservasPK> {}
