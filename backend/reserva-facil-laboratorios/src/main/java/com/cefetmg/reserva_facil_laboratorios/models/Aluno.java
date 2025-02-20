package com.cefetmg.reserva_facil_laboratorios.models;

import com.cefetmg.reserva_facil_laboratorios.utils.enums.CursosEnum;
import jakarta.persistence.*;
import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "TB_ALUNOS")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Aluno {
  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private Long matricula;

  @Column(nullable = false, length = 100)
  private String nome;

  @Column(nullable = false)
  private LocalDate dataNascimento;

  @Column(nullable = false)
  private CursosEnum curso;

  @ManyToMany(fetch = FetchType.LAZY)
  @JoinTable(
      name = "TB_MATRICULAS",
      joinColumns = @JoinColumn(name = "matricula"),
      inverseJoinColumns = @JoinColumn(name = "codigo"))
  private Set<Disciplina> disciplinasMatriculadas = new HashSet<>();

  public Aluno(String nome, LocalDate dataNascimento, CursosEnum curso) {
    this.nome = nome;
    this.dataNascimento = dataNascimento;
    this.curso = curso;
  }
}
