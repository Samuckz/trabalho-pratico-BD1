package com.cefetmg.reserva_facil_laboratorios.services.impl.reservas.validations.aluno;

import com.cefetmg.reserva_facil_laboratorios.services.dtos.request.AlunoRequestDTO;
import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.time.Period;

@Component
public class ValidarIdadeAlunoValidation implements AlunoValidation{
    @Override
    public void validar(AlunoRequestDTO alunoRequestDTO) {
        LocalDate dataAtual = LocalDate.now();
        int idadeAluno = Period.between(alunoRequestDTO.dataNascimento(), dataAtual).getYears();
        if(idadeAluno < 17 || idadeAluno > 90){
            throw new RuntimeException("Favor inserir uma idade válida para um aluno");
        }
    }
}
