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
@Table(name = "policies")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Policy {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String policy_type;
	private String policy_number;
	private String policy_name;
	private String policy_terms;
	private int policy_period;
	private int intrest;
	private int bonus;
	private Long admin_id;
	private int installments;
	private int installment_amt;
	private int returns;
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getPolicy_type() {
		return policy_type;
	}
	public void setPolicy_type(String policy_type) {
		this.policy_type = policy_type;
	}
	public String getPolicy_number() {
		return policy_number;
	}
	public void setPolicy_number(String policy_number) {
		this.policy_number = policy_number;
	}
	public String getPolicy_name() {
		return policy_name;
	}
	public void setPolicy_name(String policy_name) {
		this.policy_name = policy_name;
	}
	public String getPolicy_terms() {
		return policy_terms;
	}
	public void setPolicy_terms(String policy_terms) {
		this.policy_terms = policy_terms;
	}
	public int getPolicy_period() {
		return policy_period;
	}
	public void setPolicy_period(int policy_period) {
		this.policy_period = policy_period;
	}
	public int getIntrest() {
		return intrest;
	}
	public void setIntrest(int intrest) {
		this.intrest = intrest;
	}
	public int getBonus() {
		return bonus;
	}
	public void setBonus(int bonus) {
		this.bonus = bonus;
	}
	public Long getAdmin_id() {
		return admin_id;
	}
	public void setAdmin_id(Long admin_id) {
		this.admin_id = admin_id;
	}
	public int getInstallments() {
		return installments;
	}
	public void setInstallments(int installments) {
		this.installments = installments;
	}
	public int getInstallment_amt() {
		return installment_amt;
	}
	public void setInstallment_amt(int installment_amt) {
		this.installment_amt = installment_amt;
	}
	public int getReturns() {
		return returns;
	}
	public void setReturns(int returns) {
		this.returns = returns;
	}
	public Policy(Long id, String policy_type, String policy_number, String policy_name, String policy_terms,
			int policy_period, int intrest, int bonus, Long admin_id, int installments, int installment_amt,
			int returns) {
		super();
		this.id = id;
		this.policy_type = policy_type;
		this.policy_number = policy_number;
		this.policy_name = policy_name;
		this.policy_terms = policy_terms;
		this.policy_period = policy_period;
		this.intrest = intrest;
		this.bonus = bonus;
		this.admin_id = admin_id;
		this.installments = installments;
		this.installment_amt = installment_amt;
		this.returns = returns;
	}
	public Policy() {
		super();
		// TODO Auto-generated constructor stub
	}
	@Override
	public String toString() {
		return "Policy [id=" + id + ", policy_type=" + policy_type + ", policy_number=" + policy_number
				+ ", policy_name=" + policy_name + ", policy_terms=" + policy_terms + ", policy_period=" + policy_period
				+ ", intrest=" + intrest + ", bonus=" + bonus + ", admin_id=" + admin_id + ", installments="
				+ installments + ", installment_amt=" + installment_amt + ", returns=" + returns + "]";
	}
	
	
	
}
