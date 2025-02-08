package com.cefetmg.reserva_facil_laboratorios.repositories;

import com.cefetmg.reserva_facil_laboratorios.models.Reservas;
import com.cefetmg.reserva_facil_laboratorios.models.pk.ReservasPK;
import com.cefetmg.reserva_facil_laboratorios.services.dtos.response.ReservaResponse;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ReservasRepository extends JpaRepository<Reservas, ReservasPK> {
    List<Reservas> findByReservasPKIdLaboratorio(Long idLaboratorio);

    List<Reservas> findByReservasPKCodigoDisciplina(Long codigoDisciplina);

    @Query(value = """
            SELECT r.agendamento AS horario,
                r.codigo_disciplina,
                r.id_laboratorio,
                l.nome AS laboratorio,
                l.predio AS predio,
                l.sala AS sala,
                d.nome AS disciplina
            FROM tb_reservas r
            INNER JOIN tb_laboratorios l ON r.id_laboratorio = l.id
            INNER JOIN tb_disciplinas d ON r.codigo_disciplina = d.codigo
            """, nativeQuery = true)
    List<ReservaResponse> buscarDadosReserva();
}
