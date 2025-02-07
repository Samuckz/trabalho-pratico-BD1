package com.cefetmg.reserva_facil_laboratorios.repositories;

import com.cefetmg.reserva_facil_laboratorios.models.Laboratorio;
import com.cefetmg.reserva_facil_laboratorios.services.dtos.response.ReservaPorLabResponse;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface LaboratorioRepository extends JpaRepository<Laboratorio, Long> {

    Optional<Laboratorio> findByPredioAndSala(Integer predio, Integer sala);

    @Query(value = """
            SELECT l.nome
                   , COUNT(r.id_laboratorio) AS total_reservas
            FROM tb_laboratorios l
            LEFT JOIN tb_reservas r ON l.id = r.id_laboratorio
            GROUP BY l.nome;
            """, nativeQuery = true)
    List<ReservaPorLabResponse> buscarReservasPorLaboratorio();
}
