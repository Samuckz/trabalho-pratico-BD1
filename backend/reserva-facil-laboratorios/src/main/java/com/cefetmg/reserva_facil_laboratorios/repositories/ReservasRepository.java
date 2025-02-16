package com.cefetmg.reserva_facil_laboratorios.repositories;

import com.cefetmg.reserva_facil_laboratorios.models.Reservas;
import com.cefetmg.reserva_facil_laboratorios.models.pk.ReservasPK;
import com.cefetmg.reserva_facil_laboratorios.services.dtos.response.ReservaResponse;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

public interface ReservasRepository extends JpaRepository<Reservas, Long> {

    Optional<Reservas> findByIdLaboratorioAndCodigoDisciplinaAndAgendamento(
            Long idLaboratorio, Long codigoDisciplina, LocalDateTime agendamento
    );
    List<Reservas> findByIdLaboratorio(Long idLaboratorio);

    List<Reservas> findByCodigoDisciplina(Long codigoDisciplina);

    @Query(value = """
            SELECT r.id,
                r.agendamento AS horario,
                r.codigo_disciplina,
                r.id_laboratorio,
                l.nome AS laboratorio,
                l.predio AS predio,
                l.sala AS sala,
                d.nome AS disciplina
            FROM tb_reservas r
            INNER JOIN tb_laboratorios l ON r.id_laboratorio = l.id
            INNER JOIN tb_disciplinas d ON r.codigo_disciplina = d.codigo
            ORDER BY r.id
            """, nativeQuery = true)
    List<ReservaResponse> buscarDadosReserva();
}
