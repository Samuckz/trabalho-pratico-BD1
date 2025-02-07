package com.cefetmg.reserva_facil_laboratorios.services.impl.validations.laboratorio;

import com.cefetmg.reserva_facil_laboratorios.services.dtos.request.LaboratorioRequestDTO;
import org.springframework.stereotype.Component;

@Component
public class CapacidadeLaboratorioValidation implements LaboratorioValidation{
    @Override
    public void validar(LaboratorioRequestDTO laboratorioRequestDTO) {
        if(laboratorioRequestDTO.capacidadeMaxima() < 10 || laboratorioRequestDTO.capacidadeMaxima() > 30){
            throw new RuntimeException("Favor inserir uma capacidade máxima valida para um laboratório");
        }
    }
}
