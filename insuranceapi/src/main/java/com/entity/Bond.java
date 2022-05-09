package com.entity;

import java.io.File;

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

	
	private Long id;
	private Long policy_id;
	private String Username;
	private int age;
	private File file;
	private String gender;
	private String nominee;
	@Id
	private String addharNo;
	private String photo;
	private String alcoholic;
	private String tobbaco;
	private String health_history;
	private boolean paid=false;
	
	public File getFile() {
		return file;
	}
	public boolean getPaid() {
		return paid;
	}
	public void setPaid(boolean paid) {
		this.paid = paid;
	}
	
	public void setFile(File file) {
		this.file = file;
	}
	public Long getPolicy_id() {
		return policy_id;
	}
	public void setPolicy_id(Long policy_id) {
		this.policy_id = policy_id;
	}
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
	public String getAddharNo() {
		return addharNo;
	}
	public void setAddharNo(String addharNo) {
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
	public Bond(Long id, Long policy_id, String username, int age, File file, String gender, String nominee,
			String addharNo, String photo, String alcoholic, String tobbaco, String health_history, boolean paid) {
		super();
		this.id = id;
		this.policy_id = policy_id;
		Username = username;
		this.age = age;
		this.file = file;
		this.gender = gender;
		this.nominee = nominee;
		this.addharNo = addharNo;
		this.photo = photo;
		this.alcoholic = alcoholic;
		this.tobbaco = tobbaco;
		this.health_history = health_history;
		this.paid = paid;
	}
	public Bond() {
		super();
		// TODO Auto-generated constructor stub
	}
	@Override
	public String toString() {
		return "Bond [id=" + id + ", policy_id=" + policy_id + ", Username=" + Username + ", age=" + age + ", file="
				+ file + ", gender=" + gender + ", nominee=" + nominee + ", addharNo=" + addharNo + ", photo=" + photo
				+ ", alcoholic=" + alcoholic + ", tobbaco=" + tobbaco + ", health_history=" + health_history + ", paid="
				+ paid + "]";
	}
	
}