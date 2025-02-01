package com.cefetmg.reserva_facil_laboratorios.services.impl.reservas.validations.laboratorio;

import com.cefetmg.reserva_facil_laboratorios.services.dtos.request.LaboratorioRequestDTO;

public class CapacidadeLaboratorioValidation implements LaboratorioValidation{
    @Override
    public void validar(LaboratorioRequestDTO laboratorioRequestDTO) {
        if(laboratorioRequestDTO.capacidadeMaxima() < 10 || laboratorioRequestDTO.capacidadeMaxima() > 30){
            throw new RuntimeException("Favor inserir uma capacidade máxima valida para um laboratório");
        }
    }
}
