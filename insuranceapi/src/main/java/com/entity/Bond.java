package com.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "bonds")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Bond {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String Username;
	private int age;
	private String gender;
	private String nominee;
	private Long addharNo;
	private String photo;
	private String alcoholic;
	private String tobbaco;
	private String health_history;
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	
	public String getUsername() {
		return Username;
	}
	public void setUsername(String username) {
		Username = username;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public String getNominee() {
		return nominee;
	}
	public void setNominee(String nominee) {
		this.nominee = nominee;
	}
	public Long getAddharNo() {
		return addharNo;
	}
	public void setAddharNo(Long addharNo) {
		this.addharNo = addharNo;
	}
	public String getPhoto() {
		return photo;
	}
	public void setPhoto(String photo) {
		this.photo = photo;
	}
	public String getAlcoholic() {
		return alcoholic;
	}
	public void setAlcoholic(String alcoholic) {
		this.alcoholic = alcoholic;
	}
	public String getTobbaco() {
		return tobbaco;
	}
	public void setTobbaco(String tobbaco) {
		this.tobbaco = tobbaco;
	}
	public String getHealth_history() {
		return health_history;
	}
	public void setHealth_history(String health_history) {
		this.health_history = health_history;
	}
	@Override
	public String toString() {
		return "Bonds [id=\" + id + \",Username=" + Username + ", age=" + age + ", gender=" + gender + ", nominee=" + nominee
				+ ", addharNo=" + addharNo + ", photo=" + photo + ", alcoholic=" + alcoholic + ", tobbaco=" + tobbaco
				+ ", health_history=" + health_history + "]";
	}
	public Bond(String username, int age, String gender, String nominee, Long addharNo, String photo, String alcoholic,
			String tobbaco, String health_history) {
		super();
		Username = username;
		this.age = age;
		this.gender = gender;
		this.nominee = nominee;
		this.addharNo = addharNo;
		this.photo = photo;
		this.alcoholic = alcoholic;
		this.tobbaco = tobbaco;
		this.health_history = health_history;
	}
	public Bond() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	
}
