package com.cefetmg.reserva_facil_laboratorios.services.impl.reservas.validations.aluno;

import com.cefetmg.reserva_facil_laboratorios.services.dtos.request.AlunoRequestDTO;

public interface AlunoValidation {
    public void validar(AlunoRequestDTO alunoRequestDTO);
}
