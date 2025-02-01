package com.cefetmg.reserva_facil_laboratorios.services.impl.reservas.validations;

import com.cefetmg.reserva_facil_laboratorios.models.Reservas;
import org.springframework.stereotype.Component;

import java.time.DayOfWeek;
import java.time.LocalDateTime;

@Component
public class FimDeSemanaReservaValidation implements ReservaValidation{
    @Override
    public void validar(Reservas reservas) {
        LocalDateTime dataReserva = reservas.getReservasPK().getAgendamento();

        if(dataReserva.getDayOfWeek().equals(DayOfWeek.SATURDAY) || dataReserva.getDayOfWeek().equals(DayOfWeek.SUNDAY)){
            throw new ReservaException("Não é permitido reservas laboratórios durante os fins de semana.");
        }
    }
}
