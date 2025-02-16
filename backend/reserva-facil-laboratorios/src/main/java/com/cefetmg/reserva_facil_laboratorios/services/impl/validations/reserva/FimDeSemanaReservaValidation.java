package com.cefetmg.reserva_facil_laboratorios.services.impl.validations.reserva;

import com.cefetmg.reserva_facil_laboratorios.models.Reservas;
import com.cefetmg.reserva_facil_laboratorios.utils.exceptions.ReservaException;
import org.springframework.stereotype.Component;

import java.time.DayOfWeek;
import java.time.LocalDateTime;

@Component
public class FimDeSemanaReservaValidation implements ReservaValidation{
    @Override
    public void validar(Reservas reservas) {
        LocalDateTime dataReserva = reservas.getAgendamento();

        if(dataReserva.getDayOfWeek().equals(DayOfWeek.SATURDAY) || dataReserva.getDayOfWeek().equals(DayOfWeek.SUNDAY)){
            throw new RuntimeException("Não é permitido reservas laboratórios durante os fins de semana.");
        }
    }
}
