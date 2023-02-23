const createPerson = ({name = 'New User', skills = []}) => {
  this.name = name;
  this.skills = skills;

  return {
    name: this.name,
    skills: this.skills,
    addSkill(value) {
      this.skills = [...new Set([...this.skills, value])];
      return this;
    },
    removeSkill(value) {
      this.skills = this.skills.filter((item) => item !== value);
      return this;
    },
    addName(value) {
      this.name = value;
      return this;
    },
  }
};
