package com.cefetmg.reserva_facil_laboratorios.services.impl.validations.laboratorio;

import com.cefetmg.reserva_facil_laboratorios.services.dtos.request.LaboratorioRequestDTO;

public interface LaboratorioValidation {
    public void validar(LaboratorioRequestDTO laboratorioRequestDTO);
}
