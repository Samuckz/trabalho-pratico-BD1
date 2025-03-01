package com.cefetmg.reserva_facil_laboratorios.services.impl.validations.reserva;

import com.cefetmg.reserva_facil_laboratorios.models.Reservas;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;

@Component
public class DataFuturaReservaValidation implements ReservaValidation {
    @Override
    public void validar(Reservas reservas) {
        LocalDateTime dataReserva = reservas.getAgendamento();
        LocalDateTime dataAtual = LocalDateTime.now();

        if(dataReserva.isBefore(dataAtual)){
            throw new RuntimeException("Não é permitido cadastrar o laboratório para uma data que já passou");
        }
    }
}
