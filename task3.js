function createLiker() {
  return {
    raiting: 0,
    like: function() {
      this.raiting++;
      return this;
    },
    dislike: function() {
      this.raiting--;
      return this;
    },
    val: function() {
      return this.raiting;
    }
  }
};
