package com.cefetmg.reserva_facil_laboratorios.services.impl.validations.reserva;

import com.cefetmg.reserva_facil_laboratorios.models.Reservas;
import com.cefetmg.reserva_facil_laboratorios.utils.exceptions.ReservaException;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;

@Component
public class HorarioReservaValidation implements ReservaValidation{
    @Override
    public void validar(Reservas reservas) {
        LocalDateTime dataReserva = reservas.getAgendamento();
        if(dataReserva.getHour() == 23 || dataReserva.getHour() < 7){
            throw new RuntimeException("Favor cadastrar uma reserva entre 07:00 e 23:00");
        }
    }
}
