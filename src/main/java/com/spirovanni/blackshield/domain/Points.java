package com.spirovanni.blackshield.domain;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import javax.validation.constraints.*;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.Objects;

/**
 * A Points.
 */
@Entity
@Table(name = "points")
public class Points implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @Column(name = "jhi_date", nullable = false)
    private LocalDate date;

    @Column(name = "mind")
    private Integer mind;

    @Column(name = "motive")
    private Integer motive;

    @Column(name = "motion")
    private Integer motion;

    @Lob
    @Column(name = "profile_image")
    private byte[] profileImage;

    @Column(name = "profile_image_content_type")
    private String profileImageContentType;

    @Min(value = 3)
    @Column(name = "weekly_goal")
    private Integer weeklyGoal;

    @ManyToOne
    @JsonIgnoreProperties("points")
    private User user;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalDate getDate() {
        return date;
    }

    public Points date(LocalDate date) {
        this.date = date;
        return this;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public Integer getMind() {
        return mind;
    }

    public Points mind(Integer mind) {
        this.mind = mind;
        return this;
    }

    public void setMind(Integer mind) {
        this.mind = mind;
    }

    public Integer getMotive() {
        return motive;
    }

    public Points motive(Integer motive) {
        this.motive = motive;
        return this;
    }

    public void setMotive(Integer motive) {
        this.motive = motive;
    }

    public Integer getMotion() {
        return motion;
    }

    public Points motion(Integer motion) {
        this.motion = motion;
        return this;
    }

    public void setMotion(Integer motion) {
        this.motion = motion;
    }

    public byte[] getProfileImage() {
        return profileImage;
    }

    public Points profileImage(byte[] profileImage) {
        this.profileImage = profileImage;
        return this;
    }

    public void setProfileImage(byte[] profileImage) {
        this.profileImage = profileImage;
    }

    public String getProfileImageContentType() {
        return profileImageContentType;
    }

    public Points profileImageContentType(String profileImageContentType) {
        this.profileImageContentType = profileImageContentType;
        return this;
    }

    public void setProfileImageContentType(String profileImageContentType) {
        this.profileImageContentType = profileImageContentType;
    }

    public Integer getWeeklyGoal() {
        return weeklyGoal;
    }

    public Points weeklyGoal(Integer weeklyGoal) {
        this.weeklyGoal = weeklyGoal;
        return this;
    }

    public void setWeeklyGoal(Integer weeklyGoal) {
        this.weeklyGoal = weeklyGoal;
    }

    public User getUser() {
        return user;
    }

    public Points user(User user) {
        this.user = user;
        return this;
    }

    public void setUser(User user) {
        this.user = user;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Points)) {
            return false;
        }
        return id != null && id.equals(((Points) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    @Override
    public String toString() {
        return "Points{" +
            "id=" + getId() +
            ", date='" + getDate() + "'" +
            ", mind=" + getMind() +
            ", motive=" + getMotive() +
            ", motion=" + getMotion() +
            ", profileImage='" + getProfileImage() + "'" +
            ", profileImageContentType='" + getProfileImageContentType() + "'" +
            ", weeklyGoal=" + getWeeklyGoal() +
            "}";
    }
}
