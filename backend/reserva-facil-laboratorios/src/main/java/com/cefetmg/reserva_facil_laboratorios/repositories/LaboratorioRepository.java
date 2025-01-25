package com.cefetmg.reserva_facil_laboratorios.repositories;

import com.cefetmg.reserva_facil_laboratorios.models.Laboratorio;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LaboratorioRepository extends JpaRepository<Laboratorio, Long> {}
