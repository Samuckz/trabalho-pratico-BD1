package com.cefetmg.reserva_facil_laboratorios.services.impl.reservas.validations.laboratorio;

import com.cefetmg.reserva_facil_laboratorios.models.Laboratorio;
import com.cefetmg.reserva_facil_laboratorios.repositories.LaboratorioRepository;
import com.cefetmg.reserva_facil_laboratorios.services.dtos.request.LaboratorioRequestDTO;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.Optional;

public class ValidarSalaPredioLaboratorioValidation implements LaboratorioValidation{

    @Autowired private LaboratorioRepository laboratorioRepository;

    @Override
    public void validar(LaboratorioRequestDTO laboratorioRequestDTO) {
        Optional<Laboratorio> laboratorioOptional = laboratorioRepository.findByPredioAndSala(laboratorioRequestDTO.predio(), laboratorioRequestDTO.sala());

        if(laboratorioOptional.isPresent()){
            throw new RuntimeException("Já existe um laboratório cadastrado nessa sala e prédio");
        }
    }
}
