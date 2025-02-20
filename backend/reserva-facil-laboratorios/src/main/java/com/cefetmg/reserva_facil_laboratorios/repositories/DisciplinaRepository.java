package com.cefetmg.reserva_facil_laboratorios.repositories;

import com.cefetmg.reserva_facil_laboratorios.models.Disciplina;
import com.cefetmg.reserva_facil_laboratorios.repositories.projections.DisciplinaProjection;
import com.cefetmg.reserva_facil_laboratorios.repositories.projections.MatriculaResponseDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface DisciplinaRepository extends JpaRepository<Disciplina, Long> {

    @Query(value = """
            SELECT al.matricula as matricula,
              al.NOME AS nomeAluno,
              d.codigo as codigoDisciplina,
              d.NOME AS NOME_DISCIPLINA
                          FROM TB_ALUNOS al, TB_DISCIPLINAS d
                          WHERE EXISTS (
                              SELECT 1
                              FROM tb_matriculas apd
                              WHERE apd.MATRICULA = al.MATRICULA
                              AND apd.CODIGO = d.CODIGO
                          )
            """, nativeQuery = true)
    List<MatriculaResponseDTO> listarMatriculas();

    @Query(value = """
            SELECT d.codigo,
                    d.nome,
                    d.id as professorId,
                   COUNT(m.matricula) AS qntdAlunos
            FROM tb_disciplinas d
            LEFT JOIN tb_matriculas m ON d.codigo = m.codigo
            GROUP BY d.codigo;
            """, nativeQuery = true)
    List<DisciplinaProjection> listarDisciplinas();

    @Query(value = """
            SELECT d.codigo,
                    d.nome,
                    d.id as professorId,
                   COUNT(m.matricula) AS qntdAlunos
            FROM tb_disciplinas d
            LEFT JOIN tb_matriculas m ON d.codigo = m.codigo
            GROUP BY d.codigo
            HAVING COUNT(m.matricula) = 30;
            """, nativeQuery = true)
    List<DisciplinaProjection> listarDisciplinasComCapacidadeMaxima();
}
