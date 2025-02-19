package com.cefetmg.reserva_facil_laboratorios.repositories;

import com.cefetmg.reserva_facil_laboratorios.models.Aluno;
import com.cefetmg.reserva_facil_laboratorios.repositories.projections.AlunosProjection;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface AlunoRepository extends JpaRepository<Aluno, Long> {
    @Query(value = """
            SELECT * FROM
            TB_ALUNOS;
            """, nativeQuery = true)
    List<AlunosProjection> listarAlunos();
}
