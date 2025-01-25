package com.cefetmg.reserva_facil_laboratorios.models;

import com.cefetmg.reserva_facil_laboratorios.utils.enums.CursosEnum;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import java.util.HashSet;
import java.util.Set;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "TB_DISCIPLINAS")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Disciplina {
  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private Long codigo;

  @Column(nullable = false, length = 100)
  private String nome;

  @Column(nullable = false)
  private CursosEnum curso;

  @ManyToOne
  @JoinColumn(name = "id")
  private Professor professorId;

  @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
  @ManyToMany(mappedBy = "disciplinasMatriculadas", fetch = FetchType.LAZY)
  private Set<Aluno> alunosMatriculados = new HashSet<>();

  public Disciplina(String nome, CursosEnum curso, Professor professorId) {
    this.nome = nome;
    this.curso = curso;
    this.professorId = professorId;
  }
}
