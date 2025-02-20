package com.cefetmg.reserva_facil_laboratorios.services.dtos.response;

import com.cefetmg.reserva_facil_laboratorios.models.Professor;
import com.cefetmg.reserva_facil_laboratorios.utils.enums.CursosEnum;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class DisciplinaResponseDTO {
    private Long codigo;

    private String nome;

    private CursosEnum curso;

    private Professor professorId;

    private Integer qntdAlunos;
}
