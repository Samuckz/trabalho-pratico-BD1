package com.cefetmg.reserva_facil_laboratorios.repositories;

import com.cefetmg.reserva_facil_laboratorios.models.Laboratorio;
import com.cefetmg.reserva_facil_laboratorios.repositories.projections.LaboratorioProjection;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface LaboratorioRepository extends JpaRepository<Laboratorio, Long> {

    Optional<Laboratorio> findByPredioAndSala(Integer predio, Integer sala);

    @Query(value = """
            SELECT l.id,
                   l.nome,
                   l.capacidade_maxima as capacidadeMaxima,
                   l.predio,
                   l.sala
            FROM tb_laboratorios l
            LEFT JOIN tb_reservas r ON l.id = r.id_laboratorio
            WHERE r.id_laboratorio IS NULL;  
            """, nativeQuery = true)
    List<LaboratorioProjection> listarLaboratoriosSemReserva();
}
