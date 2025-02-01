package com.cefetmg.reserva_facil_laboratorios.services.impl.reservas.validations.reserva;

import com.cefetmg.reserva_facil_laboratorios.models.Reservas;
import com.cefetmg.reserva_facil_laboratorios.utils.exceptions.ReservaException;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;

@Component
public class DataFuturaReservaValidation implements ReservaValidation {
    @Override
    public void validar(Reservas reservas) {
        LocalDateTime dataReserva = reservas.getReservasPK().getAgendamento();
        LocalDateTime dataAtual = LocalDateTime.now();

        if(dataReserva.isBefore(dataAtual)){
            throw new ReservaException("Não é permitido cadastrar o laboratório para uma data que já passou");
        }
    }
}
