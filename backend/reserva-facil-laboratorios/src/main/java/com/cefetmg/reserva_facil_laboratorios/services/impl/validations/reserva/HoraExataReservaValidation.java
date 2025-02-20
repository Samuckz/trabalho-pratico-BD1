package com.cefetmg.reserva_facil_laboratorios.services.impl.validations.reserva;

import com.cefetmg.reserva_facil_laboratorios.models.Reservas;
import com.cefetmg.reserva_facil_laboratorios.utils.exceptions.ReservaException;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;

@Component
public class HoraExataReservaValidation implements ReservaValidation{
    @Override
    public void validar(Reservas reservas) {
        LocalDateTime localDateTime = reservas.getAgendamento();

        if(localDateTime.getMinute() != 0 || localDateTime.getSecond() != 0){
            throw new RuntimeException("Favor reservas o laboratório em um horario inteiro");
        }
    }
}
