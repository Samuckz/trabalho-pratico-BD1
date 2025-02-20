package com.cefetmg.reserva_facil_laboratorios.services.impl.validations.reserva;

import com.cefetmg.reserva_facil_laboratorios.models.Disciplina;
import com.cefetmg.reserva_facil_laboratorios.models.Laboratorio;
import com.cefetmg.reserva_facil_laboratorios.models.Reservas;
import com.cefetmg.reserva_facil_laboratorios.repositories.DisciplinaRepository;
import com.cefetmg.reserva_facil_laboratorios.repositories.LaboratorioRepository;
import com.cefetmg.reserva_facil_laboratorios.utils.exceptions.ReservaException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class CapacidadeMaximaLaboratorioReservaValidation implements ReservaValidation{

    @Autowired private DisciplinaRepository disciplinaRepository;

    @Autowired private LaboratorioRepository laboratorioRepository;

    @Override
    public void validar(Reservas reservas) {

        Disciplina disciplina = disciplinaRepository.findById(reservas.getCodigoDisciplina()).get();

        Laboratorio laboratorio = laboratorioRepository.findById(reservas.getIdLaboratorio()).get();

        if (disciplina.getAlunosMatriculados().size() >= laboratorio.getCapacidadeMaxima()){
            throw new RuntimeException("O laboratório não comporta a quantidade de alunos desta disciplina");
        }

    }
}
