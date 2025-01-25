package com.cefetmg.reserva_facil_laboratorios.repositories;

import com.cefetmg.reserva_facil_laboratorios.models.Aluno;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AlunoRepository extends JpaRepository<Aluno, Long> {}
